import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Corbent - Direct Air Capture Technology | Rudaiba",
  description: "Container-sized 'carbon vacuums' that capture CO₂ from air using 90% less energy - TKS Moonshot project by Rudaiba",
  icons: {
    icon: '/images/png-png-urbanbrush-1733.jpg',
    shortcut: '/images/png-png-urbanbrush-1733.jpg',
    apple: '/images/png-png-urbanbrush-1733.jpg',
  },
};

export default function CorbentProject() {
  return (
    <div className="h-screen bg-[#00011C] text-white overflow-hidden">
      <SubstackNavigation currentPage="projects" textColor="text-white" />
      
      {/* Main Content - Single Screen Layout */}
      <div className="h-full pt-16 px-8 md:px-16 pb-8">
        <div className="h-full flex flex-col">
          
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="bg-green-600 text-white px-2 py-1 text-xs font-spectral rounded">
                Climate Tech
              </span>
              <span className="bg-[#D5CEA5] text-black px-2 py-1 text-xs font-spectral rounded">
                TKS Moonshot
              </span>
              <span className="text-gray-400 font-spectral text-sm">2024</span>
            </div>
            <h1 
              className="text-[#D5CEA5] font-zen-antique leading-tight mb-2"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              Corbent
            </h1>
            <p className="text-white font-spectral text-lg md:text-xl mb-2">
              Direct Air Capture Technology
            </p>
            <p className="text-gray-300 font-spectral text-sm">
              Turning Air into Stone
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
            
            {/* Left Column - Overview & Problem */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col">
              <h3 className="text-[#D5CEA5] font-zen-antique text-lg mb-3">
                The Solution
              </h3>
              <p className="text-gray-300 font-spectral text-sm mb-4 flex-1">
                Corbent is developing container-sized &apos;carbon vacuums&apos; that capture CO₂ from air using 90% less energy than conventional methods. Our breakthrough technology utilizes advanced Metal-Organic Frameworks (MOFs) and electro-swing process.
              </p>
              
              <div className="bg-red-900/20 p-3 rounded border border-red-500/30">
                <h4 className="text-red-400 font-spectral font-bold text-sm mb-1">The Problem</h4>
                <p className="text-gray-300 font-spectral text-xs">
                  Over a trillion tons of CO₂ in our atmosphere. Conventional capture methods are too slow, expensive, or energy-intensive.
                </p>
              </div>
            </div>

            {/* Middle Column - Technology Features */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col">
              <h3 className="text-[#D5CEA5] font-zen-antique text-lg mb-3">
                Technology Features
              </h3>
              
              <div className="space-y-3 mb-4 flex-1">
                <div className="bg-blue-900/20 p-3 rounded border border-blue-500/30">
                  <h4 className="text-blue-400 font-spectral font-bold text-sm mb-1">MOF-Powered Capture</h4>
                  <p className="text-gray-300 font-spectral text-xs">
                    Ultra-efficient Metal-Organic Frameworks selectively capture CO₂ directly from air.
                  </p>
                </div>
                <div className="bg-green-900/20 p-3 rounded border border-green-500/30">
                  <h4 className="text-green-400 font-spectral font-bold text-sm mb-1">Electro-Swing Release</h4>
                  <p className="text-gray-300 font-spectral text-xs">
                    Low-energy electric pulse releases CO₂, using 90% less energy than traditional methods.
                  </p>
                </div>
                <div className="bg-purple-900/20 p-3 rounded border border-purple-500/30">
                  <h4 className="text-purple-400 font-spectral font-bold text-sm mb-1">Modular & Mineralized</h4>
                  <p className="text-gray-300 font-spectral text-xs">
                    Container-sized modules with CO₂ permanently stored as stone in basalt formations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Performance & Roadmap */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col">
              <h3 className="text-[#D5CEA5] font-zen-antique text-lg mb-3">
                Performance vs. Conventional
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-300 font-spectral text-xs">Energy Required:</span>
                  <span className="text-green-400 font-spectral text-xs font-bold">90% less</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300 font-spectral text-xs">Cost per ton:</span>
                  <span className="text-green-400 font-spectral text-xs font-bold">$30-50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300 font-spectral text-xs">vs Conventional:</span>
                  <span className="text-gray-400 font-spectral text-xs">$125-335+</span>
                </div>
              </div>

              <h4 className="text-[#D5CEA5] font-zen-antique text-base mb-2">Roadmap</h4>
              <div className="space-y-2 flex-1">
                <div className="bg-yellow-900/20 p-2 rounded">
                  <h5 className="text-yellow-400 font-spectral font-bold text-xs">Phase 1: R&D</h5>
                  <p className="text-gray-300 font-spectral text-xs">Pilot module deployment</p>
                </div>
                <div className="bg-blue-900/20 p-2 rounded">
                  <h5 className="text-blue-400 font-spectral font-bold text-xs">Phase 2: Scale-Up</h5>
                  <p className="text-gray-300 font-spectral text-xs">Commercial installations</p>
                </div>
                <div className="bg-green-900/20 p-2 rounded">
                  <h5 className="text-green-400 font-spectral font-bold text-xs">Phase 3: Gigaton</h5>
                  <p className="text-gray-300 font-spectral text-xs">Global impact scale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-4 border-t border-white/20 mt-4">
            <Link 
              href="/projects"
              className="inline-flex items-center text-[#D5CEA5] font-spectral text-sm hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}