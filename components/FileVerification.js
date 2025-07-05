import { useEffect, useState } from 'react';

const FileVerification = ({ filePath }) => {
  const [status, setStatus] = useState('Checking...');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkFile = async () => {
      try {
        const response = await fetch(filePath, { method: 'HEAD' });
        if (response.ok) {
          setStatus(`File exists (${response.status}), type: ${response.headers.get('content-type')}`);
        } else {
          setStatus(`File not accessible: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        setStatus(`Error checking file: ${error.message}`);
      }
    };

    checkFile();
  }, [filePath]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded shadow-lg z-50 text-sm">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold">File Check: {filePath}</h4>
        <button onClick={() => setIsVisible(false)} className="text-white hover:text-crimson">
          &times;
        </button>
      </div>
      <p>{status}</p>
    </div>
  );
};

export default FileVerification;
