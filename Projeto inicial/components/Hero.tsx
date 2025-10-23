import React, { useState, useEffect } from 'react';
import Section from './Section'; // Hero is not a typical "Section" with title, so direct implementation

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&h=1080&auto=format&fit=crop')",
          transform: `translateY(${offsetY * 0.4}px)` // Parallax effect
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-6xl md:text-8xl font-black text-yellow-400 mb-6 drop-shadow-lg" style={{fontFamily: "'Playfair Display', serif"}}>
          Kastro Bares
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-light text-gray-200 drop-shadow-md">
          Viva essa experiência.
        </p>
        <a
          href="#contato"
          className="bg-yellow-400 text-black font-semibold py-4 px-10 rounded-lg text-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          ENTRE EM CONTATO
        </a>
      </div>
    </section>
  );
};

export default Hero;