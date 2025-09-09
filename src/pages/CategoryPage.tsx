import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriesData } from '../data/projectsData';
import ChevronRightIcon from '../../components/icons/ChevronRightIcon';

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
      <div className="container mx-auto px-6 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {category.projects.map((project) => (
            <Link to={`/projeto/${project.id}`} key={project.id} className="group block bg-gray-900/50 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-64">
                <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex items-center font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                  Ver projeto
                  <ChevronRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
