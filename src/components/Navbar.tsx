import React from 'react';
import Logo from '../assets/max_dittgen.svg';

interface NavbarProps {
  active: string;
}

const Navbar: React.FC<NavbarProps> = ({ active }) => {
    console.log('Navbar active:', active);

    return(
    <nav className="fixed top-0 left-0 w-full flex flex-col bg-transparent z-30 py-4">
        {/* Logo (full-width wrapper) */}
        <div className="w-full flex justify-center py-4">
        <a href="#hero">
            <img
            src={Logo}
            alt="Max Dittgen Logo"
            className="w-55 h-auto md:w-70"
            />
        </a>
        </div>
        {/* Links */}
        <ul className="w-full max-w-4xl mx-auto flex justify-around pb-4">
        <li>
            <a
            href="#about"
            className={`nav-link ${active === 'about' ? 'font-bold' : 'font-normal'}`}
            >
            About
            </a>
        </li>
        <li>
            <a
            href="#experience"
            className={`nav-link ${active === 'experience' ? 'font-bold' : 'font-normal'}`}
            >
            Experience
            </a>
        </li>
        <li>
            <a
            href="#research"
            className={`nav-link ${active === 'research' ? 'font-bold' : 'font-normal'}`}
            >
            Research
            </a>
        </li>
        <li>
            <a
            href="#projects"
            className={`nav-link ${active === 'projects' ? 'font-bold' : 'font-normal'}`}
            >
            Projects
            </a>
        </li>
        <li>
            <a
            href="#links"
            className={`nav-link ${active === 'links' ? 'font-bold' : 'font-normal'}`}
            >
            Links
            </a>
        </li>
        </ul>
    </nav>
    );
};

export default Navbar;
