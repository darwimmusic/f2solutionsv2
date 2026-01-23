import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './src/components/ScrollToTop';
import HomePage from './src/pages/HomePage';
import AllCategoriesPage from './src/pages/AllCategoriesPage';
import CategoryPage from './src/pages/CategoryPage';
import ProjectPage from './src/pages/ProjectPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white text-black font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categorias" element={<AllCategoriesPage />} />
            <Route path="/categoria/:categoryName" element={<CategoryPage />} />
            <Route path="/projeto/:categorySlug/:productSlug" element={<ProjectPage />} />
          </Routes>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
