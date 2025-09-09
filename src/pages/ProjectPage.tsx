import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriesData } from '../data/projectsData';
import { Project } from '../data/projectsData';

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  let project: Project | undefined;
  let categoryName: string | undefined;

  for (const cat of categoriesData) {
    const foundProject = cat.projects.find(p => p.id === projectId);
    if (foundProject) {
      project = foundProject;
      categoryName = cat.name;
      break;
    }
  }

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold">Projeto não encontrado</h1>
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-blue-400 font-semibold">{categoryName}</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4">{project.title}</h1>
            <p className="text-lg text-gray-300">{project.description}</p>
          </div>

          <div className="mb-12">
            <img src={project.coverImage} alt={project.title} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center">Galeria</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <img src={image} alt={`Galeria do projeto ${project.title} - ${index + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
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
