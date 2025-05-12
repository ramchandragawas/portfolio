import React, { useEffect, useRef } from 'react';
import './Project.css';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      title: "Knee osteoarthritis detection using deep learning",
      description: "A deep learning model to detect knee osteoarthritis from X-ray images.",
      image: "/images/knee.png", // Updated path - images should be in public/images folder
      tech: ["Machine learning", "deep learning"],
      paperLink: "https://example.com/paper",
      githubLink: "https://github.com/ramchandragawas/Kneeosteoarthritis",
      category: "Machine Learning",
      showPaper: true // Flag to show paper instead of live demo
    },
    {
      title: "Real-time Emotion detection using EEG signals",
      description: "A deep learning model to detect emotions from EEG signals.",
      image: "/images/EEG.png", // Updated path - images should be in public/images folder
      tech: ["Machine learning", "Deep learning", "E-wave software", "EEG signals"],
     // liveLink: "https://example.com",
      githubLink: "https://github.com/ramchandragawas/EEG",
      category: "Machine Learning"
    },
    {
      title: "Food Connect",
      description: "Real-time food delivering web application.",
      image: "/images/Food.png",
      tech: ["ReactJs", "MongoDB", "NodeJs","Spring Boot","Java","API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/ramchandragawas/Food-connect",
      category: "Web App"
    },
    {
      title: "Event Management Portal",
      description: "A web application to manage events and bookings.",
      image: "/images/Eventmanagment.png", // Changed to a different image name to avoid duplicate
      tech: ["ReactJs", "MongoDB", "NodeJs","Javascript","API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/ramchandragawas/Event-management-portal",
      category: "Web App"
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          {projectsData.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.showPaper ? (
                    <a 
                      href={project.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      <i className="fas fa-file-alt"></i>
                      View Paper
                    </a>
                  ) : project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link code"
                  >
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;