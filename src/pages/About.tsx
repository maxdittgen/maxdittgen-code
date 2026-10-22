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
              {/* Paragraphs with bold text and links */}
              <p className="text-base leading-relaxed">
                <strong>I'm Max, a recent graduate from Cornell University with an M.Eng. and B.S. in Computer Science and a minor in Asian American Studies.</strong> After leaving Ithaca in May, I've moved to the San Francisco Bay Area to begin a new role at Apple.
              </p>
              <p className="text-base leading-relaxed">
                <strong>I am fascinated by how innovations in AI and Human-Computer Interaction can amplify sustainable global development</strong>, and am curious about how to create such innovations in ways that are aligned with and fair to diverse communities around the world.
              </p>
              <p className="text-base leading-relaxed">
                My <a href="#research" className="font-bold underline text-black">research</a> interests lie in identifying the unequal and extractive relationships between technology platforms and their global user bases, and ways to develop AI and technology for underserved regions in ways that challenges these relationships. Currently, I'm researching how value-aligned LLM writing assistants can improve deliberation on divisive topics for users from non-WEIRD cultures, mentored by <a href="https://farhana-shahid.github.io/" className="font-bold underline text-black" target="_blank" rel="noopener noreferrer">Farhana Shahid</a> and advised by <a href="https://www.adityavashistha.com" className="font-bold underline text-black" target="_blank" rel="noopener noreferrer">Aditya Vashistha</a>. Previously, I've researched with <a href="https://urban.tech.cornell.edu" className="font-bold underline text-black" target="_blank" rel="noopener noreferrer">Cornell's uTECH lab</a>, <a href="https://peaclab.bu.edu" className="font-bold underline text-black" target="_blank" rel="noopener noreferrer">Boston University's PeacLab</a>, and <a href="https://molbio.princeton.edu/troyanskaya-lab" className="font-bold underline text-black" target="_blank" rel="noopener noreferrer">Princeton's Troyanskaya Lab</a>.
              </p>
              <p className="text-base leading-relaxed">
                My <a href="#experience" className="font-bold underline text-black">professional experience</a> is in distributed systems, having worked on Xen VM live migration, KVM direct interrupt injection, and VM orchestration. My journey has taken me from Exostellar (acq. Qualcomm) to AWS and Apple, and I've even <a href="https://github.com/search?q=repo%3Atorvalds%2Flinux+mdittgen&type=commits" className="font-bold underline text-black" target="_blank" rel="noopener noreferrer">merged a few patches to the Linux Kernel</a>!
              </p>
              <p className="text-base leading-relaxed">
                I love living in diverse environments, and have spent significant portions of my life in New York City, Berlin, Singapore, and Hong Kong. I believe that travel is a gift that has brought me the fortune of awesome people and places, including my time in East Africa with the Global Livingston Institute, collaborating with the <a href="https://arcc.rw" className="font-bold underline text-black" target="_blank" rel="noopener noreferrer">Rwandan National Cycling Team</a> on computational sponsorship solutions (picture on right!).
              </p>
              <p className="text-base leading-relaxed">
                In my free time, I enjoy hiking, music, cooking, and aviation photography. Check out my creative work in the links below!
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
            <div className="absolute inset-0 bg-gray-500 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity rounded-xl" />
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