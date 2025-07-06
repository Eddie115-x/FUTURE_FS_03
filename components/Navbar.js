import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaAmazon, FaBars, FaFacebook, FaInstagram, FaSpotify, FaTimes, FaTwitter, FaYoutube, FaApple } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['hero', 'music', 'spotify', 'videos', 'store', 'tour', 'newsletter'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu outside clicks and escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.closest('.mobile-menu-overlay') && !e.target.closest('nav, a, button')) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-charcoal/90 backdrop-blur-sm shadow-lg' : 'bg-charcoal/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center font-inter">
        {/* Logo and Social Links */}
        <div className="flex items-center space-x-4">
          <Link href="/#hero">
            <div className="flex items-center cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="NF Logo"
                width={40} 
                height={40}
                className="transition-transform hover:scale-105 rounded"
              />
            </div>
          </Link>
          
          {/* Social Icons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a href="https://youtube.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-crimson transition-colors">
              <FaYoutube size={18} />
            </a>
            <a href="https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-crimson transition-colors">
              <FaSpotify size={18} />
            </a>
            <a href="https://instagram.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-crimson transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="https://twitter.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-crimson transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="https://facebook.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-crimson transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="https://music.apple.com/us/artist/nf/1033827908" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-crimson transition-colors">
              <FaApple size={18} />
            </a>
            <a href="https://music.amazon.com/artists/B00QRC71LI/nf" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-crimson transition-colors">
              <FaAmazon size={18} />
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['hero', 'music', 'spotify', 'videos', 'store', 'tour', 'newsletter'].map((item) => (
            <Link 
              key={item} 
              href={`/#${item}`}
              className={`font-medium text-sm uppercase hover:text-crimson transition-colors ${activeSection === item ? 'text-crimson' : 'text-parchment'}`}
            >
              {item === 'hero' ? 'Home' : item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-parchment focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu-overlay md:hidden fixed top-0 left-0 w-full bg-white shadow-xl z-50 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8">
          <button 
            className="absolute top-6 right-6 text-charcoal hover:text-crimson transition-colors duration-300 z-10"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes size={28} />
          </button>
          
          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-8 pt-16 pb-12">
            {[
              { key: 'hero', label: 'HOME' },
              { key: 'music', label: 'MUSIC' },
              { key: 'videos', label: 'VIDEOS' },
              { key: 'tour', label: 'TOUR' },
              { key: 'store', label: 'STORE' },
              { key: 'newsletter', label: 'NEWSLETTER' }
            ].map((item) => (
              <Link 
                key={item.key} 
                href={`/#${item.key}`}
                className="font-display text-2xl font-bold uppercase text-charcoal hover:text-crimson transition-colors duration-300 tracking-wider py-2 px-4 relative group"
                onClick={closeMenu}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-crimson transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>
          
          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-8 pt-8 border-t border-charcoal/10">
            <a 
              href="https://youtube.com/nfrealmusic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-charcoal hover:text-crimson transition-all duration-300 hover:scale-110"
            >
              <FaYoutube size={28} />
            </a>
            <a 
              href="https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-charcoal hover:text-crimson transition-all duration-300 hover:scale-110"
            >
              <FaSpotify size={28} />
            </a>
            <a 
              href="https://instagram.com/nfrealmusic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-charcoal hover:text-crimson transition-all duration-300 hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
            <a 
              href="https://twitter.com/nfrealmusic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-charcoal hover:text-crimson transition-all duration-300 hover:scale-110"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
