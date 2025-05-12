import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () =>
      window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scroll-to-top">
        ↑
      </button>
    )
  );
};

export default ScrollToTop;