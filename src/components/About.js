import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const imgContainerRef = useRef(null);
  const statsRef = useRef(null);

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    //{ number: "15+", label: "Happy Clients" }
  ];

  const techStack = [
    "ReactJs", "Node.js", "MongoDB", "JavaScript", "SQL"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            entry.target.classList.remove('slide-out');
          } else {
            entry.target.classList.remove('slide-in');
            entry.target.classList.add('slide-out');
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-50px'
      }
    );

    if (imgContainerRef.current) {
      observer.observe(imgContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="about-content">
        <div className="about-text-container">
          <div className="about-text animate-stagger">
            <h2>About Me</h2>
            <p className="about-description">
              A passionate Full Stack Developer specializing 
              in building exceptional digital experiences. With a strong foundation in 
              machine learning, frontend and backend development, I transform ideas into robust, 
              scalable solutions.
            </p>
            <div className="tech-stack-container">
              <h3>Tech Stack</h3>
              <div className="tech-badges">
                {techStack.map((tech, index) => (
                  <span key={index} className="tech-badge animate-stagger">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="stats-container" ref={statsRef}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-item animate-stagger">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="about-cta">
              <a href="#contact" className="contact-btn">Let's Connect</a>
              <a href="#projects" className="projects-btn">View Work</a>
            </div>
          </div>
        </div>
        <div className="about-img-container" ref={imgContainerRef}>
          <div className="img-background"></div>
          <img 
            src="/images/ram.png" 
            alt="Profile" 
            className="about-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/400';
            }}
          />
          {/* 
          <div className="experience-badge">
            <span className="years">3+</span>
            <span className="text">Years of<br/>Experience</span>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default About;
