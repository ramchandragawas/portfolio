// Education.js
import React, { useEffect, useRef } from 'react';
import './Education.css';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "KLE Technological University",
    period: "2021 - Present",
    description: "Focused on computer science fundamentals and software development.",
    achievements: [], // Add empty array instead of commenting out
    courses: ["Data Structures", "Algorithms ", " Database Management Systems ", " Operating Systems ", " AWS Fundamentals"]
  },

  {
    degree: "Higher Secondary School",
    institution: "Saraswat Vidyalaya",
    period: "2019 - 2021",
    description: "Studied Science stream with subjects including Physics, Chemistry, Mathematics.",
    achievements: [], // Add empty array instead of commenting out
    courses: ["Physics", "Chemistry", "Mathematics", "Biology"]
  }
];

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const elements = document.querySelectorAll('.education-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="section education-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-content">
                <h3 className="degree animate-up">{edu.degree}</h3>
                <h4 className="institution animate-up">{edu.institution}</h4>
                <p className="period animate-up">
                  <i className="far fa-calendar-alt"></i> {edu.period}
                </p>
                <p className="description animate-up">{edu.description}</p>
                {edu.achievements.length > 0 && (
                  <div className="achievements-list">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="achievement-item animate-right">
                        <i className="fas fa-check-circle"></i>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="courses-container">
                  <h5 className="courses-title animate-up">Key Courses</h5>
                  <div className="courses-list">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="course-tag animate-up">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;