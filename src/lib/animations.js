// lib/animations.js
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };
  
  export const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };
  
  export const scaleIn = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1 } }
  };
  
  // Add more variants as needed
  