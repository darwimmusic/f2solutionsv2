import React, { useEffect, useRef } from 'react';
import { initFluid } from '../src/utils/fluidEternal';

const BlackWhiteSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const takeoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const { cleanup } = initFluid(canvasRef.current, takeoverRef.current);
      return cleanup;
    }
  }, []);

  return (
    <section 
      id="f2-black-white" 
      className="relative w-full h-[85vh] overflow-hidden"
      style={{ background: 'linear-gradient(90deg, #fff 0 50%, #000 50% 100%)' }}
    >
      {/* TAKEOVER BG (CROSSFADE) - Z-Index 1 (between base and canvas) */}
      <div 
        ref={takeoverRef} 
        id="takeover-bg" 
        className="absolute inset-0 z-10 pointer-events-none opacity-0 bg-black transition-all duration-900 ease-in-out" 
      />

      {/* WEBGL CANVAS - Z-Index 2 */}
      <canvas 
        ref={canvasRef} 
        id="fluid-canvas" 
        className="absolute inset-0 w-full h-full z-20 block touch-none" 
      />

      {/* TITLE - Z-Index 3 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center select-none pointer-events-none whitespace-nowrap">
        <span className="text-black text-5xl md:text-7xl lg:text-[72px] font-bold tracking-[8px]">WHITE</span>
        <span className="text-gray-500 text-5xl md:text-7xl lg:text-[72px] font-bold tracking-[8px] mx-2 md:mx-5"> / </span>
        <span className="text-white text-5xl md:text-7xl lg:text-[72px] font-bold tracking-[8px]">BLACK</span>
      </div>
    </section>
  );
};

export default BlackWhiteSection;
