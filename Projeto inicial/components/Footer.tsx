
import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://instagram.com/kastrobares" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            <InstagramIcon className="h-7 w-7" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            <FacebookIcon className="h-7 w-7" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            <TwitterIcon className="h-7 w-7" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kastro Bares. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Design por Inteligência Artificial & Amor por Eventos
        </p>
      </div>
    </footer>
  );
};

export default Footer;
