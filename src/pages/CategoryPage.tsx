import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriesData } from '../data/projectsData';

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
      <div className="container mx-auto px-6 py-24">
        {/* Category Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{category.description}</p>
        </div>

        {/* Projects Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.projects.map((project) => (
            <Link to={`/projeto/${project.id}`} key={project.id} className="group block bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img src={project.coverImage} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
