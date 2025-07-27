'use client';

import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      subtitle: "Web Development",
      image: "/images/sewing-room.jpg",
    },
    {
      id: 2,
      title: "Project Beta",
      subtitle: "Mobile App",
      image: "/images/sewing-room.jpg",
    },
    {
      id: 3,
      title: "Project Gamma",
      subtitle: "Data Analysis",
      image: "/images/sewing-room.jpg",
    },
    {
      id: 4,
      title: "Project Delta",
      subtitle: "AI Research",
      image: "/images/sewing-room.jpg",
    },
    {
      id: 5,
      title: "Project Epsilon",
      subtitle: "Design System",
      image: "/images/sewing-room.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleRightArrow = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleLeftArrow = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Get all cards positions
  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + projects.length) % projects.length;
    
    // Determine position based on circular distance
    if (diff === 0) return 'middle';
    if (diff === 1) return 'right';
    if (diff === projects.length - 1) return 'left';
    if (diff === 2) return 'far-right';
    if (diff === projects.length - 2) return 'far-left';
    return 'hidden';
  };

  return (
    <div className="min-h-screen bg-[#00011C] flex flex-col overflow-x-hidden">
      <SubstackNavigation currentPage="projects" textColor="text-white" />

      {/* Page Title - positioned below navbar */}
      <div className="px-8 md:px-16 pt-24 pb-0">
        <h1 
          className="text-[#D5CEA5] font-zen-antique leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          Work History
        </h1>
      </div>

      {/* Projects Container - Carousel with arrows */}
      <div className="flex-1 flex items-center justify-center pt-0 px-4 pb-4">
        <div className="relative flex items-center justify-center w-full max-w-[1400px]">
          {/* Left Arrow */}
          <button
            onClick={handleLeftArrow}
            className="fixed left-4 sm:left-6 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#D5CEA5] hover:bg-white border-4 border-[#D5CEA5] hover:border-white transition-all duration-300 flex items-center justify-center group"
            disabled={isAnimating}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:scale-110 transition-transform"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="relative flex items-center justify-center w-full h-[clamp(400px,60vh,680px)] py-8">
            {projects.map((project, index) => {
              const position = getCardPosition(index);
              
              // Define styles for each position
              const positionStyles: Record<string, string> = {
                'middle': 'translate-x-0 scale-110 z-20 opacity-100',
                'left': '-translate-x-[110%] scale-90 z-10 opacity-100',
                'right': 'translate-x-[110%] scale-90 z-10 opacity-100',
                'far-left': '-translate-x-[230%] scale-75 z-0 opacity-0',
                'far-right': 'translate-x-[230%] scale-75 z-0 opacity-0',
                'hidden': 'translate-x-0 scale-50 z-0 opacity-0'
              };
              
              return (
                <div
                  key={project.id}
                  className={`absolute bg-white border-4 border-white flex flex-col transition-all duration-700 ease-in-out ${
                    positionStyles[position] || positionStyles['hidden']
                  }`}
                  style={{
                    width: 'clamp(280px, 28vw, 520px)',
                    height: 'clamp(400px, 60vh, 680px)',
                  }}
                >
                  {/* Project Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      height: '50%',
                    }}
                  >
                    <Image 
                      src="/images/hero-background.png"
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-8 text-center flex flex-col justify-between bg-white flex-1">
                    <div className="mb-6">
                      <h2 className="text-black font-zen-antique mb-3 text-4xl">
                        {project.title}
                      </h2>
                      <p className="text-gray-700 font-spectral text-xl">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Icon Links */}
                    <div className="flex gap-6 justify-center mb-6">
                      {/* Arrow Icon */}
                      <button className="flex items-center justify-center hover:bg-gray-100 transition-colors w-14 h-14">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M8 8L24 24M24 24V8M24 24H8"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="square"
                          />
                        </svg>
                      </button>

                      {/* Document Icon */}
                      <button className="flex items-center justify-center hover:bg-gray-100 transition-colors w-14 h-14">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <rect
                            x="6"
                            y="6"
                            width="20"
                            height="20"
                            stroke="black"
                            strokeWidth="3"
                            fill="none"
                          />
                          <rect x="10" y="12" width="12" height="2.5" fill="black" />
                          <rect x="10" y="17" width="12" height="2.5" fill="black" />
                        </svg>
                      </button>

                      {/* Menu Icon */}
                      <button className="flex items-center justify-center hover:bg-gray-100 transition-colors w-14 h-14">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <rect x="6" y="8" width="20" height="3" fill="black" />
                          <rect x="6" y="14.5" width="20" height="3" fill="black" />
                          <rect x="6" y="21" width="20" height="3" fill="black" />
                        </svg>
                      </button>
                    </div>

                    {/* Read More Link */}
                    <a
                      href="#"
                      className="text-black font-spectral underline hover:text-gray-700 transition-colors text-xl"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleRightArrow}
            className="fixed right-4 sm:right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#D5CEA5] hover:bg-white border-4 border-[#D5CEA5] hover:border-white transition-all duration-300 flex items-center justify-center group"
            disabled={isAnimating}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:scale-110 transition-transform"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}