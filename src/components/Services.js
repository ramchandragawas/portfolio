import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const servicesRef = useRef(null);

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
        threshold: 0.2
      }
    );

    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
   /* {
      icon: "fas fa-desktop",
      title: "Web Design",
      description: "Creating beautiful, responsive websites that engage users and drive results.",
      features: [
        "Responsive Design",
        "UI/UX Design",
        "Mobile-First Approach",
        "Modern Layouts"
      ]
    },*/
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Building robust web applications with modern technologies and best practices.",
      features: [
        "Front-end Development",
        "Back-end Development",
        "API Integration",
        "AI integration",
        "Database Design"
      ]
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Machine Learning",
      description: "Implementing machine learning algorithms for data analysis and predictive modeling.",
      features: [
        "Data Preprocessing",
        "Model Training",
        "Model Evaluation",
        "Deployment"
      ]
    },
    {
      icon: "fas fa-search",
      title: "AWS Cloud",
      description: "Deploying scalable cloud solutions using Amazon Web Services.",
      features: [
        "EC2 Instances",
        "S3 Buckets",
        //"RDS Databases",
        "Lambda Functions"
      ]
    }
  ];

  return (
    <section id="services" className="section services-section" ref={servicesRef}>
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <i className="fas fa-check"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-cta">
                Get Started
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;