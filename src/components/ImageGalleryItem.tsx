import { ImageData } from "../services/ImagesPixabay";

interface ImageGalleryItemProps {
  image: ImageData;
  onClick: (url: string, tags: string) => void;
}

const ImageGalleryItem = ({ image, onClick }: ImageGalleryItemProps) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={() => onClick(image.largeImageURL, image.tags)}
      />
    </li>
  );
};

export default ImageGalleryItem;
