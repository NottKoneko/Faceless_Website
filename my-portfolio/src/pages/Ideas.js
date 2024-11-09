import React from 'react';

const Ideas = () => {
  const ideas = [
    { title: 'AI-Powered Personal Assistant', description: 'An AI assistant that helps organize your tasks.' },
    { title: 'Weather App with Tailwind CSS', description: 'A weather application using React and Tailwind CSS.' },
    { title: 'Recipe Finder', description: 'A web app to find recipes based on ingredients you have.' },
    { title: 'Portfolio Website', description: 'A personal portfolio to showcase your projects and skills.' },
  ];

  return (
    <div className="container mx-auto py-12 px-4 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">Project Ideas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ideas.map((idea, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2">{idea.title}</h2>
            <p className="text-gray-400">{idea.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
