
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../src/data/siteData';
import Button from './Button';
import ChevronRightIcon from './icons/ChevronRightIcon';

const slugify = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

const categories = siteData.categorias.map(category => ({
  name: category.nome,
  description: category.produtos[0]?.descricao || 'Confira nossos produtos incríveis.',
  slug: slugify(category.nome),
  image: category.imagem,
}));

const ProductCategories: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const expandedWidth = '52%';
  const collapsedWidth = '12%';

  return (
    <section className="text-white overflow-hidden">
        <div 
          className="w-full h-[48rem] flex"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {categories.map((category, index) => {
            const isHovered = hoveredIndex === index;
            const width = hoveredIndex === null ? '20%' : (isHovered ? expandedWidth : collapsedWidth);

            return (
              <div
                key={category.name}
                className="relative h-full overflow-hidden transition-all duration-700 ease-in-out group cursor-pointer"
                style={{ width: width }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">
                  <div 
                      className={`absolute left-4 bottom-1/2 translate-y-1/2 transition-all duration-500 ease-in-out ${isHovered ? 'opacity-0 -translate-x-4' : 'opacity-100 delay-300'}`}
                      style={{ writingMode: 'vertical-rl' }}
                  >
                      <h3 className="text-4xl font-bold whitespace-nowrap transform rotate-180">{category.name}</h3>
                  </div>

                  <div className={`transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-5xl font-bold">{category.name}</h3>
                    <p className="mt-4 max-w-md text-gray-200">{category.description}</p>
                    <Button as={Link} to={`/categoria/${category.slug}`} className="mt-6 text-white">
                      Ver Categoria
                      <ChevronRightIcon className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default ProductCategories;
