
const StyleExamples = () => {
  return (
    <div className="py-10 px-4">
      <h1 className="font-bebas text-4xl md:text-6xl text-ghost mb-8 text-center">
        NF BRAND STYLE GUIDE
      </h1>
      
      {/* Color Palette */}
      <section className="mb-20">
        <h2 className="section-title text-center">COLOR PALETTE</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-obsidian rounded-md mb-3"></div>
            <p className="font-bebas text-ghost">OBSIDIAN</p>
            <p className="text-silver text-sm">#0D0D0D</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-charcoal rounded-md mb-3"></div>
            <p className="font-bebas text-ghost">CHARCOAL</p>
            <p className="text-silver text-sm">#1E1E1E</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-silver rounded-md mb-3"></div>
            <p className="font-bebas text-ghost">SILVER</p>
            <p className="text-silver text-sm">#A8A29E</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-ghost rounded-md mb-3"></div>
            <p className="font-bebas text-obsidian">GHOST</p>
            <p className="text-obsidian text-sm">#F4F4F5</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-crimson rounded-md mb-3"></div>
            <p className="font-bebas text-ghost">CRIMSON</p>
            <p className="text-silver text-sm">#DC2626</p>
          </div>
        </div>
      </section>
      
      {/* Typography */}
      <section className="mb-20">
        <h2 className="section-title text-center">TYPOGRAPHY</h2>
        <div className="mt-10 space-y-8">
          <div className="p-6 card">
            <h3 className="font-bebas text-2xl text-ghost mb-3">BEBAS NEUE</h3>
            <p className="text-silver mb-6">Used for headings, titles, and impact text</p>
            <div className="space-y-4">
              <div>
                <p className="font-bebas text-6xl text-ghost">THE SEARCH</p>
              </div>
              <div>
                <p className="font-bebas text-4xl text-ghost">CLOUDS (THE MIXTAPE)</p>
              </div>
              <div>
                <p className="font-bebas text-2xl text-ghost">HOPE // PERCEPTION // MANSION</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 card">
            <h3 className="font-bebas text-2xl text-ghost mb-3">INTER</h3>
            <p className="text-silver mb-6">Used for body text, descriptions, and UI elements</p>
            <div className="space-y-4">
              <div>
                <p className="text-ghost text-lg font-medium">Primary text uses Ghost White</p>
              </div>
              <div>
                <p className="text-silver">Secondary text uses Steel Silver for less emphasis</p>
              </div>
              <div>
                <p className="text-crimson font-medium">Accent text uses Blood Crimson for impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Buttons */}
      <section className="mb-20">
        <h2 className="section-title text-center">BUTTONS & CONTROLS</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 card flex flex-col items-center">
            <h3 className="font-bebas text-2xl text-ghost mb-6">PRIMARY ACTION</h3>
            <div className="flex flex-col items-center space-y-6">
              <button className="btn-primary w-full max-w-xs">LISTEN NOW</button>
              <button className="btn-primary w-full max-w-xs border-glow">PRE-ORDER ALBUM</button>
              <button disabled className="btn-primary w-full max-w-xs opacity-50 cursor-not-allowed">SOLD OUT</button>
            </div>
          </div>
          
          <div className="p-6 card flex flex-col items-center">
            <h3 className="font-bebas text-2xl text-ghost mb-6">SECONDARY ACTION</h3>
            <div className="flex flex-col items-center space-y-6">
              <button className="btn-secondary w-full max-w-xs">VIEW DETAILS</button>
              <button className="btn-secondary w-full max-w-xs border-crimson">WATCH VIDEO</button>
              <button disabled className="btn-secondary w-full max-w-xs opacity-50 cursor-not-allowed">COMING SOON</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Card Examples */}
      <section className="mb-20">
        <h2 className="section-title text-center">CONTENT CARDS</h2>
        
        <div className="mt-10">
          <h3 className="font-bebas text-2xl text-ghost mb-6 text-center">MUSIC RELEASE CARDS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Album Card */}
            <div className="card">
              <div className="relative aspect-square">
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Album Cover</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bebas text-xl text-ghost mb-1">HOPE</h3>
                <p className="text-crimson font-medium mb-3 text-sm">2023</p>
                <button className="w-full bg-crimson text-ghost py-2 text-sm rounded-sm hover:bg-ghost hover:text-obsidian transition-all">
                  STREAM NOW
                </button>
              </div>
            </div>
            
            {/* Album Card */}
            <div className="card">
              <div className="relative aspect-square">
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Album Cover</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bebas text-xl text-ghost mb-1">CLOUDS</h3>
                <p className="text-crimson font-medium mb-3 text-sm">2021</p>
                <button className="w-full bg-crimson text-ghost py-2 text-sm rounded-sm hover:bg-ghost hover:text-obsidian transition-all">
                  STREAM NOW
                </button>
              </div>
            </div>
            
            {/* Album Card */}
            <div className="card">
              <div className="relative aspect-square">
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Album Cover</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bebas text-xl text-ghost mb-1">THE SEARCH</h3>
                <p className="text-crimson font-medium mb-3 text-sm">2019</p>
                <button className="w-full bg-crimson text-ghost py-2 text-sm rounded-sm hover:bg-ghost hover:text-obsidian transition-all">
                  STREAM NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="font-bebas text-2xl text-ghost mb-6 text-center">MERCHANDISE CARDS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Merch Card */}
            <div className="card">
              <div className="relative aspect-square">
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Product Image</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bebas text-lg text-ghost mb-1">NF LOGO HOODIE</h3>
                <p className="text-crimson font-medium mb-3">$55.00</p>
                <button className="w-full bg-crimson text-ghost py-2 text-sm rounded-sm hover:bg-ghost hover:text-obsidian transition-all">
                  ADD TO CART
                </button>
              </div>
            </div>
            
            {/* Merch Card */}
            <div className="card">
              <div className="relative aspect-square">
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Product Image</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bebas text-lg text-ghost mb-1">TOUR TEE</h3>
                <p className="text-crimson font-medium mb-3">$35.00</p>
                <button className="w-full bg-crimson text-ghost py-2 text-sm rounded-sm hover:bg-ghost hover:text-obsidian transition-all">
                  ADD TO CART
                </button>
              </div>
            </div>
            
            {/* Merch Card */}
            <div className="card">
              <div className="relative aspect-square">
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <p className="text-silver font-bebas text-xl">Product Image</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bebas text-lg text-ghost mb-1">SNAPBACK</h3>
                <p className="text-crimson font-medium mb-3">$30.00</p>
                <button className="w-full bg-crimson text-ghost py-2 text-sm rounded-sm hover:bg-ghost hover:text-obsidian transition-all">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Examples */}
      <section className="mb-20">
        <h2 className="section-title text-center">SECTION LAYOUTS</h2>
        
        {/* Hero Example */}
        <div className="mt-10 mb-16">
          <h3 className="font-bebas text-2xl text-ghost mb-6 text-center">HERO SECTION</h3>
          <div className="relative min-h-[400px] rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <p className="text-silver font-bebas text-xl">Hero Background Image</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/50 to-obsidian"></div>
            <div className="relative z-10 p-10 flex flex-col items-center justify-center h-full text-center">
              <h1 className="font-bebas text-5xl md:text-7xl text-ghost mb-4 tracking-wide text-shadow">
                NF // REAL MUSIC
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-silver max-w-xl mx-auto font-inter">
                Cinematic. Honest. Raw. Welcome to the reimagined experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">LISTEN NOW</button>
                <button className="btn-secondary">TOUR DATES</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section Example */}
        <div className="mt-10">
          <h3 className="font-bebas text-2xl text-ghost mb-6 text-center">CONTENT SECTIONS</h3>
          <div className="card p-6">
            <h2 className="section-title text-center">LATEST MUSIC</h2>
            <p className="section-subtitle text-center">
              Stream the latest tracks and albums from NF.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-obsidian p-4 rounded-md text-center">
                <div className="h-32 bg-gray-800 rounded-md mb-4 flex items-center justify-center">
                  <p className="text-silver font-bebas">Album Artwork</p>
                </div>
                <h3 className="font-bebas text-xl text-ghost mb-3">ALBUM TITLE</h3>
                <p className="text-silver mb-4 text-sm">Description goes here</p>
              </div>
              <div className="bg-obsidian p-4 rounded-md text-center">
                <div className="h-32 bg-gray-800 rounded-md mb-4 flex items-center justify-center">
                  <p className="text-silver font-bebas">Album Artwork</p>
                </div>
                <h3 className="font-bebas text-xl text-ghost mb-3">ALBUM TITLE</h3>
                <p className="text-silver mb-4 text-sm">Description goes here</p>
              </div>
              <div className="bg-obsidian p-4 rounded-md text-center">
                <div className="h-32 bg-gray-800 rounded-md mb-4 flex items-center justify-center">
                  <p className="text-silver font-bebas">Album Artwork</p>
                </div>
                <h3 className="font-bebas text-xl text-ghost mb-3">ALBUM TITLE</h3>
                <p className="text-silver mb-4 text-sm">Description goes here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Animation Examples */}
      <section className="mb-10">
        <h2 className="section-title text-center">ANIMATIONS</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="font-bebas text-2xl text-ghost mb-6 text-center">HOVER EFFECTS</h3>
            <div className="space-y-6">
              <div className="p-4 bg-obsidian rounded-md transform transition-transform hover:scale-105 cursor-pointer">
                <p className="text-ghost text-center">Scale on Hover</p>
              </div>
              <div className="p-4 bg-obsidian rounded-md transition-all hover:bg-crimson cursor-pointer">
                <p className="text-ghost text-center">Background Change on Hover</p>
              </div>
              <div className="p-4 bg-obsidian rounded-md border border-transparent hover:border-crimson transition-all cursor-pointer">
                <p className="text-ghost text-center">Border Highlight on Hover</p>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-bebas text-2xl text-ghost mb-6 text-center">PAGE ANIMATIONS</h3>
            <div className="space-y-6">
              <div className="p-4 bg-obsidian rounded-md animate-fade-in">
                <p className="text-ghost text-center">Fade In Animation</p>
              </div>
              <div className="p-4 bg-obsidian rounded-md animate-pulse-slow">
                <p className="text-ghost text-center">Slow Pulse Animation</p>
              </div>
              <div className="p-4 bg-obsidian rounded-md animate-float">
                <p className="text-ghost text-center">Floating Animation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleExamples;
