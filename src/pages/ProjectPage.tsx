import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

const slugify = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

const ProjectPage: React.FC = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  
  const category = siteData.categorias.find(cat => slugify(cat.nome) === categorySlug);
  const product = category?.produtos.find(prod => slugify(prod.nome) === productSlug);

  if (!product || !category) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold">Produto não encontrado</h1>
          <Link to="/" className="mt-8 inline-block text-blue-400 hover:text-blue-300">
            Voltar para a Home
          </Link>
        </div>
      </div>
    );
  }

  const coverImage = `https://picsum.photos/seed/${productSlug}/1200/800`;
  const galleryImages = Array.from({ length: 4 }, (_, i) => `https://picsum.photos/seed/${productSlug}-gallery-${i}/800/600`);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-6 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to={`/categoria/${categorySlug}`} className="text-blue-400 font-semibold hover:underline">{category.nome}</Link>
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4">{product.nome}</h1>
            <p className="text-lg text-gray-300">{product.descricao}</p>
          </div>

          <div className="mb-12">
            <img src={coverImage} alt={product.nome} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8 text-center">Galeria</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img src={image} alt={`Galeria do produto ${product.nome} - ${index + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
