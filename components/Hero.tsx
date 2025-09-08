
import React, { useState, useEffect, useCallback } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const slides = [
  {
    image: 'https://picsum.photos/seed/event1/1920/1080',
    title: 'Não somos comuns, somos surpreendentes, somos F2!',
    subtitle: 'As melhores e mais inovadoras tecnologias para eventos. Entregue uma experiência única para os seus convidados!',
  },
  {
    image: 'https://picsum.photos/seed/event2/1920/1080',
    title: 'Tecnologia que Transforma Experiências',
    subtitle: 'Elevamos seu evento a um novo patamar com soluções interativas e imersivas de ponta.',
  },
  {
    image: 'https://picsum.photos/seed/event3/1920/1080',
    title: 'Inovação em Cada Detalhe',
    subtitle: 'Desde o planejamento até a execução, a F2 Solutions garante um evento memorável e tecnológico.',
  },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="h-screen relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      ))}
      
      <div className="relative z-10 flex flex-col items-start justify-center h-full container mx-auto px-6 text-left">
        <h2 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight">
          {slides[currentIndex].title}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          {slides[currentIndex].subtitle}
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="group relative">
            <div
              className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#070e41] to-[#263381] border-2 border-[rgb(76_100_255)] px-6 font-medium text-white transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"
            >
              Agendar um bate-papo
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </div>
            <div className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#394481,10px_10px_#5766be,15px_15px_#8898f3]"></div>
          </button>
          <button className="text-white font-semibold px-4 py-3 hover:text-blue-300 transition-colors">
            Saiba mais.
          </button>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75">
        <ChevronLeftIcon className="w-8 h-8" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75">
        <ChevronRightIcon className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;