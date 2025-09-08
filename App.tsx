import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import About from './components/About';
import PastEvents from './components/PastEvents';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ParticleTextEffect } from './components/ParticleTextEffect';
import InfiniteScroller from './components/InfiniteScroller';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main>
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
        <section className="bg-black py-10 overflow-hidden">
          <InfiniteScroller baseVelocity={-2} className="font-bold uppercase text-white">
            INOVAÇÃO • TECNOLOGIA • EXPERIÊNCIA •&nbsp;
          </InfiniteScroller>
          <InfiniteScroller baseVelocity={2} className="font-bold uppercase" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
            INOVAÇÃO • TECNOLOGIA • EXPERIÊNCIA •&nbsp;
          </InfiniteScroller>
        </section>
        <PastEvents />
        <div id="contato">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;