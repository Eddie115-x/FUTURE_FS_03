import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import EmbedVerification from '../components/EmbedVerification';
import Navbar from '../components/Navbar';

// Import fonts
// Using Google Fonts for both Inter and Maven Pro

export default function Home() {
  // State to track if video failed to load
  const [videoFailed, setVideoFailed] = useState(false);
  
  // Add effect for loading background video
  useEffect(() => {
    // Get the video element
    const videoElement = document.getElementById('bg-video');
    if (videoElement) {
      // Force load the video
      videoElement.load();
      
      // Log when video loads or errors
      videoElement.addEventListener('loadeddata', () => {
        console.log('Background video loaded successfully');
        setVideoFailed(false);
      });
      
      videoElement.addEventListener('error', (e) => {
        console.error('Error loading background video:', e);
        setVideoFailed(true);
      });
      
      // Set timeout for video loading
      const timeout = setTimeout(() => {
        if (videoElement.readyState < 2) {
          console.warn('Video taking too long to load, showing fallback image');
          setVideoFailed(true);
        }
      }, 5000);
      
      return () => clearTimeout(timeout);
    }
  }, []);

  // Add intersection observer for animation effects
  useEffect(() => {
    // Smooth scrolling navigation
    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        // Handle case where href is just '#' (avoid invalid selector)
        if (targetId === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    // Animation on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    // Clean up event listeners
    return () => {
      elements.forEach(el => observer.unobserve(el));
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>NF // Real Music</title>
        <meta name="description" content="Official website for NF. Check out the latest music, videos, tour dates and merchandise from award-winning hip-hop artist NF." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        {/* Preconnect to improve font loading performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nfrealmusic.com/" />
        <meta property="og:title" content="NF // Real Music" />
        <meta property="og:description" content="Official website for NF. Check out the latest music, videos, tour dates and merchandise." />
        <meta property="og:image" content="https://nfrealmusic.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nfrealmusic.com/" />
        <meta property="twitter:title" content="NF // Real Music" />
        <meta property="twitter:description" content="Official website for NF. Check out the latest music, videos, tour dates and merchandise." />
        <meta property="twitter:image" content="https://nfrealmusic.com/og-image.jpg" />
      </Head>

      {/* Navigation */}
      <Navbar />

      <main className="bg-charcoal text-white">
        {/* 2. Hero Section with Background Video */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 overflow-hidden bg-black">
          {/* Background Video */}
          <video
            id="bg-video"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
            poster="/hope.png"
            preload="auto"
            controls={false}
          >
            <source src="/nf-loop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-charcoal/60 to-charcoal/70 z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="mb-6">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-widest text-parchment mb-3 drop-shadow-xl">NF</h1>
              <div className="w-20 h-1 bg-crimson mx-auto mb-6"></div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-silver max-w-xl mx-auto font-sans">
              Real Music Till I die.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#music" className="bg-crimson text-parchment px-8 py-3 rounded-sm font-medium font-sans hover:bg-parchment hover:text-slate transition-all">
                Listen Now
              </Link>
              <Link href="#tour" className="border border-parchment text-parchment px-8 py-3 rounded-sm font-medium font-sans hover:bg-parchment hover:text-slate transition-all">
                Tour Dates
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Music Section */}
        <section id="music" className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-4 text-crimson tracking-wide uppercase">Latest Music</h2>
              <p className="text-silver max-w-2xl mx-auto font-sans">
                Stream the latest tracks and albums from NF.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Album card 1 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src="/hope.png"
                    alt="NF Album - HOPE"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                <h3 className="font-display text-xl mb-2">HOPE</h3>
                <div className="flex space-x-3 mt-2">
                  <button className="bg-crimson text-white px-4 py-2 rounded-sm font-inter text-sm">
                    Listen Now
                  </button>
                  <button className="border border-white text-white px-4 py-2 rounded-sm font-inter text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
              
              {/* Album card 2 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src="/clouds.png"
                    alt="NF Album - CLOUDS"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                <h3 className="font-display text-xl mb-2">CLOUDS</h3>
                <div className="flex space-x-3 mt-2">
                  <button className="bg-crimson text-white px-4 py-2 rounded-sm font-inter text-sm">
                    Listen Now
                  </button>
                  <button className="border border-white text-white px-4 py-2 rounded-sm font-inter text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
              
              {/* Album card 3 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src="/search.png"
                    alt="NF Album - THE SEARCH"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                <h3 className="font-display text-xl mb-2">THE SEARCH</h3>
                <div className="flex space-x-3 mt-2">
                  <button className="bg-crimson text-white px-4 py-2 rounded-sm font-inter text-sm">
                    Listen Now
                  </button>
                  <button className="border border-white text-white px-4 py-2 rounded-sm font-inter text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 4. Spotify Section */}
        <section id="spotify" className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-4xl md:text-5xl mb-4 text-crimson tracking-wide uppercase">Stream on Spotify</h2>
              <p className="text-silver max-w-2xl mx-auto font-sans mb-8">
                Listen to NF's complete discography on Spotify
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto h-[380px]">
              <EmbedVerification type="spotify">
                <iframe 
                  src="https://open.spotify.com/embed/artist/6fOMl44jA4Sp5b9PpYCkzz?utm_source=generator" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="rounded-md shadow-lg"
                ></iframe>
              </EmbedVerification>
            </div>
          </div>
        </section>

        {/* 5. Videos Section */}
        <section id="videos" className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-4 text-crimson tracking-wide uppercase">Music Videos</h2>
              <p className="text-silver max-w-2xl mx-auto font-sans">
                Watch the latest music videos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Video 1 - HAPPY */}
              <div className="video-container flex flex-col items-center">
                <div className="w-full aspect-video relative">
                  <EmbedVerification videoId="vhumOLNSSJY" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-display tracking-wider text-parchment">HAPPY</h3>
                </div>
              </div>
              
              {/* Video 2 - MOTTO */}
              <div className="video-container flex flex-col items-center">
                <div className="w-full aspect-video relative">
                  <EmbedVerification videoId="0YKOxtOb44c" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-display tracking-wider text-parchment">MOTTO</h3>
                </div>
              </div>
              
              {/* Video 3 - CLOUDS */}
              <div className="video-container flex flex-col items-center">
                <div className="w-full aspect-video relative">
                  <EmbedVerification videoId="fibYknUCIU4?si=nObmME_PkNv_CPSG" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-display tracking-wider text-parchment">CLOUDS</h3>
                </div>
              </div>
              
              {/* Video 4 - THE SEARCH */}
              <div className="video-container flex flex-col items-center">
                <div className="w-full aspect-video relative">
                  <EmbedVerification videoId="fnlJw9H0xAM" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-display tracking-wider text-parchment">THE SEARCH</h3>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://www.youtube.com/@NFVEVO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-crimson text-parchment px-6 py-3 rounded-sm inline-flex items-center font-sans"
              >
                <span className="mr-2">YouTube Channel</span>
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* 6. Store Section */}
        <section id="store" className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-4 text-crimson tracking-wide uppercase">Merchandise</h2>
              <p className="text-silver max-w-2xl mx-auto font-sans">
                Official NF merchandise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Product 1 - Hoodie */}
              <div className="bg-charcoal rounded-md overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="/nf-hope.png"
                    alt="NF Logo Hoodie"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display text-lg tracking-wide mb-1">NF HOPE HOODIE</h3>
                  <p className="text-crimson font-medium mb-3">$55.00</p>
                  <button className="w-full bg-crimson text-parchment py-2 font-sans text-sm rounded-sm">
                    ADD TO CART
                  </button>
                </div>
              </div>
              
              {/* Product 2 - Tee */}
              <div className="bg-charcoal rounded-md overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="/RUNNING_CEMENT_TEE_BACK.png"
                    alt="NF Tour Tee"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display text-lg tracking-wide mb-1">HOPE TOUR TEE</h3>
                  <p className="text-crimson font-medium mb-3">$35.00</p>
                  <button className="w-full bg-crimson text-parchment py-2 font-sans text-sm rounded-sm">
                    ADD TO CART
                  </button>
                </div>
              </div>
              
              {/* Product 3 - Hat */}
              <div className="bg-charcoal rounded-md overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="/hat.png"
                    alt="NF Snapback"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display text-lg tracking-wide mb-1">NF SNAPBACK</h3>
                  <p className="text-crimson font-medium mb-3">$30.00</p>
                  <button className="w-full bg-crimson text-parchment py-2 font-sans text-sm rounded-sm">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Tour Section */}
        <section id="tour" className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl mb-4 text-crimson tracking-wide uppercase">Tour Dates</h2>
              <p className="text-silver max-w-2xl mx-auto font-sans">
                Stay updated on upcoming shows
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto text-center py-12 px-6 bg-charcoal rounded-md">
              <h3 className="text-2xl font-display mb-4 uppercase">No Shows Currently Available</h3>
              <p className="text-silver mb-8 font-sans">
                Join our mailing list to be the first to know about upcoming tour dates
              </p>
              
              <button className="bg-crimson text-parchment px-8 py-3 rounded-sm font-sans">
                GET NOTIFIED
              </button>
            </div>
          </div>
        </section>

        {/* 8. Newsletter Section */}
        <section id="newsletter" className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-4xl md:text-5xl mb-4 text-crimson tracking-wide uppercase">Join the NF Family</h2>
                <p className="text-silver font-sans">
                  Subscribe to get exclusive updates and releases
                </p>
              </div>
              
              <form className="bg-charcoal p-6 rounded-md">
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-sm font-inter"
                  />
                </div>
                
                <div className="mb-4">
                  <select className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-sm font-inter appearance-none">
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 bg-black border border-gray-700 rounded"
                    />
                  </div>
                  <label className="ml-2 text-sm font-sans text-silver">
                    I want to receive news, tour dates, and exclusive content from NF
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-crimson text-parchment py-3 rounded-sm font-medium font-sans"
                >
                  REGISTER
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="bg-charcoal py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <Image 
                src="/logo.png" 
                alt="NF Logo" 
                width={80} 
                height={40} 
                className="opacity-90 rounded"
              />
            </div>
            
            <div className="text-center">
              <p className="text-silver text-sm mb-2 font-sans">
                &copy; {new Date().getFullYear()} NF | All Rights Reserved
              </p>
              <div className="flex space-x-6 justify-center mt-4">
                <a href="#" className="text-silver hover:text-parchment text-sm font-sans">Privacy Policy</a>
                <a href="#" className="text-silver hover:text-parchment text-sm font-sans">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}