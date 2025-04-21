// src/pages/Links.tsx
import React from 'react'
import ArrowUp from '../assets/double_up.svg'

const Links: React.FC = () => (
  <section
    id="links"
    className="relative w-full min-h-screen bg-[#fffefc] pt-32 flex flex-col items-center"
  >
    {/* Centered list of links */}
    <div className="flex-1 flex flex-col justify-center space-y-12">
      <a
        href="#"
        className="text-3xl font-semibold transform-gpu hover:scale-110 transition-transform"
      >
        Photography
      </a>
      <a
        href="#"
        className="text-3xl font-semibold transform-gpu hover:scale-110 transition-transform"
      >
        Blog
      </a>
      <a
        href="#"
        className="text-3xl font-semibold transform-gpu hover:scale-110 transition-transform"
      >
        Music
      </a>
    </div>

    {/* Double up arrow bouncing to top */}
    <a
      href="#hero"
      aria-label="Back to top"
      className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
    >
        <img
          src={ArrowUp}
          alt="Back to Top"
          className="w-8 h-10 animate-bounce"
        />
    </a>
  </section>
)

export default Links