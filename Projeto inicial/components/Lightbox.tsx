import React, { useEffect } from 'react';
import { XMarkIcon } from './icons';

interface LightboxProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, altText, onClose }) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4"
      onClick={onClose} // Close on overlay click
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      <div 
        className="relative bg-neutral-900 p-2 md:p-4 rounded-lg shadow-2xl max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image/modal itself
      >
        <img 
          src={imageUrl} 
          alt={altText} 
          className="object-contain max-w-[90vw] max-h-[85vh] rounded" 
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-3 md:right-3 bg-neutral-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-colors"
          aria-label="Close lightbox"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;