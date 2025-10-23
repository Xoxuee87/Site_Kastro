import React from 'react';
import { useSimpleInView } from '../hooks/useSimpleInView';

interface SectionProps {
  id: string;
  className?: string;
  title?: string;
  titleClassName?: string;
  children: React.ReactNode;
  containerClassName?: string;
  animate?: boolean; // New prop to control animation
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className, 
  title, 
  titleClassName, 
  children, 
  containerClassName,
  animate = true // Default to true
}) => {
  const [ref, inView] = useSimpleInView<HTMLElement>({ triggerOnce: true, threshold: 0.1 });

  const animationClasses = animate 
    ? `transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
    : '';

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`py-16 md:py-24 ${animationClasses} ${className || ''}`}
    >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName || ''}`}>
        {title && (
          <h2 className={`text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 tracking-tight ${titleClassName || 'text-yellow-400'}`} style={{fontFamily: "'Playfair Display', serif"}}>
            {title.toUpperCase()}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;