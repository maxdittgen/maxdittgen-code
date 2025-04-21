import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';

import Hero from './pages/Hero';
import About from './pages/About';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Links from './pages/Links';

function App() {
  /** Keeps track of the section currently in view */
  const [active, setActive] = useState<string>('');   // <-- pass to Navbar

  /** Add or remove pages here as you build them out */
  const sections = [
    { id: 'hero',        component: <Hero /> },
    { id: 'about',       component: <About /> },
    { id: 'experience', component: <Experience /> },
    { id: 'research',   component: <Research /> },
    { id: 'projects',   component: <Projects /> },
    { id: 'links',      component: <Links /> },
  ];

  return (
    <div className="relative">
      {/* Give Navbar the currently‑visible section */}
      <Navbar active={active} />

      {/* Full‑screen snap container */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {sections.map(({ id, component }) => (
          <SectionWrapper
            key={id}
            id={id}
            setActive={setActive}   // <-- each section reports when it’s in view
          >
            {component}
          </SectionWrapper>
        ))}
      </div>

      <Footer />

      {/* Gradient masks */}
      <div className="fade-top" />
      <div className="fade-bottom" />
    </div>
  );
}

export default App;
