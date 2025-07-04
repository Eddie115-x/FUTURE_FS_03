import Link from 'next/link';
import { FaInstagram, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">NF // REAL MUSIC</h3>
            <p className="text-silver text-sm mb-6">
              Official website for NF. New music, videos, and tour dates.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://youtube.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-white transition-colors">
                <FaSpotify size={20} />
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
