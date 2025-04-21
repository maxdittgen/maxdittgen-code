// src/pages/Experience.tsx
import React from 'react'
import CapitalOneLogo from '../assets/capitalone-logo.png'
import ExostellarLogo from '../assets/exostellar-logo.png'
import CornellLogo from '../assets/cornell-logo.png'
import LumosLogo from '../assets/lumos-logo.png'
import ArrowDown from '../assets/arrow-down.svg'

interface ExpItem {
  logo: string
  company: string
  role: string
  date: string
  details: string
  tech?: string
}

const experiences: ExpItem[] = [
  {
    logo: CapitalOneLogo,
    company: 'Capital One',
    role: 'Software Engineering Intern',
    date: 'Summer 2024',
    details: 'Data pipelining for Zelle Peer‑to‑Peer Payments',
    tech: 'Java, Snowflake, Springboot',
  },
  {
    logo: ExostellarLogo,
    company: 'Exostellar (Series A)',
    role: 'Software Engineering Intern',
    date: 'Summer 2023',
    details:
      'Memory allocation/deallocation to containerized applications on AWS VMs',
    tech: 'Linux Kernel, Xen Hypervisor, C',
  },
  {
    logo: CornellLogo,
    company: 'Cornell University',
    role: 'Teaching Assistant / Course Staff',
    date: 'Jan 2024 – Present',
    details:
      'Host office hours and grade coursework for CS 4852: Networks II and CS 4300: Language & Information',
  },
  {
    logo: LumosLogo,
    company: 'Lumos Debate',
    role: 'Program Director',
    date: 'July 2020 – May 2024',
    details:
      'Develop debate curriculum and manage K‑12 after‑school program for over 740 students worldwide',
  },
]

const Experience: React.FC = () => (
  <section
    id="experience"
    className="relative w-full min-h-screen bg-[#fffefc] pt-45 md:pt-45"
  >
    {/* Centered container */}
    <div className="mx-auto px-8 max-w-5xl w-full h-[calc(100vh-14rem)] relative">
      {/* Scrollable list with padding for hover effects */}
      <ul className="overflow-y-auto h-full pr-8 pb-16 space-y-4 pt-4 pl-4">
        {experiences.map((exp, i) => (
          <li
            key={i}
            className="flex bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-md transform-gpu"
          >
            {/* Logo - larger with minimal margin */}
            <div className="flex-shrink-0 p-2 flex items-center">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Text content - follows mockup layout */}
            <div className="flex-grow p-4">
              <h3 className="text-base font-semibold">{exp.company}</h3>
              <p className="text-base font-medium text-gray-800">
                {exp.role}, <span className="italic">{exp.date}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{exp.details}{exp.tech && <span>; <i>{exp.tech}</i></span>}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Bottom fade to hint scroll */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fffefc] to-transparent" />
    </div>

    {/* Arrow positioned halfway between content and footer */}
    <a
      href="#research"
      aria-label="Scroll to Research"
      className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
    >
      <img
        src={ArrowDown}
        alt="Scroll down"
        className="w-8 h-10 animate-bounce"
      />
    </a>
  </section>
)

export default Experience