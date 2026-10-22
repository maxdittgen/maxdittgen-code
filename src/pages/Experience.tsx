// src/pages/Experience.tsx
import React from 'react'
import CapitalOneLogo from '../assets/capitalone-logo.png'
import ExostellarLogo from '../assets/exostellar-logo.png'
import CornellLogo from '../assets/cornell-logo.png'
import LumosLogo from '../assets/lumos-logo.png'
import AppleLogo from '../assets/apple-logo.png'
import AwsLogo from '../assets/aws-logo.png'
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
    logo: AppleLogo,
    company: 'Apple',
    role: 'Software Engineer',
    date: '2026 – Present',
    details: 'Developing compute control plane for Apple Cloud Elastic Compute',
  },
  {
    logo: AwsLogo,
    company: 'Amazon Web Services (AWS)',
    role: 'Software Development Intern, EC2 Kernel/Hypervisor',
    date: 'Fall 2025',
    details:
      'Hardware‑accelerated interrupt injection for the EC2 Nitro Hypervisor on ARM; authored a Linux kernel RFC patch series and had three KVM patches merged into mainline Linux',
    tech: 'C, Linux Kernel, KVM, QEMU',
  },
  {
    logo: CapitalOneLogo,
    company: 'Capital One',
    role: 'Software Engineering Intern',
    date: 'Summers 2024 & 2025',
    details: 'Data pipelines and APIs for Capital One Travel and Zelle peer‑to‑peer payments',
    tech: 'TypeScript, Java, AWS, Snowflake, Spring Boot',
  },
  {
    logo: ExostellarLogo,
    company: 'Exostellar (acquired by Qualcomm)',
    role: 'Software Engineering Intern',
    date: 'Summer 2023',
    details:
      'VM live migration optimizations in the Xen hypervisor, acknowledged in a SoCC \'24 publication',
    tech: 'Linux Kernel, Xen Hypervisor, C, Go',
  },
  {
    logo: CornellLogo,
    company: 'Cornell University',
    role: 'Graduate Teaching Assistant / Teaching Assistant',
    date: 'Jan 2024 – May 2026',
    details:
      'Coordinated course operations between the professor and a team of 30 undergraduate TAs for CS 4300: Language & Information, and taught a NumPy workshop; previously a TA for CS 4300 and CS 4852: Markets II. Outstanding Graduate Teaching Assistant Award, 2026',
  },
  {
    logo: LumosLogo,
    company: 'Lumos Debate',
    role: 'Program Director',
    date: 'July 2020 – May 2024',
    details:
      'Developed debate curriculum and managed K‑12 after‑school program for over 740 students worldwide',
  },
]

const Experience: React.FC = () => (
  <section
    id="experience"
    className="relative w-full min-h-screen bg-[#fffefc] pt-45 md:pt-45"
  >
    {/* Centered container */}
    <div className="mx-auto px-8 max-w-5xl w-full h-[calc(100vh-14rem)] relative">
      <h2 className="text-2xl font-bold mb-2 ml-7">Places I've worked</h2>
      {/* Scrollable list with padding for hover effects */}
      <ul className="overflow-y-auto h-full pr-8 pb-16 space-y-4 pt-4 pl-4">
        {experiences.map((exp, i) => (
          <li
            key={i}
            className="flex bg-white overflow-hidden transition-all duration-300 hover:scale-[1.05] transform-gpu"
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
      href="#links"
      aria-label="Scroll to Link"
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