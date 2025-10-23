
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>; // Type of icon prop made more specific
  title: string;
  description: string;
  highlight?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, highlight }) => {
  return (
    <div className={`bg-neutral-800 p-8 rounded-xl shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center
                     ${highlight ? 'border-2 border-yellow-400' : 'border-2 border-transparent'}`}>
      <div className="text-yellow-400 mb-6">
        {/* Removed 'as React.ReactElement' assertion */}
        {React.cloneElement(icon, { className: 'h-16 w-16' })}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: "'Playfair Display', serif"}}>{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
