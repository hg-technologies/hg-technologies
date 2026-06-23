// components/ScrollProvider.jsx
'use client';

import { useEffect, useState } from 'react';

export default function ScrollProvider({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add scrolled class to body
  useEffect(() => {
    if (isScrolled) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  }, [isScrolled]);

  return (
    <div className={isScrolled ? 'scrolled' : ''}>
      {children}
    </div>
  );
}