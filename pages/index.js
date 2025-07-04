import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Import fonts
import '@fontsource/bebas-neue';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

export default function Home() {
  // Add intersection observer for animation effects
  useEffect(() => {
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

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Head>
        <title>NF // Real Music</title>
        <meta name="description" content="Official website for NF. Check out the latest music, videos, tour dates and merchandise from award-winning hip-hop artist NF." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
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

      <Navbar />

      <main className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/nf-hero.jpg"
              alt="NF - Real Music"
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-4 tracking-wide">
              NF // REAL MUSIC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-silver max-w-2xl mx-auto">
              Authentic. Raw. Unfiltered.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#music" className="bg-crimson hover:bg-crimson/90 text-white px-8 py-3 rounded-sm transition-all duration-300 transform hover:scale-105 font-medium">
                Latest Music
              </Link>
              <Link href="/#tour" className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-sm transition-all duration-300 transform hover:scale-105 font-medium">
                Tour Dates
              </Link>
            </div>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll opacity-0">
              <h2 className="font-heading text-4xl md:text-5xl mb-4">LATEST MUSIC</h2>
              <p className="text-silver max-w-2xl mx-auto">
                Stream the latest tracks and albums from NF.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Album Cards would go here - placeholder for now */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 animate-on-scroll opacity-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/nf-hope.jpg"
                      alt={`NF Album ${item}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">HOPE</h3>
                    <p className="text-silver mb-4">Released: 2023</p>
                    <div className="flex space-x-4">
                      <a href="https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
                        Spotify
                      </a>
                      <a href="https://music.apple.com/us/artist/nf/1030990030" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                        Apple Music
                      </a>
                      <a href="https://www.youtube.com/channel/UCoRR6OLuIZ2-79ry4W5I-xw" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Spotify Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0">
                <h2 className="font-heading text-4xl md:text-5xl mb-6">STREAM ON SPOTIFY</h2>
                <p className="text-silver mb-8">
                  Listen to NF's complete discography on Spotify. Follow for notifications on new releases.
                </p>
                <a 
                  href="https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-sm inline-flex items-center transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">Follow on Spotify</span>
                  <FaSpotify size={20} />
                </a>
              </div>
              
              <div className="h-[450px] relative animate-on-scroll opacity-0">
                <iframe 
                  src="https://open.spotify.com/embed/artist/6fOMl44jA4Sp5b9PpYCkzz?utm_source=generator" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="rounded-lg shadow-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll opacity-0">
              <h2 className="font-heading text-4xl md:text-5xl mb-4">MUSIC VIDEOS</h2>
              <p className="text-silver max-w-2xl mx-auto">
                Watch the latest music videos and behind-the-scenes content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "MOTTO", image: "/video-motto.jpg" },
                { title: "HAPPY", image: "/video-happy.jpg" },
                { title: "CLOUDS", image: "/video-clouds.jpg" },
                { title: "SEARCH", image: "/video-search.jpg" }
              ].map((video, index) => (
                <div key={index} className="group relative h-64 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 animate-on-scroll opacity-0">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-center">
                      <div className="bg-crimson rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">{video.title}</h3>
                      <p className="text-silver">Official Video</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://www.youtube.com/channel/UCoRR6OLuIZ2-79ry4W5I-xw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all duration-300 inline-flex items-center"
              >
                <span className="mr-2">YouTube Channel</span>
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Store Section */}
        <section id="store" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll opacity-0">
              <h2 className="font-heading text-4xl md:text-5xl mb-4">MERCHANDISE</h2>
              <p className="text-silver max-w-2xl mx-auto">
                Official NF merchandise. Wear your real music pride.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "NF Logo Hoodie", price: "$55", image: "/merch-hoodie.jpg" },
                { title: "HOPE Tour Tee", price: "$35", image: "/merch-shirt.jpg" },
                { title: "NF Snapback", price: "$30", image: "/merch-hat.jpg" }
              ].map((product, index) => (
                <div key={index} className="group bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 animate-on-scroll opacity-0">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                    <p className="text-crimson text-lg font-medium mb-4">{product.price}</p>
                    <button className="w-full bg-white text-black hover:bg-gray-200 py-2 font-medium transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://nfrealmusicmerch.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-sm transition-all duration-300"
              >
                Visit Full Store
              </a>
            </div>
          </div>
        </section>

        {/* Tour Section */}
        <section id="tour" className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll opacity-0">
              <h2 className="font-heading text-4xl md:text-5xl mb-4">TOUR DATES</h2>
              <p className="text-silver max-w-2xl mx-auto">
                Catch NF live on the HOPE tour. Limited tickets available.
              </p>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                { date: "Jul 10, 2025", city: "Los Angeles, CA", venue: "The Forum", status: "Limited" },
                { date: "Jul 15, 2025", city: "Denver, CO", venue: "Red Rocks Amphitheatre", status: "Sold Out" },
                { date: "Jul 18, 2025", city: "Chicago, IL", venue: "United Center", status: "Available" },
                { date: "Jul 22, 2025", city: "Atlanta, GA", venue: "State Farm Arena", status: "Available" },
                { date: "Jul 26, 2025", city: "New York, NY", venue: "Madison Square Garden", status: "Limited" }
              ].map((show, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between transform transition-all duration-300 hover:bg-gray-700 animate-on-scroll opacity-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-0">
                    <div className="text-left md:mr-12">
                      <div className="text-sm text-silver mb-1">Date</div>
                      <div className="font-bold">{show.date}</div>
                    </div>
                    <div className="text-left md:mr-12 mt-4 md:mt-0">
                      <div className="text-sm text-silver mb-1">City</div>
                      <div className="font-bold">{show.city}</div>
                    </div>
                    <div className="text-left mt-4 md:mt-0">
                      <div className="text-sm text-silver mb-1">Venue</div>
                      <div className="font-bold">{show.venue}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className={`px-3 py-1 rounded-full text-xs mr-4 ${
                      show.status === "Sold Out" ? "bg-red-800 text-red-100" : 
                      show.status === "Limited" ? "bg-yellow-600 text-yellow-100" : 
                      "bg-green-700 text-green-100"
                    }`}>
                      {show.status}
                    </span>
                    <button 
                      className={`bg-crimson hover:bg-crimson/90 text-white px-6 py-2 rounded-sm transition-colors ${
                        show.status === "Sold Out" ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={show.status === "Sold Out"}
                    >
                      {show.status === "Sold Out" ? "Sold Out" : "Get Tickets"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://nfrealmusictickets.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-sm transition-all duration-300"
              >
                View All Tour Dates
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/nf-hero.jpg"
              alt="NF Background"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center animate-on-scroll opacity-0">
              <h2 className="font-heading text-4xl md:text-5xl mb-6">JOIN THE NF FAMILY</h2>
              <p className="text-silver mb-8">
                Subscribe to get exclusive updates, pre-sale access, merch drops, and more directly to your inbox.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-crimson w-full"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-crimson w-full"
                  />
                </div>
                
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-crimson w-full"
                />
                
                <button 
                  type="submit" 
                  className="bg-crimson hover:bg-crimson/90 text-white px-8 py-3 rounded-sm transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  Subscribe Now
                </button>
              </form>
              
              <p className="text-xs text-silver mt-6">
                By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}