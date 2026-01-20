import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import ChevronLeftIcon from '../../components/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../components/icons/ChevronRightIcon';

const ProjectPage: React.FC = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  
  const category = siteData.categorias.find(cat => cat.slug === categorySlug);
  const product = category?.produtos.find(prod => prod.slug === productSlug);

  if (!product || !category) {
    return (
      <div className="bg-white text-dark min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold">Produto não encontrado</h1>
          <Link to="/" className="mt-8 inline-block text-primary hover:opacity-80">
            Voltar para a Home
          </Link>
        </div>
      </div>
    );
  }

  // Filter out the current category for the suggestion list
  const otherCategories = siteData.categorias.filter(cat => cat.slug !== categorySlug);

  return (
    <div className="bg-white text-dark min-h-screen">
      <div className="container mx-auto px-6 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link 
              to={`/categoria/${category.slug}`} 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
            >
              <ChevronLeftIcon className="w-5 h-5 mr-1 transform group-hover:-translate-x-1 transition-transform" />
              Voltar para {category.nome}
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4">{product.nome}</h1>
            <p className="text-lg text-dark">{product.descricao}</p>
          </div>

          <div className="mb-12">
            <img src={product.imagem} alt={product.nome} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
          </div>

          {product.gallery && product.gallery.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center">Galeria</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {product.gallery.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <img src={image} alt={`Galeria do produto ${product.nome} - ${index + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Other Categories Section */}
        <div className="max-w-6xl mx-auto mt-24 border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Outras Categorias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCategories.map((cat) => (
              <Link 
                to={`/categoria/${cat.slug}`} 
                key={cat.slug} 
                className="group block relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <img 
                  src={cat.imagem} 
                  alt={cat.nome} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:via-black/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{cat.nome}</h3>
                  <div className="flex items-center font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    Ver projetos 
                    <ChevronRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
