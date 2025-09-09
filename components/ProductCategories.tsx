
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesData as categories } from '../src/data/projectsData';
import ChevronRightIcon from './icons/ChevronRightIcon';

const ProductCategories: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const expandedWidth = '52%';
  const collapsedWidth = '12%';

  return (
    <section className="bg-black text-white overflow-hidden">
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
                    <Link to={`/categoria/${category.slug}`} className="group relative mt-6 block w-fit">
                      <div
                        className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#070e41] to-[#263381] border-2 border-[rgb(76_100_255)] px-6 font-medium text-white transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"
                      >
                        Ver Categoria <ChevronRightIcon className="w-5 h-5 ml-2" />
                      </div>
                      <div className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#394481,10px_10px_#5766be,15px_15px_#8898f3]"></div>
                    </Link>
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
