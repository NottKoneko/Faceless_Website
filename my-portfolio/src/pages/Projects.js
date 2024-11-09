import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    name: 'AI-Powered Personal Assistant',
    description: 'An AI assistant that helps organize your tasks.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/your-username/ai-assistant'
  },
  {
    name: 'Weather App with Tailwind CSS',
    description: 'A weather application using React and Tailwind CSS.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/your-username/weather-app'
  },
  {
    name: 'Discord Bot',
    description: 'A fun and customizable Discord bot that includes AI-based features, logging, and moderation capabilities.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/NottKoneko/UwU-Kun_Discord_Bot'
  },
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio to showcase your projects and skills.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/your-username/portfolio-website'
  },
  {
    name: 'Chatbot with NLP',
    description: 'A chatbot that uses NLP to understand user queries.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/your-username/chatbot'
  },
  {
    name: 'E-commerce Store',
    description: 'An online store built with React and Firebase.',
    image: 'https://via.placeholder.com/400x200',
    github: 'https://github.com/your-username/ecommerce-store'
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4 pt-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">{project.name}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
              <div className="mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
