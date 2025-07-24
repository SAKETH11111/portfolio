import Image from "next/image";
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col border-[3px] border-black">
      {/* Navigation - Fixed at top like blog page */}
      <div className="fixed w-full top-0 z-50" style={{ backgroundColor: '#EFFDFA' }}>
        {/* Top Bar */}
        <div className="relative h-22 flex items-center justify-between px-2 sm:px-5 py-4">
          {/* Logo Container */}
          <div className="flex-1 flex-shrink-0">
          </div>

          {/* Title Container - Empty for about */}
          <div className="flex-shrink-0 hidden sm:block">
          </div>

          {/* Buttons Container */}
          <div className="flex-1 flex justify-end">
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-b border-gray-200">
          <div className="h-12 px-1 flex items-center justify-center relative overflow-x-auto">
            <div className="flex items-center">
              <div className="flex whitespace-nowrap">
                <Link 
                  href="/" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/blog" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  href="/projects" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Projects
                </Link>
                <Link 
                  href="/about" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-900 border-b-2 border-gray-900 transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Left scroll button */}
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 sm:hidden">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft size={16} className="text-gray-600" />
              </button>
            </div>
            
            {/* Right scroll button */}
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 sm:hidden">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1" style={{ paddingTop: '120px' }}>
        {/* Left Section */}
        <div className="w-[45%] border-r-[3px] border-black flex flex-col">
          {/* Image part */}
          <div
            className="flex-1 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/pfp.jpeg')" }}
          ></div>
        </div>

        {/* Right Section */}
        <div className="w-[55%] flex items-center justify-center p-16" style={{ backgroundColor: '#EFFDFA' }}>
          <div className="max-w-2xl">
            {/* Subtitle */}
            <p className="text-black font-spectral text-lg mb-4">
              A thread of thought, pulled gently into form
            </p>

            {/* Main heading */}
            <h2 className="text-black font-zen-antique text-5xl font-normal mb-12">
              Hey hey, it&apos;s Rudaiba!
            </h2>

            {/* Body text */}
            <p className="text-black font-spectral text-lg leading-relaxed mb-16">
              So like, I really wanna have a para here telling about me, kinda
              like an introduction (DEFINATELY NOT CAUSE i SAW IT ELSE
              WHERE) but anyways, I don&apos;t really know what to write about
              myself so I left it blank hoping y bujji will be kind enough to
              write it later
            </p>

            {/* Divider line */}
            <div className="w-32 h-[3px] bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}