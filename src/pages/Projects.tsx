// src/pages/Projects.tsx
import React, { useState, useRef, useEffect } from 'react'
import ForetImg from '../assets/foretimg.png'
import RondoImg from '../assets/rondoimg.jpg'
import ForecastImg from '../assets/forecastimg.jpg'
import AbroadImg from '../assets/abroadimg.png'
import ArrowDown from '../assets/arrow-down.svg'

interface Project {
  title: string
  subtitle: string
  description: string
  image: string
  githubLink?: string
  secondaryLink?: string
  secondaryLinkType: 'devpost' | 'presentation'
}

const projects: Project[] = [
  {
    title: 'Foret',
    subtitle: 'Y Combinator Best Hack Award at HackMIT 2023',
    description: 'Sustainable Investment Analytics API to search, analyze, and summarize ESG reports for eco‑conscious traders',
    image: ForetImg,
    githubLink: '#',
    secondaryLink: 'https://devpost.com/software/foret',
    secondaryLinkType: 'devpost'
  },
  {
    title: 'Rondo',
    subtitle: 'Stanford Treehacks 2024',
    description: 'AI‑enabled search engine for automatic search refinement suggestions and result summarization. Similar to what is now Perplexity.',
    image: RondoImg,
    githubLink: 'https://github.com/ericz23/Rondo-SearchEngine',
    secondaryLink: 'https://github.com/jmccormick7/ESGFactChecker',
    secondaryLinkType: 'devpost'
  },
  {
    title: 'Travel Demand Forecasting for Optimized Rail Transit Scheduling',
    subtitle: '2024 Summer Olympics in Paris',
    description: 'Demand forecasting, transit queueing model, and metro scheduling analytics for the 2024 Summer Olympics in Paris',
    image: ForecastImg,
    githubLink: 'https://github.com/maxdittgen/OlympicsMetroQueueModel',
    secondaryLink: 'https://drive.google.com/file/d/1TrKL0aSMhz5p3Er2QgrJixWAM4CzL-dD/view?usp=sharing',
    secondaryLinkType: 'presentation'
  },
  {
    title: 'Abroad Advisors',
    subtitle: 'Ad-hoc search engine for finding study abroad programs',
    description: 'Built from scratch using WikiTravel city data, EducationAbroad university data, similarity algorithms, and text‑mining components.',
    image: AbroadImg,
    githubLink: 'https://github.com/solankyp/4300-Flask-Template-JSON/tree/master',
    secondaryLink: 'https://drive.google.com/file/d/1FaVjmEXV_Ub2uBIjx6wFVk2cUXURBNIT/view?usp=sharing',
    secondaryLinkType: 'presentation'
  },
]

const Projects: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showTopFade, setShowTopFade] = useState(false)
  const [showArrow, setShowArrow] = useState(false)

  const handleProjectClick = (index: number) => {
    setActiveProjectIndex(prev => (prev === index ? null : index))
  }

  /**
   * Evaluate scroll position to toggle fade + arrow visibility.
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
    evaluateScrollState()
    const handleResize = () => evaluateScrollState()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="projects" className="relative w-full min-h-screen bg-[#fffefc]">
      {/* Fixed header space */}
      <div className="h-40 w-full" />

      {/* Scrollable projects container */}
      <div className="mx-auto px-8 max-w-6xl w-full h-[calc(100vh-12rem)] relative">
        <div
          ref={scrollRef}
          onScroll={evaluateScrollState}
          className="h-full overflow-y-auto pr-8 pl-4 pt-4 pb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group relative transform-gpu hover:scale-105 transition-transform bg-white rounded-xl border border-gray-300 overflow-hidden cursor-pointer flex flex-col"
                onClick={() => handleProjectClick(idx)}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold mb-1 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-sm italic mb-1 leading-tight">
                    {proj.subtitle}
                  </p>
                  <p className="text-sm leading-tight">{proj.description}</p>
                </div>

                {/* Overlay (hover / tap) */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity flex items-center justify-center ${
                    activeProjectIndex === idx
                      ? 'opacity-90'
                      : 'opacity-0 group-hover:opacity-90'
                  }`}
                  onClick={() => setActiveProjectIndex(null)}
                >
                  <div className="flex w-full h-full">
                    <a
                      href={proj.githubLink}
                      className="flex-1 flex items-center justify-center text-white text-xl font-medium hover:bg-opacity-50 hover:bg-gray-700 transition-colors"
                      onClick={e => {
                        e.stopPropagation()
                        window.open(proj.githubLink, '_blank')
                      }}
                    >
                      GitHub
                    </a>

                    <a
                      href={proj.secondaryLink}
                      className="flex-1 flex items-center justify-center text-white text-xl font-medium hover:bg-opacity-50 hover:bg-gray-700 transition-colors"
                      onClick={e => {
                        e.stopPropagation()
                        window.open(proj.secondaryLink, '_blank')
                      }}
                    >
                      {proj.secondaryLinkType === 'devpost'
                        ? 'Devpost'
                        : 'Presentation'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top fade hint */}
        {showTopFade && (
          <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#fffefc] to-transparent" />
        )}

        {/* Bottom fade hint */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fffefc] to-transparent" />

        {/* Arrow to next section */}
        {showArrow && (
          <a
            href="#experience"
            aria-label="Scroll to Experience"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <img src={ArrowDown} alt="Scroll down" className="w-8 h-10 animate-bounce" />
          </a>
        )}
      </div>
    </section>
  )
}

export default Projects
