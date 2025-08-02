'use client';

import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 'corbent',
      title: "Corbent",
      subtitle: "Direct Air Capture Technology",
      image: "/images/hero-background.png",
      description: "Container-sized 'carbon vacuums' that capture CO₂ from air using 90% less energy",
      tag: "Climate Tech",
      date: "2025",
      status: "TKS Moonshot"
    },
    {
      id: 'microsoft-pcm',
      title: "Microsoft PCM Challenge",
      subtitle: "Data Center Cooling Solution",
      image: "/images/hero-background.png",
      description: "Phase Change Materials for improving energy efficiency in Microsoft data centers",
      tag: "Energy Efficiency",
      date: "2024",
      status: "TKS Challenge"
    },
    {
      id: 'phosphor-solar',
      title: "Phosphor Solar Research",
      subtitle: "Enhanced Solar Panel Efficiency",
      image: "/images/hero-background.png",
      description: "Research on utilizing phosphor materials to create more efficient solar panels",
      tag: "Solar Technology",
      date: "2024",
      status: "TKS Research"
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
    <div className="h-screen bg-[#00011C] flex flex-col overflow-hidden">
      <SubstackNavigation currentPage="projects" textColor="text-white" />

      {/* Page Title - positioned below navbar */}
      <div className="px-8 md:px-16 pt-20 pb-0">
        <h1
          className="text-[#D5CEA5] font-zen-antique leading-tight"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
        >
          Work History
        </h1>
      </div>

      {/* Projects Container - Carousel with arrows */}
      <div className="flex-1 flex items-center justify-center pt-2 px-4 pb-4">
        <div className="relative flex items-center justify-center w-full max-w-[1400px]">
          {/* Left Arrow */}
          <button
            onClick={handleLeftArrow}
            className="fixed left-4 sm:left-6 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 p-4 hover:scale-110 transition-all duration-300 cursor-pointer"
            disabled={isAnimating}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="white"
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
                  className={`absolute bg-white border-4 border-white flex flex-col transition-all duration-700 ease-in-out cursor-pointer hover:shadow-xl ${
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
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {/* Tag overlay */}
                    <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-sm font-spectral">
                      {project.tag}
                    </div>
                    {/* Status overlay */}
                    <div className="absolute top-4 right-4 bg-[#D5CEA5] text-black px-2 py-1 text-sm font-spectral">
                      {project.status}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 text-center flex flex-col justify-between bg-white flex-1">
                    <div className="mb-4">
                      <div className="text-gray-600 font-spectral text-sm mb-2">
                        {project.date}
                      </div>
                      <h2 className="text-black font-zen-antique mb-3 text-3xl">
                        {project.title}
                      </h2>
                      <p className="text-gray-700 font-spectral text-lg mb-2">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 font-spectral text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-black font-spectral underline hover:text-gray-700 transition-colors text-xl"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleRightArrow}
            className="fixed right-4 sm:right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 p-4 hover:scale-110 transition-all duration-300 cursor-pointer"
            disabled={isAnimating}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="white"
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