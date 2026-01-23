import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { siteData } from '../data/siteData';
import ChevronLeftIcon from '../../components/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../components/icons/ChevronRightIcon';

const AllCategoriesPage: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = Date.now();
    const speed = 50; // pixels per second

    const animate = () => {
      if (!isHovered && width > 0) {
        const currentTime = Date.now();
        const delta = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        let newX = x.get() - speed * delta;
        
        // Reset position for infinite loop effect
        // Assuming we duplicated the items enough times
        if (newX <= -width / 2) {
           newX = 0;
        }

        x.set(newX);
      } else {
        lastTime = Date.now();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [width, isHovered, x]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    const scrollAmount = 400;
    let newX = x.get() + (direction === 'left' ? scrollAmount : -scrollAmount);
    
    // Bounds check
    if (newX > 0) newX = -width / 2;
    if (newX < -width) newX = 0;

    x.set(newX);
  };

  // Duplicate items for infinite scroll illusion
  const duplicatedCategories = [...siteData.categorias, ...siteData.categorias, ...siteData.categorias, ...siteData.categorias];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden flex flex-col">
      <div className="container mx-auto px-6 pt-32 pb-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Nossas Categorias</h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Explore nossas soluções inovadoras e tecnologias para eventos.
        </p>
      </div>

      {/* Infinite Carousel */}
      <div className="flex-1 flex flex-col justify-center relative py-12">
        {/* Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none">
           <button 
             onClick={() => handleManualScroll('left')}
             className="bg-black/50 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-sm pointer-events-auto transition-all transform hover:scale-110 border border-white/20"
           >
             <ChevronLeftIcon className="w-8 h-8" />
           </button>
           <button 
             onClick={() => handleManualScroll('right')}
             className="bg-black/50 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-sm pointer-events-auto transition-all transform hover:scale-110 border border-white/20"
           >
             <ChevronRightIcon className="w-8 h-8" />
           </button>
        </div>

        <div 
          ref={carouselRef} 
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="flex gap-8 px-8"
            style={{ x }}
          >
            {duplicatedCategories.map((category, index) => (
              <motion.div 
                key={`${category.slug}-${index}`} 
                className="flex-shrink-0 w-[400px]"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to={`/categoria/${category.slug}`} 
                  className="block h-full group"
                >
                  <div className="relative h-[500px] rounded-[2rem] overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
                    {/* Background Image */}
                    <div className="absolute inset-0 p-2">
                       <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                         <div 
                           className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                           style={{ backgroundImage: `url(${category.imagem})` }}
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                       </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h2 className="text-3xl font-bold mb-3 text-white shadow-black drop-shadow-lg">{category.nome}</h2>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                         <p className="text-gray-300 text-sm mb-4 line-clamp-2">{category.descricao}</p>
                         <span className="text-blue-400 font-semibold flex items-center">
                          Explorar <ChevronRightIcon className="w-5 h-5 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesPage;
