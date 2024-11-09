import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [showArrow, setShowArrow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setShowArrow(false);
        } else {
          setShowArrow(true);
        }
        setLastScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);
  


  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen relative">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-6xl font-extrabold mb-6 animate-bounce-in">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg mb-8 animate-fade-in text-gray-300 max-w-xl mx-auto">
            I'm Koneko, a Computer Science student with a passion for AI and Machine Learning.
          </p>
          <Link
            to="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg transform hover:-translate-y-1 transition duration-300"
          >
            Check Out My Projects
          </Link>
        </div>

        {/* Scroll Indicator */}
        {showArrow && (
          <a href="#about" className="absolute bottom-10 animate-bounce text-gray-400 hover:text-white transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-300">
            Hello! I'm Koneko, a Computer Science student at Gavilan College with a passion for machine learning and AI.
            I'm currently focusing on front-end development and plan to transfer to UT Austin to dive deeper into AI.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'JavaScript', level: '75%' },
              { name: 'React', level: '70%' },
              { name: 'Python', level: '65%' },
              { name: 'Tailwind CSS', level: '80%' },
              { name: 'Machine Learning', level: '60%' }
            ].map((skill, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-600 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
          <div className="text-center">
            <Link
              to="/projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="mb-4">Feel free to reach out if you have any questions or collaboration ideas!</p>
          <a
            href="mailto:example@example.com"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Send an Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
