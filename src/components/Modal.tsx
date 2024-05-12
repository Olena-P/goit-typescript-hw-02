import { useEffect } from "react";

interface ModalProps {
  largeImageURL: string;
  tags: string;
  onClose: () => void;
}

const Modal = ({ largeImageURL, onClose, tags }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <p>{tags}</p>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
