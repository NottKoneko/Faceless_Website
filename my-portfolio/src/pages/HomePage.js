import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  // Scroll arrow visibility
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

  const createStars = (canvas, numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        brightness: Math.random() * 0.5 + 0.5,
      });
    }
    starsRef.current = stars;
  };

  const drawStars = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    starsRef.current.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
      ctx.fill();
    });
  };

  // Memoize the animateStars function
  const animateStars = useCallback((canvas, ctx) => {
    starsRef.current.forEach(star => {
      star.y += 0.5;
      if (star.y > canvas.height) star.y = 0;
    });
    drawStars(ctx, canvas);
    requestAnimationFrame(() => animateStars(canvas, ctx));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.querySelector('.hero-section').offsetHeight;
      createStars(canvas, 150);
      drawStars(ctx, canvas);
    };

    setCanvasSize();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
      }, 200);
    };

    const handleMouseMove = (e) => {
      const { offsetX, offsetY } = e;
      const maxRadius = 100;

      starsRef.current.forEach(star => {
        const dx = star.x - offsetX;
        const dy = star.y - offsetY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxRadius) {
          star.brightness = 1 - (distance / maxRadius) * 0.8;
        } else {
          star.brightness = Math.random() * 0.5 + 0.3;
        }
      });

      drawStars(ctx, canvas);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start the animation
    animateStars(canvas, ctx);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [animateStars]);

  return (
    <div className="home-page">
    {/* Canvas for starry background */}
    <canvas ref={canvasRef} className="star-canvas"></canvas>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="content text-center animate-fade-in-up">
          <h1 className="text-6xl font-extrabold mb-6 animate-bounce-in">NotKoneko's Portfolio</h1>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Info</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-300">
          Hello! I'm Koneko, a Computer Science major focusing on Machine Learning. 
          This is my faceless website—a space to showcase my skills, projects, 
          and interests while keeping my identity more anonymous than a conventional Portfolio. The goal of this 
          platform is to serve as an information hub, reflecting my passion for technology 
          and learning without revealing my true identity.
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
            href="mailto:NottKoneko@protonmail.com"
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
