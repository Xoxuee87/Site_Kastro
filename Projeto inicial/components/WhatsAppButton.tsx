import React from 'react';
import { WhatsAppIcon } from './icons';

// IMPORTANT: Replace with your actual WhatsApp number in international format (e.g., 5511999999999 for Brazil)
const WHATSAPP_NUMBER = "55XXYYYYYZZZZ"; // Example for Brazil: 55 followed by area code and number
const WHATSAPP_MESSAGE = "Olá! Gostaria de mais informações sobre os serviços da Kastro Bares."; // Optional pre-filled message

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition-all duration-300 ease-in-out z-50 transform hover:scale-110"
      aria-label="Entre em contato pelo WhatsApp"
      title="Entre em contato pelo WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;