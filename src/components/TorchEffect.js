import React, { useEffect } from 'react';

const TorchEffect = () => {
  useEffect(() => {
    // Only run the torch effect if dark theme is active:
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      const torch = document.createElement('div');
      torch.id = 'torch-effect';
      torch.style.position = 'fixed';
      torch.style.pointerEvents = 'none';
      torch.style.width = '80px';
      torch.style.height = '80px';
      torch.style.borderRadius = '50%';
      torch.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0) 60%)';
      torch.style.transform = 'translate(-50%, -50%)';
      torch.style.zIndex = '9999';
      // Initially hidden:
      torch.style.opacity = '0';
      torch.style.transition = 'opacity 0.2s ease';
      document.body.appendChild(torch);

      let timeoutId = null;
      const moveTorch = (e) => {
        // Move torch to cursor position and show it:
        torch.style.left = e.clientX + 'px';
        torch.style.top = e.clientY + 'px';
        torch.style.opacity = '1';
        // Clear any previous inactivity timer:
        if (timeoutId) clearTimeout(timeoutId);
        // Set timer to hide torch after 500ms of inactivity:
        timeoutId = setTimeout(() => {
          torch.style.opacity = '0';
        }, 500);
      };

      document.addEventListener('mousemove', moveTorch);
      
      return () => {
        document.removeEventListener('mousemove', moveTorch);
        if (torch.parentNode) {
          torch.parentNode.removeChild(torch);
        }
      };
    }
  }, []);

  return null;
};

export default TorchEffect;