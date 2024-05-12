export interface Image {
  id: string;
  webformatURL: string;
  tags: string;
  largeImageURL: string;
}

interface ImageGalleryItemProps {
  image: Image;
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
