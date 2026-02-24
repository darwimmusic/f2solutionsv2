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
    <a
      href="https://api.whatsapp.com/send/?phone=5511930746956"
      target="_blank"
      rel="noopener noreferrer"
    >
      <section
        id="f2-black-white"
        className="relative w-full h-[85vh] overflow-hidden cursor-pointer"
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

        {/* COPY - Z-Index 3 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 select-none pointer-events-none w-full flex">
          <div className="w-1/2 flex items-center justify-end px-6 md:px-16 lg:px-24">
            <p className="text-black text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[4px] md:tracking-[8px] text-right leading-tight uppercase">
              DEU UM BRANCO? A F2 TE AJUDA A TIRAR A IDEIA DO PAPEL.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-start px-6 md:px-16 lg:px-24">
            <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[4px] md:tracking-[8px] text-left leading-tight uppercase">
              JÁ TEM UMA IDEIA? VAMOS LAPIDAR JUNTOS E TRANSFORMÁ-LA EM REALIDADE.
            </p>
          </div>
        </div>
      </section>
    </a>
  );
};

export default BlackWhiteSection;
