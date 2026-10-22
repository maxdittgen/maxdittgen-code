// src/pages/Hero.tsx
import React, { useEffect, useState } from 'react'
import ProfilePic from '../assets/profilepic.jpg'
import ArrowDown from '../assets/arrow-down.svg'

const Hero: React.FC = () => {
  const [imageHeight, setImageHeight] = useState<number | undefined>(478);
  
  // Adjust image height based on viewport height
  useEffect(() => {
    const handleResize = () => {
      // On mobile, the image is sized by CSS instead
      if (!window.matchMedia('(min-width: 768px)').matches) {
        setImageHeight(undefined);
        return;
      }

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
      className="relative w-full h-full min-h-0 md:h-auto md:min-h-screen bg-[#fffefc] flex flex-col items-center justify-center pt-24 pb-14 md:pt-42 md:pb-28 overflow-hidden"
    >
      {/* Main content grid, slightly narrower than full width */}
      <div className="mx-auto md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 max-w-4xl w-full">
        {/* Left: profile image with dynamically adjusted height */}
        <img
          src={ProfilePic}
          alt="Max Dittgen portrait"
          className="w-full max-w-[240px] aspect-[400/478] mx-auto md:mx-0 md:max-w-full md:aspect-auto md:w-[400px] rounded-xl shadow-lg object-cover"
          style={imageHeight ? { height: `${imageHeight}px` } : undefined}
        />

        {/* Right: heading and intro text, slightly smaller type */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="hero-title text-4xl md:text-5xl mb-4">Hi, I'm Max!</h1>
          <p className="text-lg md:text-xl font-medium max-w-lg leading-relaxed">
            I'm a recent Cornell University B.S. and M.Eng. graduate excited about
            the confluence of technology, development and cultures.
          </p>
          <a
            href="/docs/Maximilian_Dittgen_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-lg text-gray-500 border-b border-dotted border-gray-400 transition-transform duration-200 hover:scale-110"
          >
            CV
            {/* Curved upward arrow */}
            <svg
              viewBox="0 0 16 16"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 13c5 0 9-2.5 9-10" />
              <path d="M7.5 6.5 11 3l3.5 3.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Arrow positioned halfway between content and footer */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="hidden md:block absolute bottom-16 left-1/2 transform -translate-x-1/2"
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