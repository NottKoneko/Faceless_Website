import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-8 pt-20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
        
        {/* Bio Section */}
        <section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <p>
            Hello! I'm Koneko, a Computer Science student at Gavilan College with a passion for machine learning and AI.
            I am currently enhancing my front-end development skills and aiming to transfer to UT Austin for deeper studies in AI.
          </p>
          <p className="mt-4">
            Outside of coding, I enjoy gaming, anime, and exploring the latest trends in technology. I believe in continuous learning and strive to expand my knowledge in AI and machine learning to create impactful projects.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="space-y-4">
            {[
              { name: 'JavaScript', level: 75 },
              { name: 'React', level: 70 },
              { name: 'Tailwind CSS', level: 80 },
              { name: 'Python', level: 65 },
              { name: 'Machine Learning', level: 60 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Useful Links Section */}
        <section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Useful Links</h2>
          <div className="flex space-x-6">
            <a
              href="https://github.com/NottKoneko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="mailto:michael@example.com"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </section>

        {/* Hobbies & Interests Section */}
        <section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Hobbies & Interests</h2>
          <ul className="list-disc list-inside">
            <li>Playing Valorant and Minecraft</li>
            <li>Watching anime and streaming on Twitch</li>
            <li>Exploring AI/ML advancements</li>
            <li>Learning about the latest tech gadgets</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p>If you'd like to collaborate on a project or just have a chat, feel free to reach out!</p>
          <a
            href="mailto:michael@example.com"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300"
          >
            Send an Email
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;


