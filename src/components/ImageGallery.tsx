import { ImageData } from "../services/ImagesPixabay";
import ImageGalleryItem from "./ImageGalleryItem";

interface ImageGalleryProps {
  images: ImageData[];
  onImageClick: (url: string, tags: string) => void;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
