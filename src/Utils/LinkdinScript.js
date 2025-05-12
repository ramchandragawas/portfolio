/**
 * LinkedIn Badge Script Loader Utility
 * This utility loads the LinkedIn badge script and provides functionality to use it
 */

export const loadLinkedInScript = () => {
  return new Promise((resolve, reject) => {
    // If script is already loaded, resolve immediately
    if (window.LI) {
      resolve(window.LI);
      return;
    }
    
    // Create script tag
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    
    // Script loaded successfully
    script.onload = () => {
      resolve(window.LI);
    };
    
    // Script failed to load
    script.onerror = (error) => {
      reject(new Error("LinkedIn badge script failed to load"));
    };
    
    // Add script to document
    document.body.appendChild(script);
  });
};

export const openLinkedInProfile = (vanityName) => {
  // First try to show the LinkedIn badge
  if (window.LI && typeof window.LI.showProfile === 'function') {
    window.LI.showProfile(vanityName, 'profile');
    return true;
  } 
  return false;
};