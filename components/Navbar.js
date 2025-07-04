import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaAmazon, FaBars, FaFacebook, FaInstagram, FaSpotify, FaTimes, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
      const sections = ['home', 'music', 'videos', 'store', 'tour', 'newsletter'];
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center font-inter">
        {/* Logo */}
        <Link href="/#home">
          <div className="flex items-center cursor-pointer">
            <Image 
              src="/logo.jpg" 
              alt="NF Logo"
              width={50} 
              height={50}
              className="transition-transform hover:scale-105 rounded"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {['home', 'music', 'videos', 'store', 'tour', 'newsletter'].map((item) => (
              <Link 
                key={item} 
                href={`/#${item}`}
                className={`font-medium text-sm uppercase hover:text-crimson transition-colors ${activeSection === item ? 'text-crimson' : 'text-white'}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 bg-[#4B4B45] px-5 py-2 rounded-full">
            <a href="https://facebook.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="https://instagram.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="https://twitter.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="https://youtube.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
              <FaYoutube size={18} />
            </a>
            <a href="https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
              <FaSpotify size={18} />
            </a>
            <a href="https://music.apple.com/us/artist/nf/1033827908" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
              <SiApplemusic size={18} />
            </a>
            <a href="https://music.amazon.com/artists/B00QRC71LI/nf" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
              <FaAmazon size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          className="absolute top-4 right-4 text-white"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>

        <div className="flex flex-col space-y-8 items-center">
          {['home', 'music', 'videos', 'store', 'tour', 'newsletter'].map((item) => (
            <Link 
              key={item} 
              href={`/#${item}`}
              className="font-medium text-xl uppercase text-white hover:text-crimson transition-colors"
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-5 mt-12 bg-[#4B4B45] px-6 py-3 rounded-full">
          <a href="https://facebook.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
            <FaFacebook size={22} />
          </a>
          <a href="https://instagram.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
            <FaInstagram size={22} />
          </a>
          <a href="https://twitter.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
            <FaTwitter size={22} />
          </a>
          <a href="https://youtube.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
            <FaYoutube size={22} />
          </a>
          <a href="https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
            <FaSpotify size={22} />
          </a>
          <a href="https://music.apple.com/us/artist/nf/1033827908" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
            <SiApplemusic size={22} />
          </a>
          <a href="https://music.amazon.com/artists/B00QRC71LI/nf" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
            <FaAmazon size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
