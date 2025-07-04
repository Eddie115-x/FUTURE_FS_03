import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';

// Import fonts
import '@fontsource/bebas-neue';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

export default function Home() {
  // Add intersection observer for animation effects
  useEffect(() => {
    // Smooth scrolling navigation
    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
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
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Bebas+Neue&display=swap" rel="stylesheet" />
        
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

      {/* 1. Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-charcoal/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#hero" className="flex items-center">
              <Image src="/logo.jpg" alt="NF Logo" width={40} height={40} className="rounded" />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 font-inter">
              {['hero', 'music', 'spotify', 'videos', 'store', 'tour', 'newsletter'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item}`}
                  className="text-sm uppercase font-medium text-white hover:text-crimson transition-colors"
                >
                  {item === 'hero' ? 'Home' : item}
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="bg-charcoal text-white">
        {/* 2. Hero Section */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL526037_wkmzns.jpg"
              alt="NF - Real Music"
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/50 to-charcoal"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="mb-10 flex justify-center">
              <Image 
                src="/logo.jpg" 
                alt="NF Logo" 
                width={120} 
                height={120} 
                className="rounded-md"
              />
            </div>
            <p className="text-xl md:text-2xl mb-8 text-silver max-w-xl mx-auto font-inter">
              Cinematic. Honest. Raw. Welcome to the reimagined experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#music" className="bg-crimson text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-black transition-all">
                Listen Now
              </Link>
              <Link href="#tour" className="border border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-black transition-all">
                Tour Dates
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Music Section */}
        <section id="music" className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-bebas text-4xl md:text-5xl mb-4 text-crimson tracking-wide">LATEST MUSIC</h2>
              <p className="text-silver max-w-2xl mx-auto font-inter">
                Stream the latest tracks and albums from NF.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Album card 1 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/1/16/NF_-_Hope.png"
                    alt="NF Album - HOPE"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                <h3 className="font-bebas text-xl mb-2">HOPE</h3>
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
                    src="https://upload.wikimedia.org/wikipedia/en/0/06/NF_-_Clouds_%28The_Mixtape%29.png"
                    alt="NF Album - CLOUDS"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                <h3 className="font-bebas text-xl mb-2">CLOUDS</h3>
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
                    src="https://upload.wikimedia.org/wikipedia/en/2/29/The_Search_NF_album.jpg"
                    alt="NF Album - THE SEARCH"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                <h3 className="font-bebas text-xl mb-2">THE SEARCH</h3>
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
              <h2 className="font-bebas text-4xl md:text-5xl mb-4 text-crimson tracking-wide">STREAM ON SPOTIFY</h2>
              <p className="text-silver max-w-2xl mx-auto font-inter mb-8">
                Listen to NF's complete discography on Spotify
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto h-[380px]">
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
            </div>
          </div>
        </section>

        {/* 5. Videos Section */}
        <section id="videos" className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-bebas text-4xl md:text-5xl mb-4 text-crimson tracking-wide">MUSIC VIDEOS</h2>
              <p className="text-silver max-w-2xl mx-auto font-inter">
                Watch the latest music videos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Video 1 */}
              <div className="aspect-video relative rounded-md overflow-hidden">
                <Image
                  src="https://i.ytimg.com/vi/LJ-HYKpQyb8/maxresdefault.jpg"
                  alt="HAPPY"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-crimson rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bebas tracking-wide">HAPPY</h3>
                  </div>
                </div>
              </div>
              
              {/* Video 2 */}
              <div className="aspect-video relative rounded-md overflow-hidden">
                <Image
                  src="https://i.ytimg.com/vi/pOCpfAD0iJA/maxresdefault.jpg"
                  alt="MOTTO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-crimson rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bebas tracking-wide">MOTTO</h3>
                  </div>
                </div>
              </div>
              
              {/* Video 3 */}
              <div className="aspect-video relative rounded-md overflow-hidden">
                <Image
                  src="https://i.ytimg.com/vi/fibYknUCx-4/maxresdefault.jpg"
                  alt="CLOUDS"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-crimson rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bebas tracking-wide">CLOUDS</h3>
                  </div>
                </div>
              </div>
              
              {/* Video 4 */}
              <div className="aspect-video relative rounded-md overflow-hidden">
                <Image
                  src="https://i.ytimg.com/vi/fnlJw9H0xAM/maxresdefault.jpg"
                  alt="THE SEARCH"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-crimson rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bebas tracking-wide">THE SEARCH</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://www.youtube.com/channel/UCoRR6OLuIZ2-79ry4W5I-xw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-crimson text-white px-6 py-3 rounded-sm inline-flex items-center font-inter"
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
              <h2 className="font-bebas text-4xl md:text-5xl mb-4 text-crimson tracking-wide">MERCHANDISE</h2>
              <p className="text-silver max-w-2xl mx-auto font-inter">
                Official NF merchandise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Product 1 - Hoodie */}
              <div className="bg-charcoal rounded-md overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="https://res.cloudinary.com/teepublic/image/private/s--BiEjqOkq--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1559731994/production/designs/4989983_0.jpg"
                    alt="NF Logo Hoodie"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bebas text-lg tracking-wide mb-1">NF LOGO HOODIE</h3>
                  <p className="text-crimson font-medium mb-3">$55.00</p>
                  <button className="w-full bg-crimson text-white py-2 font-inter text-sm rounded-sm">
                    ADD TO CART
                  </button>
                </div>
              </div>
              
              {/* Product 2 - Tee */}
              <div className="bg-charcoal rounded-md overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjB0c2hpcnR8ZW58MHx8MHx8&w=1000&q=80"
                    alt="NF Tour Tee"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bebas text-lg tracking-wide mb-1">HOPE TOUR TEE</h3>
                  <p className="text-crimson font-medium mb-3">$35.00</p>
                  <button className="w-full bg-crimson text-white py-2 font-inter text-sm rounded-sm">
                    ADD TO CART
                  </button>
                </div>
              </div>
              
              {/* Product 3 - Hat */}
              <div className="bg-charcoal rounded-md overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBoYXR8ZW58MHx8MHx8&w=1000&q=80"
                    alt="NF Snapback"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bebas text-lg tracking-wide mb-1">NF SNAPBACK</h3>
                  <p className="text-crimson font-medium mb-3">$30.00</p>
                  <button className="w-full bg-crimson text-white py-2 font-inter text-sm rounded-sm">
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
              <h2 className="font-bebas text-4xl md:text-5xl mb-4 text-crimson tracking-wide">TOUR DATES</h2>
              <p className="text-silver max-w-2xl mx-auto font-inter">
                Stay updated on upcoming shows
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto text-center py-12 px-6 bg-charcoal rounded-md">
              <h3 className="text-2xl font-bebas mb-4">NO SHOWS CURRENTLY AVAILABLE</h3>
              <p className="text-silver mb-8 font-inter">
                Join our mailing list to be the first to know about upcoming tour dates
              </p>
              
              <button className="bg-crimson text-white px-8 py-3 rounded-sm font-inter">
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
                <h2 className="font-bebas text-4xl md:text-5xl mb-4 text-crimson tracking-wide">JOIN THE NF FAMILY</h2>
                <p className="text-silver font-inter">
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
                  <label className="ml-2 text-sm font-inter text-silver">
                    I want to receive news, tour dates, and exclusive content from NF
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-crimson text-white py-3 rounded-sm font-medium font-inter"
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
            <div className="flex flex-col items-center md:items-start gap-6 mb-6 md:mb-0">
              <Image 
                src="/logo.jpg" 
                alt="NF Logo" 
                width={80} 
                height={40} 
                className="opacity-90 rounded"
              />
              
              <div className="flex items-center space-x-4 bg-[#4B4B45] px-5 py-2 rounded-full">
                <a href="https://facebook.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="https://instagram.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://twitter.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="https://youtube.com/nfrealmusic" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
                <a href="https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2 14.414c2.194.512 4.806.504 7 0 .198-.046.32-.252.257-.437-.629-1.831-1.444-3.521-2.443-5.087-.141-.22-.462-.217-.603.005-.893 1.391-1.621 2.924-2.167 4.522-.105.31.101.634.425.56.322-.073.655-.116.986-.149.284-.028.464-.293.362-.56-.312-.809-.641-1.598-.996-2.369-.051-.111-.19-.136-.276-.056-.646.611-1.369 1.128-2.144 1.531-.28.146-.334.501-.095.686.352.273.719.518 1.097.732.259.147.555-.037.597-.316zm4.5-3.903c.73-.055-.044-.202-.116-.237-1.478-.716-3.089-1.045-4.701-.968-.275.013-.451.28-.395.538.091.418.208.829.349 1.229.048.138.245.182.376.131 1.019-.395 2.124-.507 3.188-.33.239.04.499-.178.43-.416-.075-.258-.169-.511-.279-.757-.115-.254-.486-.254-.852-.19zm.544-1.437c-.168-.323-.611-.275-.87-.189-.916.306-1.891.437-2.854.383-.245-.014-.392.205-.336.439.085.357.205.701.357 1.028.053.113.206.151.32.108 1.193-.463 2.478-.606 3.729-.422.175.026.337-.112.337-.287-.001-.288-.055-.571-.16-.844-.042-.11-.122-.156-.237-.156-.369 0-.326.04-.286-.06zm-.586-1.516c-1.128.525-2.362.772-3.597.726-.22-.008-.343.173-.294.366.081.321.195.633.343.928.049.099.197.126.288.074 1.41-.806 3.058-1.024 4.631-.648.209.05.406-.14.337-.355-.143-.451-.324-.886-.54-1.303-.121-.235-.451-.179-1.168-.212v.424z"/></svg>
                </a>
                <a href="https://music.apple.com/us/artist/nf/1033827908" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/></svg>
                </a>
                <a href="https://music.amazon.com/artists/B00QRC71LI/nf" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.62-2.54 1.897-.059.285-.259.564-.539.579l-3.049-.333c-.245-.052-.517-.241-.443-.602 1.103-6.242 10.675-4.698 10.675 2.294v4.133c0 1.204.557 1.736 1.057 2.383.18.234.219.512-.004.691l-2.544 2.214c-.211.183-.474.167-.68.037zm9.81-19.794l.037.048v.036c-.139 4.137-.829 8.607-3.249 12.285-1.35 2.05-3.099 3.776-5.228 5.055-.16.074-.347.05-.437-.074l-1.436-1.207c-.142-.118-.176-.348-.024-.51 2.423-1.673 4.259-3.996 5.255-6.775 1.077-2.991 1.299-6.691.856-10.046-.044-.276.088-.517.36-.567l2.645-.412c.335-.047.602.159.657.465-.4.843-.9 1.694.564 1.702z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-silver text-sm mb-2 font-inter">
                &copy; {new Date().getFullYear()} NF | All Rights Reserved
              </p>
              <div className="flex space-x-6 justify-center md:justify-end mt-4">
                <a href="#" className="text-silver hover:text-white text-sm font-inter">Privacy Policy</a>
                <a href="#" className="text-silver hover:text-white text-sm font-inter">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}