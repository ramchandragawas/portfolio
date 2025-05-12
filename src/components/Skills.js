import React from 'react';
import './Skills.css';

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "fab fa-react", level: 90 },
      { name: "JavaScript", icon: "fab fa-js", level: 85 },
      { name: "HTML5", icon: "fab fa-html5", level: 95 },
      { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
      //{ name: "Sass", icon: "fab fa-sass", level: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js", level: 80 },
      { name: "Python", icon: "fab fa-python", level: 75 },
      //{ name: "PHP", icon: "fab fa-php", level: 70 },
      { name: "MongoDB", icon: "fas fa-database", level: 85 },
      { name: "MySQL", icon: "fas fa-database", level: 80 }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "fab fa-git-alt", level: 85 },
      { name: "Docker", icon: "fab fa-docker", level: 75 },
      { name: "AWS", icon: "fab fa-aws", level: 70 },
      { name: "Linux", icon: "fab fa-linux", level: 80 },
      //{ name: "Figma", icon: "fab fa-figma", level: 75 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <button key={i} className="skill-btn">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <span className="skill-name">{skill.name}</span>
                  <div 
                    className="skill-progress"
                    style={{ transform: `scaleX(${skill.level / 100})` }}
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;