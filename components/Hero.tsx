import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://ik.imagekit.io/viihferreira/HERO/Video%20F2%20Solutions_Horizontal.mp4?updatedAt=1757538391203" type="video/mp4" />
      </video>

    </section>
  );
};

export default Hero;
