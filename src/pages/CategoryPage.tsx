import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriesData } from '../data/projectsData';
import ChevronRightIcon from '../../components/icons/ChevronRightIcon';
import { HeroScrollVideo } from '../components/HeroScrollVideo';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const category = categoriesData.find(cat => cat.slug === categoryName);

  if (!category) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold">Categoria não encontrada</h1>
          <Link to="/" className="mt-8 inline-block text-blue-400 hover:text-blue-300">
            Voltar para a Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <HeroScrollVideo
        title={category.name}
        subtitle={category.description}
        media={category.image}
        mediaType="image"
        projects={category.projects}
      />
    </div>
  );
};

export default CategoryPage;
