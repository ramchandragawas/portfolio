import React, { useEffect } from 'react';

const TorchCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    const outline = document.createElement('div');
    
    cursor.className = 'cursor-dot';
    outline.className = 'cursor-outline';
    
    document.body.appendChild(cursor);
    document.body.appendChild(outline);

    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      outline.style.transform = `translate3d(${mouseX - 15}px, ${mouseY - 15}px, 0)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(outline);
    };
  }, []);

  return null;
};

export default TorchCursor;