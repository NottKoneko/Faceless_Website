import React from 'react';

const skills = [
  { name: 'JavaScript', level: '75%' },
  { name: 'React', level: '70%' },
  { name: 'Tailwind CSS', level: '80%' },
  { name: 'Python', level: '65%' },
  { name: 'Machine Learning', level: '60%' }
];

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 text-gray-100 pt-20"> {/* Added pt-20 for padding */}
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
        <p className="mb-4">
          Hello! I'm Koneko, a Computer Science student at Gavilan College with a passion for machine learning and AI.
        </p>
        <p className="mb-4">
          I am currently enhancing my front-end skills and aiming to transfer to UT Austin for deeper studies in AI.
        </p>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

