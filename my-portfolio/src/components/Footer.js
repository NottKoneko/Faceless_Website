import React from 'react';
import { FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/NottKoneko"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Copyright and Links */}
        <p className="text-sm">
          &copy; 2024 My Portfolio. All rights reserved.
        </p>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
        >
          <FaArrowUp className="inline-block mr-2" />
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
