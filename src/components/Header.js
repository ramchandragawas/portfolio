import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../logo.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-brand">
          <img src={logo} alt="Logo" className="logo" />
          <span className="name">RAM GAWAS</span>
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle">
          <i className="fas fa-moon dark-icon"></i>
          <i className="fas fa-sun light-icon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;