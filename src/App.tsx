import { useEffect, useRef, useState } from 'react';
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
  const scrollerRef = useRef<HTMLDivElement>(null);

  /* Mobile: touch scrolling doesn't pass from a section's inner scroll box
     to the page, so once that box is at its end, a further swipe in the
     same direction snaps to the next/previous section instead. */
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let startY = 0;
    let atTop = true;
    let atBottom = true;

    const innerScrollBox = (target: EventTarget | null) => {
      let el = target instanceof Element ? target : null;
      while (el && el !== scroller) {
        const { overflowY } = getComputedStyle(el);
        if ((overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight + 1) {
          return el;
        }
        el = el.parentElement;
      }
      return null;
    };

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      const box = innerScrollBox(e.target);
      atTop = !box || box.scrollTop <= 1;
      atBottom = !box || box.scrollTop + box.clientHeight >= box.scrollHeight - 1;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (window.matchMedia('(min-width: 768px)').matches) return;
      const box = innerScrollBox(e.target);
      if (!box) return; // no inner scroll box: native snapping already handles it

      const dy = startY - e.changedTouches[0].clientY; // > 0 = swipe up (scroll down)
      const current = Math.round(scroller.scrollTop / scroller.clientHeight);
      let next = current;
      if (dy > 50 && atBottom) next = current + 1;
      else if (dy < -50 && atTop) next = current - 1;

      const section = scroller.children[next] as HTMLElement | undefined;
      if (next !== current && section) {
        scroller.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
      }
    };

    scroller.addEventListener('touchstart', onTouchStart, { passive: true });
    scroller.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      scroller.removeEventListener('touchstart', onTouchStart);
      scroller.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  /** Add or remove pages here as you build them out */
  const sections = [
    { id: 'hero',        component: <Hero /> },
    { id: 'about',       component: <About /> },
    { id: 'research',   component: <Research /> },
    { id: 'projects',   component: <Projects /> },
    { id: 'experience', component: <Experience /> },
    { id: 'links',      component: <Links /> },
  ];

  return (
    <div className="relative">
      {/* Give Navbar the currently‑visible section */}
      <Navbar active={active} />

      {/* Full‑screen snap container */}
      <div ref={scrollerRef} className="snap-y snap-mandatory h-dvh md:h-screen overflow-y-scroll scroll-smooth">
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
