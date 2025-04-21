// src/pages/Research.tsx
import React, { useRef, useState, useEffect } from 'react'
import ArrowDown from '../assets/arrow-down.svg'

interface ResearchItem {
  title: string
  subtitle: string
  details: string
  link?: string
}

const researchExperiences: ResearchItem[] = [
  {
    title: 'Urban Technology Lab (uTECH) - Cornell University',
    subtitle: 'Jan 2025 – Present',
    details: 'Pollution exposure aware path‑planning algorithm development for navigation apps',
    link: '#'
  },
  {
    title: 'Computing for Global Development Lab - Cornell University',
    subtitle: 'Jan 2024 – Dec 2024',
    details: 'UI development for collaborative Human‑AI tool for writing constructive Reddit comments',
    link: '#'
  },
  {
    title: 'Performance‑and‑Energy Aware Computing Lab (PeacLab) - Boston University',
    subtitle: 'Summer 2023',
    details: 'Linux Kernel testing for efficient and scalable cloud solution built on bare‑metal microcontroller clusters',
    link: '#'
  },
  {
    title: 'Troyanskaya Lab - Princeton University',
    subtitle: 'Jan 2021 – May 2021',
    details: 'Computational gene expression analysis for determining developmental diseases modelable by synthetic brain organoids',
    link: '#'
  },
]

const publications: ResearchItem[] = [
  {
    title: 'Examining Human‑AI Collaboration for Co‑Writing Constructive Comments Online',
    subtitle: 'Farhana Shahid, Maximilian Dittgen, Mor Naaman, Aditya Vashistha — CSCW ‘25 (In Review)',
    details: 'Examining whether and how LLMs can facilitate humans in contributing constructive comments to divisive hot‑topic online discussions.',
    link: '#'
  },
  {
    title: 'Towards Swap‑Free, Continuous Ballooning for Fast, Cloud‑Based Virtual Machine Migrations',
    subtitle: 'Kevin Alarcón Negy, Tycho Nightingale, Hakim Weatherspoon, Zhiming Shen (Acknowledged Contributor) — ACM ‘24',
    details: 'Continuous memory ballooning in the Xen hypervisor as a means to speed live virtual machine migrations.',
    link: '#'
  },
]

const Research: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showTopFade, setShowTopFade] = useState(false)
  const [showArrow, setShowArrow] = useState(false)

  /**
   * Determines whether the arrow (link to next section) should be visible
   * and whether to render the top‑edge fade based on scroll position / overflow.
   */
  const evaluateScrollState = () => {
    const el = scrollRef.current
    if (!el) return

    const atTop = el.scrollTop === 0
    const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight
    const notScrollable = el.scrollHeight <= el.clientHeight

    setShowTopFade(!atTop)
    setShowArrow(atBottom || notScrollable)
  }

  useEffect(() => {
    // Initial evaluation (covers SSR hydration & resize)
    evaluateScrollState()

    const handleResize = () => evaluateScrollState()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="research" className="relative w-full min-h-screen bg-[#fffefc] pt-42">
      <div className="mx-auto px-8 max-w-6xl w-full h-[calc(100vh-14rem)] relative">
        {/* Scrollable content with padding */}
        <div
          ref={scrollRef}
          onScroll={evaluateScrollState}
          className="overflow-y-auto h-full pr-8 pl-8 pt-4 pb-16"
        >
          {/* Research Experience */}
          <h2 className="text-2xl font-bold mb-4">Research Experience</h2>
          <ul className="space-y-4">
            {researchExperiences.map((item, idx) => (
              <li
                key={idx}
                className="group transform-gpu hover:scale-105 transition-transform cursor-pointer"
                onClick={() => item.link && window.open(item.link, '_blank')}
              >
                <h3 className="text-xl font-semibold leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-base italic mb-1">{item.subtitle}</p>
                <p className="text-base">{item.details}</p>
              </li>
            ))}
          </ul>

          {/* Publications */}
          <h2 className="mt-8 text-2xl font-bold mb-4">Publications / Acknowledgements</h2>
          <ul className="space-y-4">
            {publications.map((item, idx) => (
              <li
                key={idx}
                className="group transform-gpu hover:scale-105 transition-transform cursor-pointer"
                onClick={() => item.link && window.open(item.link, '_blank')}
              >
                <h3 className="text-xl font-semibold leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-base italic mb-1">{item.subtitle}</p>
                <p className="text-base">{item.details}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Top fade (only when scrolled down) */}
        {showTopFade && (
          <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#fffefc] to-transparent transition-opacity" />
        )}

        {/* Bottom fade (static) */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fffefc] to-transparent" />

        {/* Bouncing down arrow: appears only when user has reached bottom OR no scroll needed */}
        {showArrow && (
          <a
            href="#projects"
            aria-label="Scroll to Projects"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2" /* 7rem = half of 14rem footer gap */
          >
            <img src={ArrowDown} alt="Scroll down" className="w-8 h-10 animate-bounce" />
          </a>
        )}
      </div>
    </section>
  )
}

export default Research