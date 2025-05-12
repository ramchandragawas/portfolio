import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            const nestedAnimations = entry.target.querySelectorAll('.animate-nested');
            nestedAnimations.forEach((el, index) => {
              el.style.animationDelay = `${0.3 + (index * 0.1)}s`;
              el.classList.add('animate');
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading development of enterprise applications and mentoring junior developers.",
      achievements: [
        "Optimized application performance by 40%",
        "Led team of 5 developers",
        "Implemented microservices architecture"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description: "Specialized in creating responsive and performant web applications.",
      achievements: [
        "Developed 20+ responsive websites",
        "Reduced load time by 60%",
        "Implemented CI/CD pipeline"
      ],
      technologies: ["JavaScript", "React", "CSS3", "Git"],
      icon: "fas fa-code"
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      period: "2018 - 2019",
      description: "Built custom websites and web applications for diverse clients.",
      achievements: [
        "Created 10+ client websites",
        "Improved SEO rankings",
        "Enhanced user experience"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      icon: "fas fa-paint-brush"
    }
  ];

  return (
    <section id="experience" className="section experience-section" ref={experienceRef}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <i className={exp.icon}></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-header animate-nested">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="company-name">{exp.company}</span>
                  <span className="period">
                    <i className="far fa-calendar-alt"></i> {exp.period}
                  </span>
                </div>
                <p className="experience-description animate-nested">
                  {exp.description}
                </p>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="achievement-item animate-nested">
                      <i className="fas fa-check-circle"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="technologies-used">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag animate-nested">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;