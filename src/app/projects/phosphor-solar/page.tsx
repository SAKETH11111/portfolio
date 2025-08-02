import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Phosphor Solar Research - Enhanced Efficiency | Rudaiba",
  description: "Research on utilizing phosphor materials to create more efficient solar panels - CRF Research project by Rudaiba",
  icons: {
    icon: '/images/png-png-urbanbrush-1733.jpg',
    shortcut: '/images/png-png-urbanbrush-1733.jpg',
    apple: '/images/png-png-urbanbrush-1733.jpg',
  },
};

export default function PhosphorSolarProject() {
  return (
    <div className="h-screen bg-[#00011C] text-white overflow-hidden">
      <SubstackNavigation currentPage="projects" textColor="text-white" />
      
      {/* Main Content - Single Screen Layout */}
      <div className="h-full pt-16 px-8 md:px-16 pb-8">
        <div className="h-full flex flex-col">
          
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="bg-yellow-600 text-white px-2 py-1 text-xs font-spectral rounded">
                Solar Technology
              </span>
              <span className="bg-[#D5CEA5] text-black px-2 py-1 text-xs font-spectral rounded">
                CRF Research
              </span>
              <span className="text-gray-400 font-spectral text-sm">2025</span>
            </div>
            <h1 
              className="text-[#D5CEA5] font-zen-antique leading-tight mb-2"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              Phosphor Solar Research
            </h1>
            <p className="text-white font-spectral text-lg md:text-xl">
              Enhanced Solar Panel Efficiency
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
            
            {/* Left Column - Research Overview */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col">
              <h3 className="text-[#D5CEA5] font-zen-antique text-lg mb-3">
                Research Question
              </h3>
              <p className="text-gray-300 font-spectral text-sm mb-4 flex-1">
                Can phosphor materials be utilized to create more efficient solar panels? This study explores using strontium aluminate mixed with titanium dioxide to coat solar panels.
              </p>
              
              <div className="bg-blue-900/20 p-3 rounded border border-blue-500/30">
                <h4 className="text-blue-400 font-spectral font-bold text-sm mb-1">Hypothesis</h4>
                <p className="text-gray-300 font-spectral text-xs">
                  Phosphor-TiO₂ coated panels will show measurable power output increase through spectral upconversion.
                </p>
              </div>
            </div>

            {/* Middle Column - Methodology & Results */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col">
              <h3 className="text-[#D5CEA5] font-zen-antique text-lg mb-3">
                Key Findings
              </h3>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center bg-green-900/20 p-2 rounded">
                  <div className="text-lg font-zen-antique text-green-400">2.12%</div>
                  <div className="text-xs text-gray-300 font-spectral">Avg Improvement</div>
                </div>
                <div className="text-center bg-green-900/20 p-2 rounded">
                  <div className="text-lg font-zen-antique text-green-400">21%</div>
                  <div className="text-xs text-gray-300 font-spectral">Relative Gain</div>
                </div>
                <div className="text-center bg-green-900/20 p-2 rounded">
                  <div className="text-lg font-zen-antique text-green-400">1.44</div>
                  <div className="text-xs text-gray-300 font-spectral">Effect Size</div>
                </div>
              </div>

              <h4 className="text-white font-spectral font-bold text-sm mb-2">Methodology</h4>
              <ul className="text-gray-300 font-spectral text-xs space-y-1 flex-1">
                <li>• Control vs. phosphor-coated solar panels</li>
                <li>• Strontium aluminate + TiO₂ coating</li>
                <li>• Statistical analysis with R software</li>
                <li>• 16 experiments across device types</li>
              </ul>
            </div>

            {/* Right Column - Performance & Timeline */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col">
              <h3 className="text-[#D5CEA5] font-zen-antique text-lg mb-3">
                Performance by Type
              </h3>
              
              <div className="space-y-2 mb-4 flex-1">
                <div className="bg-yellow-900/20 p-2 rounded border border-yellow-500/30">
                  <h4 className="text-yellow-400 font-spectral font-bold text-sm">Silicate-based</h4>
                  <p className="text-gray-300 font-spectral text-xs">~3.11% mean gain (best performance)</p>
                </div>
                <div className="bg-blue-900/20 p-2 rounded border border-blue-500/30">
                  <h4 className="text-blue-400 font-spectral font-bold text-sm">Upconversion</h4>
                  <p className="text-gray-300 font-spectral text-xs">~1.11% improvement</p>
                </div>
                <div className="bg-purple-900/20 p-2 rounded border border-purple-500/30">
                  <h4 className="text-purple-400 font-spectral font-bold text-sm">Long-persistence</h4>
                  <p className="text-gray-300 font-spectral text-xs">~0.98% improvement</p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-white font-spectral font-bold text-sm mb-1">Research Timeline</h4>
                <p className="text-gray-300 font-spectral text-xs">3-month study with statistical significance (p ≈ 1.8 × 10⁻⁵)</p>
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