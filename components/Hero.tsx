import React, { useRef, useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5); // Start with a reasonable volume

  // Effect to handle browser autoplay policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      // If unmuting and volume is 0, set a default volume
      if (!newMutedState && videoRef.current.volume === 0) {
        const defaultVolume = 0.5;
        videoRef.current.volume = defaultVolume;
        setVolume(defaultVolume);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newVolume = parseFloat(e.target.value);
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      
      const newMutedState = newVolume === 0;
      if (videoRef.current.muted !== newMutedState) {
        videoRef.current.muted = newMutedState;
        setIsMuted(newMutedState);
      }
    }
  };

  return (
    <section className="h-screen relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://ik.imagekit.io/viihferreira/HERO/Video%20F2%20Solutions_Horizontal.mp4?updatedAt=1757538391203" type="video/mp4" />
      </video>
      <div className="absolute bottom-5 right-5 flex items-center space-x-2 bg-black bg-opacity-50 p-2 rounded-lg">
        <button onClick={toggleMute} className="text-white p-2 focus:outline-none">
          {isMuted ? (
            // Muted Icon (simple version)
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
          ) : (
            // Unmuted Icon (simple version)
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-24 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-white"
        />
      </div>
    </section>
  );
};

export default Hero;
