import Link from 'next/link';

const DemoSection = () => {
  return (
    <div className="bg-obsidian min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <p className="text-silver font-bebas text-xl">Hero Background Image</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/50 to-obsidian"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-10 flex justify-center">
            <div className="w-[120px] h-[120px] rounded-md bg-gray-800 flex items-center justify-center">
              <p className="text-silver font-bebas">Logo</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-silver max-w-xl mx-auto font-inter">
            Cinematic. Honest. Raw. Welcome to the reimagined experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#music" className="btn-primary">
              Listen Now
            </Link>
            <Link href="#tour" className="btn-secondary">
              Tour Dates
            </Link>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">LATEST MUSIC</h2>
            <p className="section-subtitle">
              Stream the latest tracks and albums from NF.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Album card 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4">
                <div className="w-full h-full bg-gray-800 rounded-md flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Album Cover</p>
                </div>
              </div>
              <h3 className="font-bebas text-xl mb-2 text-ghost">HOPE</h3>
              <div className="flex space-x-3 mt-2">
                <button className="btn-primary text-sm px-4 py-2">
                  Listen Now
                </button>
                <button className="btn-secondary text-sm px-4 py-2">
                  Buy Now
                </button>
              </div>
            </div>
            
            {/* Album card 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4">
                <div className="w-full h-full bg-gray-800 rounded-md flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Album Cover</p>
                </div>
              </div>
              <h3 className="font-bebas text-xl mb-2 text-ghost">CLOUDS</h3>
              <div className="flex space-x-3 mt-2">
                <button className="btn-primary text-sm px-4 py-2">
                  Listen Now
                </button>
                <button className="btn-secondary text-sm px-4 py-2">
                  Buy Now
                </button>
              </div>
            </div>
            
            {/* Album card 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4">
                <div className="w-full h-full bg-gray-800 rounded-md flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Album Cover</p>
                </div>
              </div>
              <h3 className="font-bebas text-xl mb-2 text-ghost">THE SEARCH</h3>
              <div className="flex space-x-3 mt-2">
                <button className="btn-primary text-sm px-4 py-2">
                  Listen Now
                </button>
                <button className="btn-secondary text-sm px-4 py-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Videos Section */}
      <section id="videos" className="py-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">MUSIC VIDEOS</h2>
            <p className="section-subtitle">
              Watch the latest music videos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Video 1 */}
            <div className="aspect-video relative rounded-md overflow-hidden card">
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <p className="text-silver font-bebas text-xl">Video Thumbnail</p>
              </div>
              <div className="absolute inset-0 bg-obsidian/50 flex items-center justify-center hover:bg-obsidian/30 transition-all">
                <div className="text-center">
                  <div className="bg-crimson rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bebas tracking-wide text-ghost">HAPPY</h3>
                </div>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="aspect-video relative rounded-md overflow-hidden card">
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <p className="text-silver font-bebas text-xl">Video Thumbnail</p>
              </div>
              <div className="absolute inset-0 bg-obsidian/50 flex items-center justify-center hover:bg-obsidian/30 transition-all">
                <div className="text-center">
                  <div className="bg-crimson rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bebas tracking-wide text-ghost">MOTTO</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://www.youtube.com/@NFVEVO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <span className="mr-2">YouTube Channel</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">MERCHANDISE</h2>
            <p className="section-subtitle">
              Official NF merchandise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Product 1 - Hoodie */}
            <div className="card overflow-hidden">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Product Image</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bebas text-lg tracking-wide mb-1 text-ghost">NF LOGO HOODIE</h3>
                <p className="text-crimson font-medium mb-3">$55.00</p>
                <button className="w-full bg-crimson text-ghost py-2 font-inter text-sm rounded-sm hover:bg-ghost hover:text-obsidian transition-all">
                  ADD TO CART
                </button>
              </div>
            </div>
            
            {/* Product 2 - Tee */}
            <div className="card overflow-hidden">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Product Image</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bebas text-lg tracking-wide mb-1 text-ghost">HOPE TOUR TEE</h3>
                <p className="text-crimson font-medium mb-3">$35.00</p>
                <button className="w-full bg-crimson text-ghost py-2 font-inter text-sm rounded-sm hover:bg-ghost hover:text-obsidian transition-all">
                  ADD TO CART
                </button>
              </div>
            </div>
            
            {/* Product 3 - Hat */}
            <div className="card overflow-hidden">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Product Image</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bebas text-lg tracking-wide mb-1 text-ghost">NF SNAPBACK</h3>
                <p className="text-crimson font-medium mb-3">$30.00</p>
                <button className="w-full bg-crimson text-ghost py-2 font-inter text-sm rounded-sm hover:bg-ghost hover:text-obsidian transition-all">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title">JOIN THE NF FAMILY</h2>
              <p className="text-silver font-inter">
                Subscribe to get exclusive updates and releases
              </p>
            </div>
            
            <form className="bg-charcoal p-6 rounded-md shadow-inner-highlight">
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-obsidian/50 border border-gray-700 text-ghost px-4 py-3 rounded-sm font-inter focus:border-crimson focus:outline-none transition-all"
                />
              </div>
              
              <div className="mb-4">
                <select className="w-full bg-obsidian/50 border border-gray-700 text-ghost px-4 py-3 rounded-sm font-inter appearance-none focus:border-crimson focus:outline-none transition-all">
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
                    className="w-4 h-4 bg-obsidian border border-gray-700 rounded focus:ring-crimson"
                  />
                </div>
                <label className="ml-2 text-sm font-inter text-silver">
                  I want to receive news, tour dates, and exclusive content from NF
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn-primary py-3"
              >
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoSection;
