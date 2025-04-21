// src/pages/Hero.tsx
import React, { useEffect, useState } from 'react'
import ProfilePic from '../assets/profilepic.jpg'
import ArrowDown from '../assets/arrow-down.svg'

const Hero: React.FC = () => {
  const [imageHeight, setImageHeight] = useState(478);
  
  // Adjust image height based on viewport height
  useEffect(() => {
    const handleResize = () => {
      // Calculate available height (viewport height minus navbar height at 42px and footer at 12px)
      const availableHeight = window.innerHeight - 42;
      
      // Calculate image height - maintain aspect ratio down to a square (400x400)
      // 478 is original height, 400 is both original width and min height (square)
      const calculatedHeight = Math.max(400, Math.min(478, availableHeight * 0.7));
      setImageHeight(calculatedHeight);
    };
    
    // Set initial height and add listener
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#fffefc] flex flex-col items-center justify-center pt-42 pb-28 overflow-hidden"
    >
      {/* Main content grid, slightly narrower than full width */}
      <div className="mx-auto px-8 grid grid-cols-2 items-center gap-12 max-w-4xl w-full">
        {/* Left: profile image with dynamically adjusted height */}
        <img
          src={ProfilePic}
          alt="Max Dittgen portrait"
          className="w-[400px] rounded-xl shadow-lg object-cover"
          style={{ height: `${imageHeight}px` }}
        />

        {/* Right: heading and intro text, slightly smaller type */}
        <div className="flex flex-col items-start">
          <h1 className="hero-title text-5xl mb-4">Hi, I'm Max!</h1>
          <p className="text-xl font-medium max-w-lg leading-relaxed">
            I'm currently a computer science student at Cornell University studying
            the confluence of technology, development and finance.
          </p>
        </div>
      </div>

      {/* Arrow positioned halfway between content and footer */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <img
          src={ArrowDown}
          alt="Scroll down"
          className="w-8 h-10 animate-bounce"
        />
      </a>
    </section>
  );
}

export default Hero