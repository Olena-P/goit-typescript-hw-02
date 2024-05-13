import { useState, useEffect, useCallback } from "react";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import CustomLoader from "./CustomLoader";
import Modal from "./Modal";
import { ImageData, getImg } from "../services/ImagesPixabay";

const App = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [largeImageURL, setLargeImageURL] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loadMore, setLoadMore] = useState<boolean>(false);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);

    try {
      const { hits, totalHits } = await getImg(query, page);

      if (hits.length === 0) {
        return alert("No images found");
      }

      setImages((prevImages) => [...prevImages, ...hits]);
      setLoadMore(page < Math.ceil(totalHits / 12));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    fetchImages();
  }, [fetchImages, query, page]);

  const handleSearchSubmit = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (
    clickedLargeImageURL: string,
    clickedTags: string
  ) => {
    setLargeImageURL(clickedLargeImageURL);
    setTags(clickedTags);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setLargeImageURL("");
    setTags("");
    setShowModal(false);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}

      {error && <p>Something went wrong...</p>}

      {isLoading && <CustomLoader />}

      {loadMore && !isLoading && images.length > 0 && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}

      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
