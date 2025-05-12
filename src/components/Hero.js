import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const slogans = [
    "Design. Develop. Deliver.",
    "Crafting digital experiences.",
    "Transforming ideas into code."
  ];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slogans.length]);

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">{slogans[textIndex]}</h1>
        <p className="hero-subheading">
          I specialize in designing and developing modern, responsive web experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="cta-button">My Projects</a>
          <a href="#contact" className="cta-button outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;