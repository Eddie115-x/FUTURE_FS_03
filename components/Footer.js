import Link from 'next/link';
import { FaAmazon, FaFacebook, FaInstagram, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-parchment py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="NF Logo" 
                width={60} 
                height={60} 
                className="rounded mr-2"
              />
            </div>
            <p className="text-silver text-sm mb-6">
              Official website for NF. New music, videos, and tour dates.
            </p>
            <div className="flex items-center space-x-4 bg-stone px-5 py-2 rounded-full">
              <a href="https://facebook.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-gold transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="https://instagram.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-gold transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="https://twitter.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-gold transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="https://youtube.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-gold transition-colors">
                <FaYoutube size={18} />
              </a>
              <a href="https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-gold transition-colors">
                <FaSpotify size={18} />
              </a>
              <a href="https://music.apple.com/us/artist/nf/1033827908" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-gold transition-colors">
                <SiApplemusic size={18} />
              </a>
              <a href="https://music.amazon.com/artists/B00QRC71LI/nf" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-gold transition-colors">
                <FaAmazon size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/#home" className="text-silver hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/#music" className="text-silver hover:text-white transition-colors">
                Music
              </Link>
              <Link href="/#videos" className="text-silver hover:text-white transition-colors">
                Videos
              </Link>
              <Link href="/#store" className="text-silver hover:text-white transition-colors">
                Merch
              </Link>
              <Link href="/#tour" className="text-silver hover:text-white transition-colors">
                Tour
              </Link>
              <Link href="/#newsletter" className="text-silver hover:text-white transition-colors">
                Newsletter
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-silver mb-2">Management: management@nfrealmusic.com</p>
            <p className="text-silver mb-2">Booking: booking@nfrealmusic.com</p>
            <p className="text-silver mb-2">Press: press@nfrealmusic.com</p>
            <a href="mailto:info@nfrealmusic.com" className="inline-block mt-2 text-crimson hover:underline transition-all">
              info@nfrealmusic.com
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-silver text-sm">
          <p>&copy; {year} NF Real Music. All Rights Reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
