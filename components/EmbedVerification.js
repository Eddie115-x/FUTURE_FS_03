import { useEffect, useState } from 'react';

/**
 * This component helps verify that YouTube and Spotify embeds are properly working
 * in the deployed environment.
 */
const EmbedVerification = ({ videoId, type = 'youtube', children }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Log information helpful for debugging
    console.log(`${type} embed environment check:`, {
      isDevelopment: process.env.NODE_ENV === 'development',
      isProduction: process.env.NODE_ENV === 'production',
      windowAvailable: typeof window !== 'undefined',
      documentAvailable: typeof document !== 'undefined',
      baseURL: typeof window !== 'undefined' ? window.location.origin : null,
      embedType: type,
      CSP: document.head.querySelector('meta[http-equiv="Content-Security-Policy"]')?.content
    });
  }, [type]);

  if (!isClient) {
    // Show a placeholder during SSR
    return (
      <div className={`${type === 'spotify' ? 'h-full' : 'aspect-video'} bg-charcoal rounded-lg flex items-center justify-center`}>
        <p className="text-silver">Loading {type === 'spotify' ? 'player' : 'video'}...</p>
      </div>
    );
  }

  // If children are provided, use them (for Spotify or custom embeds)
  if (children) {
    return children;
  }

  // Default to YouTube embed if no children
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full aspect-video rounded-lg shadow-lg"
    ></iframe>
  );
};

export default EmbedVerification;
