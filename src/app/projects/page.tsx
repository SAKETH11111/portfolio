'use client';

import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';
import { useState } from 'react';
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

  const [currentMiddleIndex, setCurrentMiddleIndex] = useState(1);

  const handleRightArrow = () => {
    setCurrentMiddleIndex((prev) => (prev + 1) % projects.length);
  };

  const handleLeftArrow = () => {
    setCurrentMiddleIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Get the three visible cards based on current middle index
  const getVisibleCards = () => {
    const leftIndex = (currentMiddleIndex - 1 + projects.length) % projects.length;
    const rightIndex = (currentMiddleIndex + 1) % projects.length;
    
    return [
      { ...projects[leftIndex], position: 'left' },
      { ...projects[currentMiddleIndex], position: 'middle' },
      { ...projects[rightIndex], position: 'right' }
    ];
  };

  return (
    <div className="min-h-screen bg-[#00011C] flex flex-col">
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
        <div className="relative flex items-center justify-center w-full max-w-[1800px]">
          {/* Left Arrow */}
          <button
            onClick={handleLeftArrow}
            className="absolute left-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft size={32} className="text-white" />
          </button>

          {/* Cards Container */}
          <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center justify-center">
            {getVisibleCards().map((project, index) => {
              const isMiddle = project.position === 'middle';
              return (
                <div
                  key={`${project.id}-${currentMiddleIndex}`}
                  className={`bg-white border-4 border-white flex flex-col transition-all duration-700 ease-in-out ${
                    isMiddle ? 'scale-110 z-10 shadow-2xl' : 'scale-100'
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
            className="absolute right-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight size={32} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}