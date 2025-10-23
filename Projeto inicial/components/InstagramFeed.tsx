
import React from 'react';
import Section from './Section';

const InstagramFeed: React.FC = () => {
  return (
    <Section id="instagram" className="bg-neutral-900" title="NOSSO INSTAGRAM">
      <div className="text-center">
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Siga-nos <a href="https://instagram.com/kastrobares" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 font-semibold">@kastrobares</a> para ver nossos últimos eventos e novidades!
        </p>
        <a
          href="https://instagram.com/kastrobares"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg text-md hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
        >
          VER NO INSTAGRAM
        </a>
      </div>
    </Section>
  );
};

export default InstagramFeed;
