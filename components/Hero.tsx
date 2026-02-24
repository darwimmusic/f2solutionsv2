import React from 'react';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerOffset = 100;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="h-[100dvh] relative overflow-hidden">
      {/* Desktop video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero/video-f2-solutions-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/assets/hero/video-f2-solutions.mp4" type="video/mp4" />
      </video>
      {/* Mobile video (vertical) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero/video-f2-solutions-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover block md:hidden"
      >
        <source src="/assets/hero/video-f2-solutions-mobile.mp4" type="video/mp4" />
      </video>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10" 
        onClick={handleScrollDown}
        aria-label="Scroll down to About section"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="drop-shadow-lg"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
