import React from 'react';
import { FaGithub, FaLinkedin, FaFile, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="fixed bottom-0 left-0 w-full bg-[#fffefc] md:bg-transparent z-30 flex justify-center space-x-4 p-3 md:p-4">
    <a href="mailto:myd4@cornell.edu" aria-label="Email Me">
      <FaEnvelope size={24} />
    </a>
    <a href="https://github.com/maxdittgen" aria-label="GitHub">
      <FaGithub size={24} />
    </a>
    <a href="https://linkedin.com/in/mdittgen" aria-label="LinkedIn">
      <FaLinkedin size={24} />
    </a>
    <a
      href="/docs/Maximilian_Dittgen_CV.pdf"
      download="Maximilian_Dittgen_CV.pdf"
      aria-label="CV"
      className="w-6 h-6 flex items-center justify-center text-base font-bold leading-none"
    >
      CV
    </a>
    <a 
      href="/docs/Resume.pdf" 
      download="Maximilian Dittgen Resume.pdf" 
      aria-label="Resume"
    >
      <FaFile size={24} />
    </a>
  </footer>
);

export default Footer;