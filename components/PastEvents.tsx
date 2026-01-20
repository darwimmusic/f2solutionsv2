import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../src/data/siteData';

const allProducts = siteData.categorias.flatMap(category => 
  category.produtos.map(produto => ({
    ...produto,
    categorySlug: category.slug,
  }))
);

interface CaseCardProps {
  product: typeof allProducts[0];
  priority: boolean;
}

const CaseCard: React.FC<CaseCardProps> = ({ product, priority }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link
      to={`/projeto/${product.categorySlug}/${product.slug}`}
      className="image-item group flex-shrink-0 w-80 h-96 rounded-xl overflow-hidden shadow-2xl block bg-gray-200 relative"
    >
      <div className="relative w-full h-full">
        <img
          src={product.imagem}
          alt={product.nome}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold">{product.nome}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{product.descricao}</p>
        </div>
      </div>
    </Link>
  );
};

const PastEvents: React.FC = () => {
  // Duplicamos para o efeito de scroll infinito
  const duplicatedProducts = [...allProducts, ...allProducts];

  return (
    <section id="cases" className="bg-white py-20 overflow-hidden">
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 80s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent,
            black 20%,
            black 80%,
            transparent
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            black 20%,
            black 80%,
            transparent
          );
        }

        .image-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
      `}</style>
      
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-5xl font-bold text-center">Cases de Sucesso</h2>
      </div>
      
      <div className="scroll-container w-full">
        <div className="infinite-scroll flex gap-8 w-max">
          {duplicatedProducts.map((product, index) => (
            <CaseCard 
              key={`${product.slug}-${index}`} 
              product={product} 
              priority={index < 6} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
