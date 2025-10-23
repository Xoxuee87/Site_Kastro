import React, { useState } from 'react';
import Section from './Section';
import Lightbox from './Lightbox'; // Import the Lightbox component

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1551024709-8f237c20454d?q=80&w=600&h=400&auto=format&fit=crop', alt: 'Variedade de coquetéis coloridos em uma prateleira de bar' },
  { src: 'https://images.unsplash.com/photo-1560411319-8df01a433a59?q=80&w=600&h=400&auto=format&fit=crop', alt: 'Bartender preparando um drink com um toque de limão' },
  { src: 'https://images.unsplash.com/photo-1582106245673-a65c26aa1d2b?q=80&w=600&h=400&auto=format&fit=crop', alt: 'Estrutura do bar Kastro Bares montada em um evento ao ar livre' },
  { src: 'https://images.unsplash.com/photo-1571867424488-4560e9a27f27?q=80&w=600&h=400&auto=format&fit=crop', alt: 'Bartender concentrado preparando uma bebida especial' },
  { src: 'https://images.unsplash.com/photo-1533090481720-856c6e7c6c54?q=80&w=600&h=400&auto=format&fit=crop', alt: 'Ambiente de um evento noturno com o bar Kastro Bares ao fundo' },
  { src: 'https://images.unsplash.com/photo-1628087563227-edc0f3d9b4c9?q=80&w=600&h=400&auto=format&fit=crop', alt: 'Um de nossos bartenders sorrindo durante o serviço' },
];

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // Store the index of the currently selected image
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(null); // Reset the index
  };

  // Derive the current image object based on the index for passing to Lightbox
  const imageToShowInLightbox = currentImageIndex !== null ? galleryImages[currentImageIndex] : null;

  return (
    <>
      <Section id="galeria" className="bg-neutral-950" title="GALERIA">
        <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Momentos e drinks que marcaram nossos eventos. Veja um pouco da nossa atmosfera!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)} // Pass the index to openLightbox
              className="overflow-hidden rounded-lg shadow-lg group aspect-w-3 aspect-h-2 block w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
              aria-label={`View image ${index + 1}: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">Ver Mais</span>
              </div>
            </button>
          ))}
        </div>
      </Section>
      {/* Conditionally render Lightbox based on lightboxOpen and if an image is selected */}
      {lightboxOpen && imageToShowInLightbox && (
        <Lightbox
          imageUrl={imageToShowInLightbox.src}
          altText={imageToShowInLightbox.alt}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default Gallery;