'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after 50vh (adjust as needed)
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = window.innerHeight * 0.5; // 50vh
      setVisible(scrollTop > threshold);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3.5 rounded-full shadow-lg z-50 text-xl bg-[#00202f] text-[#ffe6c7] border-2 border-[#3a86ff40] hover:border-[#3a86ff] transition-all duration-300 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
