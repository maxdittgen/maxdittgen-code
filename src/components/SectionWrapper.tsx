import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  id: string;
  /** Callback from App to update the active section */
  setActive: (id: string) => void;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  setActive,
  children,
}) => {
  /* When 60 % of the section is visible, mark it active.
     Skip bolding when we’re on the hero so nothing is highlighted. */
  const { ref } = useInView({
    threshold: 0.6,
    onChange: (inView) => {
      if (inView) {
        setActive(id === 'hero' ? '' : id); // '' = no bolding on hero
      }
    },
  });

  return (
    <section
      id={id}
      ref={ref}
      className="snap-start flex items-center justify-center min-h-screen px-8"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
