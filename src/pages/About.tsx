// src/pages/About.tsx
import React, { useRef, useState, useEffect } from 'react'
import ProfilePic from '../assets/cyclingcenter_small.jpg'
import ArrowDown from '../assets/arrow-down.svg'

const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => setScrolled(el.scrollTop > 0)
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#fffefc] pt-42"
    >
      {/* Modified grid layout with text and hover-overlay image */}
      <div className="mx-auto px-8 grid grid-cols-5 items-center gap-12 max-w-6xl w-full h-[calc(100vh-18rem)]">

        {/* Left: scrollable text container */}
        <div className="relative col-span-3 h-[604px] pr-4">
          <div
            ref={scrollRef}
            className="overflow-y-auto h-full pr-4 pb-16 relative"
          >
            <div className="space-y-4">
              {/* Paragraphs... */}
              <p className="text-base leading-relaxed">
                I'm Max, a senior at Cornell University studying Computer Science with minors in Transportation Engineering and Asian American Studies. After graduating with a B.S. in May 2025, I am set to complete my M.Eng in December.
              </p>
              <p className="text-base leading-relaxed">
                I am fascinated by how technology can amplify sustainable human and urban development, particularly through cloud computing and financial technology. Professionally, I worked as a Software Engineering Intern at Capital One, developing a fraud detection pipeline for Zelle payments, and at Exostellar, where I built a Linux Kernel driver optimizing hypervisor memory management for VMs on AWS.
              </p>
              <p className="text-base leading-relaxed">
                My research focuses on applying technology to urban and global development. Currently, I'm researching path-planning algorithms to reduce pollution exposure in navigation apps at Cornell's uTECH lab. Previously, I've researched with Cornell's Computing for Global Development Lab, Boston University's PeacLab, and Princeton's Troyanskaya Lab.
              </p>
              <p className="text-base leading-relaxed">
                I love living in diverse environments, and have just recently studied abroad at the National University of Singapore where I immersed myself in computer graphics, urban development, Southeast Asian history, and Haidilao hot pot. I have also traveled to East Africa with the Global Livingston Institute, collaborating with the Rwandan National Cycling team on computational sponsorship solutions (picture on right!). I've been fortunate to have adventured to over 45 countries across 5 continents, and hope to keep the momentum going!
              </p>
              <p className="text-base leading-relaxed">
                In my free time, I enjoy travel, photography, music, and cooking. Check out my creative work in the links below!
              </p>
            </div>
          </div>
          {/* Top fade if scrolled */}
          {scrolled && (
            <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#fffefc] to-transparent" />
          )}
          {/* Bottom gradient hint */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fffefc] to-transparent" />
        </div>

        {/* Right: image with hover overlay and caption */}
        <div className="flex justify-center col-span-2">
          <div className="relative group w-full" style={{ maxWidth: '453px' }}>
            <img
              src={ProfilePic}
              alt="Max at the Africa Rising Cycling Center"
              className="w-full h-[604px] rounded-xl object-cover"
            />
            {/* Gray overlay */}
            <div className="absolute inset-0 bg-gray-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            {/* Caption */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
              <p className="leading-relaxed text-white text-opacity-100 text-center px-4">
                From my time with the Africa Rising Cycling Center in Rwanda, 2024
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bouncing down arrow to next section */}
      <a
        href="#experience"
        aria-label="Scroll to Experience"
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
}

export default About
