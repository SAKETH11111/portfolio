'use client';

import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';
import Link from 'next/link';

export default function MicrosoftPCMProject() {
  return (
    <div className="min-h-screen bg-[#00011C] text-white">
      <SubstackNavigation currentPage="projects" textColor="text-white" />
      
      {/* Banner Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] mt-16">
        <Image 
          src="/images/hero-background.png"
          alt="Microsoft PCM Data Center Cooling"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="px-8 md:px-16 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 text-sm font-spectral rounded">
                Energy Efficiency
              </span>
              <span className="bg-[#D5CEA5] text-black px-3 py-1 text-sm font-spectral rounded">
                TKS Challenge
              </span>
            </div>
            <h1 
              className="text-[#D5CEA5] font-zen-antique leading-tight mb-2"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            >
              Microsoft PCM Challenge
            </h1>
            <p className="text-white font-spectral text-xl md:text-2xl">
              Data Center Cooling Solution
            </p>
            <p className="text-gray-300 font-spectral text-lg mt-2">
              2024 • TKS Innovation Program
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 md:px-16 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Project Overview */}
          <section className="mb-12">
            <h2 className="text-[#D5CEA5] font-zen-antique text-3xl md:text-4xl mb-6">
              Revolutionizing Data Center Cooling
            </h2>
            <p className="text-gray-300 font-spectral text-lg leading-relaxed mb-6">
              A comprehensive solution to improve the energy efficiency of Microsoft&apos;s data centers by implementing Phase Change Materials (PCMs) for cooling. This project addresses the critical challenge of high energy consumption in data centers, where cooling can account for up to 40% of total energy usage.
            </p>
          </section>

          {/* The Problem */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-4">
              The Problem: Inefficient Data Center Cooling
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-zen-antique text-lg mb-3">
                  Thermal Variability
                </h4>
                <p className="text-gray-300 font-spectral text-sm">
                  AI workloads create unpredictable temperature spikes that traditional cooling systems cannot handle efficiently.
                </p>
              </div>
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-zen-antique text-lg mb-3">
                  System Oversizing
                </h4>
                <p className="text-gray-300 font-spectral text-sm">
                  Cooling infrastructure is often oversized by up to 30% to handle worst-case scenarios, leading to wasted energy.
                </p>
              </div>
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-zen-antique text-lg mb-3">
                  Lack of Thermal Buffering
                </h4>
                <p className="text-gray-300 font-spectral text-sm">
                  Current systems react to temperature changes without thermal storage capability, straining power infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              The Solution: PCM Panel Retrofitting
            </h3>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-6">
              <p className="text-gray-300 font-spectral text-lg leading-relaxed">
                Retrofit existing server racks with thin panels containing commercial paraffin PCM. This solution is simple and passive, requiring no additional power, moving parts, or software changes.
              </p>
            </div>
            
            <h4 className="text-[#D5CEA5] font-zen-antique text-xl mb-4">How it Works:</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-spectral font-bold">1</div>
                <div>
                  <h5 className="text-white font-spectral font-bold">Heat Absorption</h5>
                  <p className="text-gray-300 font-spectral">
                    As servers heat up due to intense workloads, the PCM begins to melt at 25-30°C, absorbing excess heat and keeping server temperature stable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-spectral font-bold">2</div>
                <div>
                  <h5 className="text-white font-spectral font-bold">Cooling and Solidification</h5>
                  <p className="text-gray-300 font-spectral">
                    When server load decreases and temperatures drop, the PCM solidifies, gradually releasing stored thermal energy and flattening the cooling demand curve.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact & Benefits */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              Projected Impact and Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                <h4 className="text-green-400 font-zen-antique text-xl mb-2">
                  Financial Impact
                </h4>
                <ul className="space-y-2 text-gray-300 font-spectral">
                  <li>• Over $3.3 billion in annual savings</li>
                  <li>• $10.92 million savings per data center</li>
                  <li>• 6.2 months payback period</li>
                  <li>• 95% first-year ROI</li>
                </ul>
              </div>
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                <h4 className="text-green-400 font-zen-antique text-xl mb-2">
                  Environmental Impact
                </h4>
                <ul className="space-y-2 text-gray-300 font-spectral">
                  <li>• 30% reduction in cooling energy</li>
                  <li>• 2.3 million metric tons CO₂ reduction annually</li>
                  <li>• 10-25% extended equipment lifespan</li>
                  <li>• 3-5 hours emergency thermal buffering</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Financial Analysis */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              Financial Analysis (Per Data Center)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-white/20 bg-white/5">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-[#D5CEA5] font-zen-antique">Component</th>
                    <th className="text-left p-4 text-[#D5CEA5] font-zen-antique">Cost</th>
                  </tr>
                </thead>
                <tbody className="font-spectral">
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">PCM Materials and Panels</td>
                    <td className="p-4 text-gray-300">$2.2M</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Hardware and Installation</td>
                    <td className="p-4 text-gray-300">$2.9M</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Testing</td>
                    <td className="p-4 text-gray-300">$500K</td>
                  </tr>
                  <tr className="border-b border-white/10 bg-blue-900/20">
                    <td className="p-4 text-white font-bold">Total Initial Investment</td>
                    <td className="p-4 text-blue-400 font-bold">$5.6M</td>
                  </tr>
                  <tr className="bg-green-900/20">
                    <td className="p-4 text-white font-bold">Annual Energy Savings</td>
                    <td className="p-4 text-green-400 font-bold">$10.92M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Implementation Plan */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              15-Month Implementation Plan
            </h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-spectral font-bold text-sm">3M</div>
                <div>
                  <h4 className="text-[#D5CEA5] font-spectral font-bold">Pilot Testing</h4>
                  <p className="text-gray-300 font-spectral text-sm">Test PCM panels in controlled lab environment</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-spectral font-bold text-sm">4M</div>
                <div>
                  <h4 className="text-[#D5CEA5] font-spectral font-bold">Manufacturing & Supply Chain</h4>
                  <p className="text-gray-300 font-spectral text-sm">Source materials and establish production partnerships</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-spectral font-bold text-sm">2M</div>
                <div>
                  <h4 className="text-[#D5CEA5] font-spectral font-bold">Initial Data Center Installation</h4>
                  <p className="text-gray-300 font-spectral text-sm">Implement panels in one data center as proof of concept</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-spectral font-bold text-sm">3M</div>
                <div>
                  <h4 className="text-[#D5CEA5] font-spectral font-bold">Performance Evaluation</h4>
                  <p className="text-gray-300 font-spectral text-sm">Collect and analyze performance data to optimize configuration</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-spectral font-bold text-sm">3M</div>
                <div>
                  <h4 className="text-[#D5CEA5] font-spectral font-bold">Full-Scale Rollout</h4>
                  <p className="text-gray-300 font-spectral text-sm">Phased implementation across Microsoft&apos;s global data centers</p>
                </div>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <div className="pt-8 border-t border-white/20">
            <Link 
              href="/projects"
              className="inline-flex items-center text-[#D5CEA5] font-spectral text-lg hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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