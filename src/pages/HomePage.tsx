import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero';
import ProductCategories from '../../components/ProductCategories';
import About from '../../components/About';
import PastEvents from '../../components/PastEvents';
import ContactForm from '../../components/ContactForm';
import { ParticleTextEffect } from '../../components/ParticleTextEffect';
import InfiniteScroller from '../../components/InfiniteScroller';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <section>
        <ParticleTextEffect />
      </section>
      <div id="projects">
        <ProductCategories />
      </div>
      <section className="bg-white py-10 overflow-hidden">
        <InfiniteScroller baseVelocity={-2} className="font-bold uppercase text-black">
          INOVAÇÃO • TECNOLOGIA • EXPERIÊNCIA •&nbsp;
        </InfiniteScroller>
        <InfiniteScroller baseVelocity={2} className="font-bold uppercase" style={{ WebkitTextStroke: '1px black', color: 'transparent' }}>
          INOVAÇÃO • TECNOLOGIA • EXPERIÊNCIA •&nbsp;
        </InfiniteScroller>
      </section>
      <PastEvents />
      <div id="contato">
        <ContactForm />
      </div>
    </>
  );
};

export default HomePage;
