import React, { useState } from 'react';
import { siteData } from '../src/data/siteData';
import FullServiceIcon from './icons/FullServiceIcon';
import TeamIcon from './icons/TeamIcon';
import LightningBoltIcon from './icons/LightningBoltIcon';
import ResultsIcon from './icons/ResultsIcon';

const aboutData = [
  {
    id: 'quem-somos',
    title: 'QUEM SOMOS',
    description: siteData.empresa.slogan,
    image: siteData.empresa.imagem_quem_somos || 'https://ik.imagekit.io/viihferreira/QUEM%20SOMOS/RODOLFO.PNG?updatedAt=1757448602146'
  },
  {
    id: 'dna',
    title: siteData.empresa.dna_empresa.titulo,
    description: siteData.empresa.dna_empresa.texto,
    image: siteData.empresa.dna_empresa.imagem || 'https://ik.imagekit.io/viihferreira/QUEM%20SOMOS/FELIPE.PNG?updatedAt=1757446977018'
  },
  {
    id: 'o-que-fazemos',
    title: siteData.empresa.missao.titulo,
    description: siteData.empresa.missao.texto,
    image: siteData.empresa.missao.imagem || 'https://ik.imagekit.io/viihferreira/QUEM%20SOMOS/bola%20led.PNG?updatedAt=1757449050559'
  }
];

const About: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const expandedWidth = '60%';
  const collapsedWidth = '20%';
  const initialWidth = '33.33%';

  return (
    <section className="bg-white text-black overflow-hidden">
      <div className="bg-white">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Full Service */}
            <div className="flex flex-col items-center">
              <div className="text-blue-600 mb-4 w-16 h-16">
                <FullServiceIcon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Full Service</h3>
              <p className="text-gray-600">Do conceito à execução, cuidamos de todas as etapas.</p>
            </div>

            {/* Equipe Qualificada */}
            <div className="flex flex-col items-center">
              <div className="text-blue-600 mb-4 w-16 h-16">
                <TeamIcon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Equipe Qualificada</h3>
              <p className="text-gray-600">Profissionais preparados para unir inovação e confiabilidade.</p>
            </div>

            {/* Tecnologia de Ponta */}
            <div className="flex flex-col items-center">
              <div className="text-blue-600 mb-4 w-16 h-16">
                <LightningBoltIcon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tecnologia de Ponta</h3>
              <p className="text-gray-600">Equipamentos e sistemas atualizados, prontos para grandes produções.</p>
            </div>

            {/* Resultados Mensuráveis */}
            <div className="flex flex-col items-center">
              <div className="text-blue-600 mb-4 w-16 h-16">
                <ResultsIcon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Resultados Mensuráveis</h3>
              <p className="text-gray-600">Experiências que engajam e entregam dados.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop View */}
      <div 
        className="w-full h-[40rem] hidden md:flex"
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
      {/* Mobile View */}
      <div className="md:hidden flex flex-col">
        {aboutData.map((item) => (
          <div key={item.id} className="relative h-80 overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-200 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
