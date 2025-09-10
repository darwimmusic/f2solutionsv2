import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

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

  return (
    <div className="bg-white text-dark min-h-screen">
      <div className="container mx-auto px-6 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to={`/categoria/${category.slug}`} className="text-primary font-semibold hover:underline">{category.nome}</Link>
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
      </div>
    </div>
  );
};

export default ProjectPage;
