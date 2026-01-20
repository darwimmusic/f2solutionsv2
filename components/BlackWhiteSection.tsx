import React from 'react';
import { LavaLamp } from './ui/fluid-blob';

const BlackWhiteSection: React.FC = () => {
  return (
    <section id="f2-black-white" className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Split Background - Absolute to cover full area */}
      <div className="absolute inset-0 flex flex-col md:flex-row z-0">
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white"></div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black"></div>
      </div>

      {/* Content - Lower Z-Index than Blob */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row flex-grow">
        {/* Left Side (White) - Text Black */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-12 md:p-24 min-h-[50vh] md:min-h-screen">
          <div className="text-black">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              WHITE
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed uppercase tracking-widest">
              Design Puro &<br/>Experiência Clara
            </p>
          </div>
        </div>

        {/* Right Side (Black) - Text White */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-12 md:p-24 min-h-[50vh] md:min-h-screen">
           <div className="text-white">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              BLACK
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed uppercase tracking-widest">
              Tecnologia &<br/>Profundidade
            </p>
          </div>
        </div>
      </div>

      {/* LavaLamp Overlay - Higher Z-Index + Exclusion */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-100 mix-blend-exclusion">
        <LavaLamp />
      </div>
    </section>
  );
};

export default BlackWhiteSection;
