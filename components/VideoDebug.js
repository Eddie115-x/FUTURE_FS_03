import { useEffect, useState } from 'react';

const VideoDebug = ({ videoId }) => {
  const [status, setStatus] = useState('Loading...');
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const videoElement = document.getElementById(videoId);
    
    if (!videoElement) {
      setStatus('Error: Video element not found');
      return;
    }
    
    const updateStatus = () => {
      if (videoElement.error) {
        setStatus('Error');
        setErrorMessage(
          `Code: ${videoElement.error.code}, Message: ${videoElement.error.message || 'Unknown error'}`
        );
      } else if (videoElement.readyState >= 3) {
        setStatus('Ready (data available for current playback position)');
      } else if (videoElement.readyState >= 2) {
        setStatus('Can play (enough data available to start playing)');
      } else if (videoElement.readyState >= 1) {
        setStatus('Loading metadata');
      } else {
        setStatus('No data loaded');
      }
    };
    
    // Check status on load events
    videoElement.addEventListener('loadedmetadata', updateStatus);
    videoElement.addEventListener('canplay', updateStatus);
    videoElement.addEventListener('canplaythrough', updateStatus);
    videoElement.addEventListener('error', updateStatus);
    videoElement.addEventListener('stalled', updateStatus);
    videoElement.addEventListener('waiting', updateStatus);
    videoElement.addEventListener('playing', updateStatus);
    
    // Initial status check
    updateStatus();
    
    // Check status periodically
    const interval = setInterval(updateStatus, 1000);
    
    return () => {
      videoElement.removeEventListener('loadedmetadata', updateStatus);
      videoElement.removeEventListener('canplay', updateStatus);
      videoElement.removeEventListener('canplaythrough', updateStatus);
      videoElement.removeEventListener('error', updateStatus);
      videoElement.removeEventListener('stalled', updateStatus);
      videoElement.removeEventListener('waiting', updateStatus);
      videoElement.removeEventListener('playing', updateStatus);
      clearInterval(interval);
    };
  }, [videoId]);
  
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded shadow-lg z-50 text-sm">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold">Video Debug</h4>
        <button onClick={() => setIsVisible(false)} className="text-white hover:text-crimson">
          &times;
        </button>
      </div>
      <p>Status: {status}</p>
      {errorMessage && <p className="text-red-500">Error: {errorMessage}</p>}
      <button 
        onClick={() => {
          const video = document.getElementById(videoId);
          if (video) {
            video.load();
            video.play();
          }
        }}
        className="bg-crimson text-white px-2 py-1 mt-2 rounded text-xs"
      >
        Reload Video
      </button>
    </div>
  );
};

export default VideoDebug;
