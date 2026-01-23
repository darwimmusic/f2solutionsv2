import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import ChevronLeftIcon from '../../components/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../components/icons/ChevronRightIcon';

const ProjectPage: React.FC = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  
  const category = siteData.categorias.find(cat => cat.slug === categorySlug);
  const product = category?.produtos.find(prod => prod.slug === productSlug);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product || !category) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Produto não encontrado</h1>
          <Link to="/categorias" className="mt-8 inline-block text-blue-500 hover:text-blue-400">
            Voltar para Categorias
          </Link>
        </div>
      </div>
    );
  }

  // Combine main image and gallery for the carousel
  const allImages = [product.imagem, ...(product.gallery || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const otherCategories = siteData.categorias.filter(cat => cat.slug !== categorySlug);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel - Fixed Info */}
      <div className="w-full md:w-1/3 p-8 md:p-12 pt-32 md:pt-40 flex flex-col justify-between z-10 bg-black/80 backdrop-blur-md md:bg-black md:h-screen sticky top-0 md:static">
        <div>
          <Link 
            to={`/categoria/${category.slug}`} 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 text-sm tracking-widest uppercase group"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para {category.nome}
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{product.nome}</h1>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              {product.descricao}
            </p>
          </motion.div>
        </div>

        {/* Other Categories Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-800">
           <h3 className="text-sm uppercase text-gray-500 mb-4 tracking-wider">Outras Categorias</h3>
           <div className="flex flex-wrap gap-2">
             {otherCategories.slice(0, 3).map(cat => (
               <Link 
                 key={cat.slug} 
                 to={`/categoria/${cat.slug}`}
                 className="text-xs border border-gray-700 rounded-full px-3 py-1 hover:bg-gray-800 hover:border-gray-500 transition-all"
               >
                 {cat.nome}
               </Link>
             ))}
             <Link to="/categorias" className="text-xs border border-blue-900 text-blue-400 rounded-full px-3 py-1 hover:bg-blue-900/20 transition-all">
                Ver Todas
             </Link>
           </div>
        </div>
      </div>

      {/* Right Panel - Art Gallery Carousel */}
      <div className="w-full md:w-2/3 h-[60vh] md:h-screen relative overflow-hidden bg-gray-900 flex items-center justify-center">
        {/* Background Blur Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl scale-125 transition-all duration-1000"
          style={{ backgroundImage: `url(${allImages[currentImageIndex]})` }}
        />
        
        {/* 5:7 Aspect Ratio Container */}
        <div className="relative w-full max-w-md md:max-w-lg aspect-[5/7] z-10 shadow-2xl p-4">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src={allImages[currentImageIndex]} 
                alt={`${product.nome} view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          <button 
            onClick={prevImage}
            className="w-12 h-12 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all transform hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button 
            onClick={nextImage}
            className="w-12 h-12 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all transform hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-sm font-mono tracking-widest border border-white/10 z-20">
          {currentImageIndex + 1} / {allImages.length}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
