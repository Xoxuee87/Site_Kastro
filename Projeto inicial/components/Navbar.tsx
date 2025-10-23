import React, { useState, useEffect, useCallback } from 'react';
import { MenuIcon, XMarkIcon } from './icons';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#contato', label: 'Contato' },
];

const NAV_HEIGHT_OFFSET = 100; // Adjust based on actual nav height + desired offset

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    // Scrolled state for background
    setIsScrolled(window.scrollY > 50);

    // Active link highlighting
    let currentSectionId = '';
    const scrollPosition = window.scrollY + NAV_HEIGHT_OFFSET;
    
    // Check hero first if needed, though it's not in navLinks for active styling here
    // const heroElement = document.getElementById('hero');
    // if (heroElement && scrollPosition < heroElement.offsetTop + heroElement.offsetHeight) {
    //   // Potentially set something for hero, or clear activeSection if Kastro Bares logo should be highlighted
    // }

    for (const link of navLinks) {
      const section = document.getElementById(link.href.substring(1));
      if (section) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentSectionId = section.id;
          break;
        }
      }
    }
    // If no section is active (e.g., at the very top or bottom of page), clear active state
    // or set to first/last based on scroll direction if desired.
    // For now, only set if a section matches.
    setActiveSection(currentSectionId);

  }, []);


  useEffect(() => {
    handleScroll(); // Call on mount to set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isOpen) {
      setIsOpen(false);
    }
    // Smooth scroll for internal links
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calculate offset considering the fixed navbar height
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px padding

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        setActiveSection(targetId); // Optionally set active section immediately on click
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled || isOpen ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" 
             className="text-3xl font-bold text-yellow-400" 
             style={{fontFamily: "'Playfair Display', serif"}} 
             onClick={(e) => handleLinkClick(e, '#hero')}>
            Kastro Bares
          </a>
          <div className="hidden md:flex space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-yellow-400
                            ${activeSection === link.href.substring(1) ? 'text-yellow-400 font-semibold' : 'text-gray-200'}`}
                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-yellow-400 hover:bg-gray-800
                          ${activeSection === link.href.substring(1) ? 'text-yellow-400 bg-gray-700' : 'text-gray-200'}`}
              aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;