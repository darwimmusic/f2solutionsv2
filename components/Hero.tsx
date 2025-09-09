
import React from 'react';
import Button from './Button';
import ChevronRightIcon from './icons/ChevronRightIcon';
import { siteData } from '../src/data/siteData';

const Hero: React.FC = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <img src="https://ik.imagekit.io/viihferreira/Logo_%C3%8Dcone_White.png?updatedAt=1757445076670" alt="Logo" className="absolute top-4 left-8 w-24 h-21 z-20" />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(https://ik.imagekit.io/viihferreira/HERO/Lucid_Origin_Um_chip_de_computador_central_com_vrios_terminais_1.jpg?updatedAt=1757452108864)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-start justify-center h-full container mx-auto px-6 text-left">
        <h2 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight">
          {siteData.empresa.nome}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          {siteData.empresa.slogan}
        </p>
        <div className="mt-8 flex space-x-4">
          <Button>
            Agendar um bate-papo
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </Button>
          <Button>
            Saiba mais.
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
