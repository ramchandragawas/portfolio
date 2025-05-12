import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      feedback: '“Incredible developer – exceeded all expectations!”'
    },
    {
      name: 'John Smith',
      feedback: '“Professional, creative, and efficient. Highly recommended!”'
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-wrap">
          {testimonials.map((item, i) => (
            <blockquote key={i} className="testimonial">
              <p>{item.feedback}</p>
              <cite>{item.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;