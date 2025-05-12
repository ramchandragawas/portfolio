import React, { useEffect, useState } from 'react';
import './App.css';

// Component imports
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticlesBackground from './components/ParticlesBackground';
import Loader from './components/Loader';
import TorchEffect from './components/TorchEffect';
import TorchCursor from './components/TouchCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Simulate loading animation
    setTimeout(() => setIsLoading(false), 2000);

    // Section reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            const children = entry.target.querySelectorAll('.animate-stagger');
            children.forEach((child, index) => {
              child.style.animationDelay = `${index * 0.1}s`;
              child.classList.add('show');
            });
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => observer.observe(section));

    // Initial theme setup
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDark.matches ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.body.className = initialTheme;

    // Theme change listener
    const handleThemeChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      if (!localStorage.getItem('theme')) {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        document.body.className = newTheme;
      }
    };

    prefersDark.addListener(handleThemeChange);

    return () => {
      observer.disconnect();
      prefersDark.removeListener(handleThemeChange);
    };
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ParticlesBackground />
      {theme === 'dark' && <TorchEffect />}
      {theme === 'dark' && <TorchCursor />}
      <div className="app-wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <main className="main-content">
          <About />
          <Skills />
          <Education />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;