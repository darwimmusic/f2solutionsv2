import React, { useState } from 'react';
import { siteData } from '../src/data/siteData';

const aboutData = [
  {
    id: 'quem-somos',
    title: 'QUEM SOMOS',
    description: siteData.empresa.slogan,
    image: 'https://picsum.photos/seed/whoweare/800/600'
  },
  {
    id: 'dna',
    title: siteData.empresa.dna_empresa.titulo,
    description: siteData.empresa.dna_empresa.texto,
    image: 'https://picsum.photos/seed/dna/800/600'
  },
  {
    id: 'o-que-fazemos',
    title: siteData.empresa.missao.titulo,
    description: siteData.empresa.missao.texto,
    image: 'https://picsum.photos/seed/whatwedo/800/600'
  }
];

const About: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const expandedWidth = '60%';
  const collapsedWidth = '20%';
  const initialWidth = '33.33%';

  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="bg-black">
        <div className="container mx-auto px-6 text-center py-32">
          <h2 className="text-5xl font-bold">Sobre a {siteData.empresa.nome}</h2>
          <p className="text-lg text-gray-300 mt-2">{siteData.empresa.slogan}</p>
        </div>
      </div>
      <div 
        className="w-full h-[40rem] flex"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {aboutData.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const width = hoveredIndex === null ? initialWidth : (isHovered ? expandedWidth : collapsedWidth);

          return (
            <div
              key={item.id}
              className="relative h-full overflow-hidden transition-all duration-700 ease-in-out group cursor-pointer"
              style={{ width: width }}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">
                <div 
                  className={`absolute left-4 bottom-1/2 translate-y-1/2 transition-all duration-500 ease-in-out ${isHovered ? 'opacity-0 -translate-x-4' : 'opacity-100 delay-300'}`}
                  style={{ writingMode: 'vertical-rl' }}
                >
                  <h3 className="text-3xl font-bold whitespace-nowrap transform rotate-180">{item.title}</h3>
                </div>

                <div className={`transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}>
                  <h3 className="text-4xl font-bold">{item.title}</h3>
                  <p className="mt-4 max-w-md text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
