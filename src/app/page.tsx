import Image from "next/image";
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Artistic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Hero background"
          fill
          sizes="100vw"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.95 
          }}
          draggable={false}
          priority
        />
        <div className="absolute border border-[#effdfa] border-solid inset-0 pointer-events-none" />
      </div>

      {/* Navigation - Fixed at top like blog page */}
      <div className="fixed w-full top-0 z-50">
        {/* Top Bar - Transparent spacing */}
        <div className="relative h-22 flex items-center justify-between px-2 sm:px-5 py-4">
          {/* Logo Container */}
          <div className="flex-1 flex-shrink-0">
          </div>

          {/* Title Container - Empty for home */}
          <div className="flex-shrink-0 hidden sm:block">
          </div>

          {/* Buttons Container */}
          <div className="flex-1 flex justify-end">
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-b border-white/20">
          <div className="h-12 px-1 flex items-center justify-center relative overflow-x-auto">
            <div className="flex items-center">
              <div className="flex whitespace-nowrap">
                <Link 
                  href="/" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-white/90 border-b-2 border-white/80 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/blog" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-white/70 hover:text-white/90 transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  href="/projects" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-white/70 hover:text-white/90 transition-colors"
                >
                  Projects
                </Link>
                <Link 
                  href="/about" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-white/70 hover:text-white/90 transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-white/70 hover:text-white/90 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Left scroll button */}
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 sm:hidden">
              <button className="p-1 hover:bg-white/10 rounded">
                <ChevronLeft size={16} className="text-white/70" />
              </button>
            </div>
            
            {/* Right scroll button */}
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 sm:hidden">
              <button className="p-1 hover:bg-white/10 rounded">
                <ChevronRight size={16} className="text-white/70" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingTop: '120px' }}>
        <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">

          {/* Main Title - Responsive Typography */}
          <h1 className="font-zen-antique font-normal text-center mb-4 sm:mb-6 leading-tight" 
              style={{ 
                color: '#D5CEA5',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontSize: 'clamp(2rem, 8vw, 4.5rem)'
              }}>
            Rudaiba Tarannum
          </h1>

          {/* Subtitle - Responsive Typography */}
          <p className="font-zen-antique font-normal text-center leading-relaxed px-4 sm:px-0"
             style={{
               color: "#FFFEF6",
               textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
               fontSize: 'clamp(1rem, 4vw, 2rem)'
             }}>
            A drifting mind, a blooming world
          </p>
        </div>
      </main>
    </div>
  );
}