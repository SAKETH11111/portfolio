import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Microsoft Winter Spring Challenge - Data Center Cooling | Rudaiba",
  description: "Phase Change Materials for improving energy efficiency in Microsoft data centers - Winter Spring Challenge project by Rudaiba",
  icons: {
    icon: '/images/png-png-urbanbrush-1733.jpg',
    shortcut: '/images/png-png-urbanbrush-1733.jpg',
    apple: '/images/png-png-urbanbrush-1733.jpg',
  },
};

export default function MicrosoftPCMProject() {
  return (
    <div className="h-screen bg-[#00011C] text-white overflow-hidden">
      <SubstackNavigation currentPage="projects" textColor="text-white" />
      
      {/* Main Content - Single Screen Layout */}
      <div className="h-full pt-16 px-8 md:px-16 pb-8">
        <div className="h-full flex flex-col">
          
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="bg-blue-600 text-white px-2 py-1 text-xs font-spectral rounded">
                Energy Efficiency
              </span>
              <span className="bg-[#D5CEA5] text-black px-2 py-1 text-xs font-spectral rounded">
                TKS Challenge
              </span>
              <span className="text-gray-400 font-spectral text-sm">2024</span>
            </div>
            <h1
              className="text-[#D5CEA5] font-zen-antique leading-tight mb-2"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              Microsoft Winter Spring Challenge
            </h1>
            <p className="text-white font-spectral text-lg md:text-xl mb-2">
              Data Center Cooling Solution
            </p>
            <p className="text-gray-300 font-spectral text-sm">
              Revolutionizing Data Center Cooling
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
            
            {/* Left Column - Problem & Solution */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col">
              <h3 className="text-[#D5CEA5] font-zen-antique text-lg mb-3">
                The Solution
              </h3>
              <p className="text-gray-300 font-spectral text-sm mb-4">
                Retrofit existing server racks with Phase Change Material (PCM) panels to improve Microsoft&apos;s data center energy efficiency. Simple, passive solution requiring no additional power or software changes.
              </p>
              
              <div className="space-y-2 mb-4 flex-1">
                <div className="bg-red-900/20 p-2 rounded border border-red-500/30">
                  <h4 className="text-red-400 font-spectral font-bold text-xs mb-1">Problems Addressed</h4>
                  <ul className="text-gray-300 font-spectral text-xs space-y-1">
                    <li>• Thermal variability from AI workloads</li>
                    <li>• 30% system oversizing for worst-case</li>
                    <li>• Lack of thermal buffering capability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle Column - How It Works & Impact */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col">
              <h3 className="text-[#D5CEA5] font-zen-antique text-lg mb-3">
                How PCM Works
              </h3>
              
              <div className="space-y-3 mb-4">
                <div className="bg-blue-900/20 p-3 rounded border border-blue-500/30">
                  <h4 className="text-blue-400 font-spectral font-bold text-sm mb-1">1. Heat Absorption</h4>
                  <p className="text-gray-300 font-spectral text-xs">
                    PCM melts at 25-30°C, absorbing excess heat and stabilizing server temperature.
                  </p>
                </div>
                <div className="bg-green-900/20 p-3 rounded border border-green-500/30">
                  <h4 className="text-green-400 font-spectral font-bold text-sm mb-1">2. Cooling & Release</h4>
                  <p className="text-gray-300 font-spectral text-xs">
                    When load decreases, PCM solidifies and releases stored energy, flattening demand curve.
                  </p>
                </div>
              </div>

              <h4 className="text-[#D5CEA5] font-zen-antique text-base mb-2">Key Benefits</h4>
              <div className="grid grid-cols-2 gap-2 flex-1">
                <div className="text-center bg-green-900/20 p-2 rounded">
                  <div className="text-sm font-zen-antique text-green-400">30%</div>
                  <div className="text-xs text-gray-300 font-spectral">Energy Reduction</div>
                </div>
                <div className="text-center bg-green-900/20 p-2 rounded">
                  <div className="text-sm font-zen-antique text-green-400">6.2mo</div>
                  <div className="text-xs text-gray-300 font-spectral">Payback Period</div>
                </div>
              </div>
            </div>

            {/* Right Column - Financial Analysis */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col">
              <h3 className="text-[#D5CEA5] font-zen-antique text-lg mb-3">
                Financial Impact
              </h3>
              
              <div className="space-y-2 mb-4">
                <h4 className="text-white font-spectral font-bold text-sm">Per Data Center</h4>
                <div className="flex justify-between">
                  <span className="text-gray-300 font-spectral text-xs">Initial Investment:</span>
                  <span className="text-blue-400 font-spectral text-xs font-bold">$5.6M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300 font-spectral text-xs">Annual Savings:</span>
                  <span className="text-green-400 font-spectral text-xs font-bold">$10.92M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300 font-spectral text-xs">First-year ROI:</span>
                  <span className="text-green-400 font-spectral text-xs font-bold">95%</span>
                </div>
              </div>

              <h4 className="text-[#D5CEA5] font-zen-antique text-base mb-2">Global Impact</h4>
              <div className="space-y-2 flex-1">
                <div className="bg-green-900/20 p-2 rounded">
                  <div className="text-center">
                    <div className="text-lg font-zen-antique text-green-400">$3.3B</div>
                    <div className="text-xs text-gray-300 font-spectral">Annual Savings</div>
                  </div>
                </div>
                <div className="bg-blue-900/20 p-2 rounded">
                  <div className="text-center">
                    <div className="text-lg font-zen-antique text-blue-400">2.3M</div>
                    <div className="text-xs text-gray-300 font-spectral">Metric tons CO₂ reduced/year</div>
                  </div>
                </div>
              </div>

              <div className="mt-2 text-center">
                <p className="text-gray-300 font-spectral text-xs">15-month implementation timeline</p>
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