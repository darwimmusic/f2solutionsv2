import React, { useRef, useEffect } from 'react';

interface ReelItem {
  nome: string;
  video: string;
  instagram: string;
}

const reels: ReelItem[] = [
  {
    nome: 'Esfera de LED',
    video: '/assets/videos/reels/esfera.mp4',
    instagram: 'https://www.instagram.com/reel/DPm0ACACRt5/?igsh=MWhxdDBnNHF6bDBxdA==',
  },
  {
    nome: 'Painel Touch',
    video: '/assets/videos/reels/painel-touch.mp4',
    instagram: 'https://www.instagram.com/reel/DMi4rEKsDad/?igsh=eWJvejVxNmN5YjA5',
  },
  {
    nome: 'Totem Interativo',
    video: '/assets/videos/reels/totem-interativo.mp4',
    instagram: 'https://www.instagram.com/reel/DLDnuW1vb_g/?igsh=MW4xZmlxY3B1M2IxNA==',
  },
  {
    nome: 'Fita LED',
    video: '/assets/videos/reels/fita-led.mp4',
    instagram: 'https://www.instagram.com/reel/DJupB0xtRLT/?igsh=MXFxYnc5aGk5Mzg5Yw==',
  },
  {
    nome: 'Disparador Time Code',
    video: '/assets/videos/reels/disparador.mp4',
    instagram: 'https://www.instagram.com/reel/DQ7pvIIicv8/?igsh=MWYwOHkyeTk2dDc3eg==',
  },
  {
    nome: 'Mesa Interativa',
    video: '/assets/videos/reels/mesa-interativa.mp4',
    instagram: 'https://www.instagram.com/reel/DTdxYYGCaHK/?igsh=ZzJrbGpiMW9hY2wx',
  },
  {
    nome: 'Realidade Aumentada',
    video: '/assets/videos/reels/realidade-aumentada.mp4',
    instagram: 'https://www.instagram.com/reel/DKQIJkePIZp/?igsh=MXdsaHF0YmQyZGlhZw==',
  },
  {
    nome: 'Jogo da Memória',
    video: '/assets/videos/reels/jogo-da-memoria.mp4',
    instagram: 'https://www.instagram.com/reel/DIw172QPjMS/?igsh=MTUzbHRldGF5YmlpOQ==',
  },
  {
    nome: 'Plinko Digital',
    video: '/assets/videos/reels/plinko-digital.mp4',
    instagram: 'https://www.instagram.com/reel/DMJIpNGP01H/?igsh=MTBnN3dtcHB6NzRvbQ==',
  },
  {
    nome: 'Genius',
    video: '/assets/videos/reels/genius.mp4',
    instagram: 'https://www.instagram.com/reel/DLlGMROJA5L/?igsh=Mno0emx4ZWFhMDRp',
  },
  {
    nome: 'Espelho',
    video: '/assets/videos/reels/espelho.mp4',
    instagram: 'https://www.instagram.com/reel/DLlGMROJA5L/?igsh=Mno0emx4ZWFhMDRp',
  },
];

const duplicatedReels = [...reels, ...reels];

const ReelCard: React.FC<{ reel: ReelItem }> = ({ reel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="reel-item flex-shrink-0">
      <a
        href={reel.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-[220px] sm:w-[240px] md:w-[260px] aspect-[9/16] rounded-2xl overflow-hidden relative group shadow-xl"
      >
        <video
          ref={videoRef}
          src={reel.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-3 right-3 opacity-70 group-hover:opacity-100 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-sm font-semibold drop-shadow-lg">{reel.nome}</p>
        </div>
      </a>
    </div>
  );
};

const VideoReels: React.FC = () => {
  return (
    <div className="mt-12 overflow-hidden">
      <style>{`
        @keyframes scroll-reels-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .infinite-scroll-reels {
          animation: scroll-reels-left 80s linear infinite;
        }

        .reels-container {
          mask: linear-gradient(
            90deg,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .reel-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .reel-item:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <div className="reels-container w-full">
        <div className="infinite-scroll-reels flex gap-6 w-max">
          {duplicatedReels.map((reel, index) => (
            <ReelCard key={`${reel.nome}-${index}`} reel={reel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoReels;
