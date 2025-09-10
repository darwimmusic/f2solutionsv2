import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../data/projectsData';
import ChevronRightIcon from '../../components/icons/ChevronRightIcon';

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  return (
    <div className="w-full overflow-hidden cursor-grab">
      <motion.div
        className="flex gap-8 px-4"
        drag="x"
        dragConstraints={{ left: -((projects.length - 1.5) * 320), right: 0 }}
        dragElastic={0.2}
      >
        {projects.map((project) => (
          <motion.div key={project.id} className="flex-shrink-0 w-80">
            <Link to={`/projeto/${project.id}`} className="group block bg-gray-100 rounded-lg overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-48">
                <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-left">{project.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-2 text-left">{project.description}</p>
                </div>
                <div className="flex items-center font-semibold text-blue-600 group-hover:text-blue-500 transition-colors mt-4">
                  Ver projeto
                  <ChevronRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsCarousel;
