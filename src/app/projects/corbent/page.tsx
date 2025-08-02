'use client';

import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';
import Link from 'next/link';

export default function CorbentProject() {
  return (
    <div className="min-h-screen bg-[#00011C] text-white">
      <SubstackNavigation currentPage="projects" textColor="text-white" />
      
      {/* Banner Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] mt-16">
        <Image 
          src="/images/hero-background.png"
          alt="Corbent Direct Air Capture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="px-8 md:px-16 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-600 text-white px-3 py-1 text-sm font-spectral rounded">
                Climate Tech
              </span>
              <span className="bg-[#D5CEA5] text-black px-3 py-1 text-sm font-spectral rounded">
                TKS Moonshot
              </span>
            </div>
            <h1 
              className="text-[#D5CEA5] font-zen-antique leading-tight mb-2"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            >
              Corbent
            </h1>
            <p className="text-white font-spectral text-xl md:text-2xl">
              Direct Air Capture Technology
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
              Turning Air into Stone
            </h2>
            <p className="text-gray-300 font-spectral text-lg leading-relaxed mb-6">
              Corbent is developing container-sized &apos;carbon vacuums&apos; that capture CO₂ from the air using 90% less energy than conventional methods. Our breakthrough technology utilizes advanced Metal-Organic Frameworks (MOFs) and an innovative electro-swing process to remove CO₂ with unprecedented efficiency and minimal energy.
            </p>
          </section>

          {/* The Problem */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-4">
              The Carbon Crisis: A Legacy We Must Address
            </h3>
            <p className="text-gray-300 font-spectral text-lg leading-relaxed">
              Centuries of industrial activity have left a staggering burden of over a trillion tons of CO₂ in our atmosphere. This legacy carbon is the primary driver of climate change, threatening ecosystems, economies, and our way of life. Conventional solutions to capture this CO₂ are often too slow, too expensive, or too energy-intensive to make a meaningful impact at the necessary scale.
            </p>
          </section>

          {/* Technology Features */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              Corbent&apos;s Revolution: Efficient, Scalable, Permanent
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h4 className="text-[#D5CEA5] font-zen-antique text-xl mb-3">
                  MOF-Powered Capture
                </h4>
                <p className="text-gray-300 font-spectral">
                  Ultra-efficient Metal-Organic Frameworks act like sponges, selectively capturing CO₂ directly from the air.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h4 className="text-[#D5CEA5] font-zen-antique text-xl mb-3">
                  Electro-Swing Release
                </h4>
                <p className="text-gray-300 font-spectral">
                  A low-energy electric pulse releases captured CO₂, using 90% less energy than traditional methods.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h4 className="text-[#D5CEA5] font-zen-antique text-xl mb-3">
                  Modular & Mineralized
                </h4>
                <p className="text-gray-300 font-spectral">
                  Container-sized modules for scalable deployment, with CO₂ permanently stored as stone in basalt formations.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              Corbent vs. Conventional DAC
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-white/20 bg-white/5">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-[#D5CEA5] font-zen-antique">Metric</th>
                    <th className="text-left p-4 text-[#D5CEA5] font-zen-antique">Corbent</th>
                    <th className="text-left p-4 text-[#D5CEA5] font-zen-antique">Conventional DAC</th>
                  </tr>
                </thead>
                <tbody className="font-spectral">
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Energy Required (per ton CO₂)</td>
                    <td className="p-4 text-green-400">~0.18 MWh (90% less)</td>
                    <td className="p-4 text-gray-300">1.8 - 2.5 MWh</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Cost (per ton CO₂)</td>
                    <td className="p-4 text-green-400">$30 - $50</td>
                    <td className="p-4 text-gray-300">$125 - $335+</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Physical Footprint</td>
                    <td className="p-4 text-green-400">Modular, container-sized</td>
                    <td className="p-4 text-gray-300">Often large industrial plants</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Deployment Flexibility</td>
                    <td className="p-4 text-green-400">High (decentralized, scalable)</td>
                    <td className="p-4 text-gray-300">Lower (centralized, fixed)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Roadmap */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              Our Roadmap to Gigaton Scale
            </h3>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h4 className="text-[#D5CEA5] font-zen-antique text-xl mb-2">
                  Phase 1: R&D & Validation
                </h4>
                <p className="text-gray-300 font-spectral mb-2">Current Focus</p>
                <p className="text-gray-300 font-spectral">
                  Perfecting our MOF chemistry and electro-swing process. Successful pilot module deployment and performance verification.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h4 className="text-[#D5CEA5] font-zen-antique text-xl mb-2">
                  Phase 2: Commercial Scale-Up
                </h4>
                <p className="text-gray-300 font-spectral mb-2">Next 2 Years</p>
                <p className="text-gray-300 font-spectral">
                  Developing manufacturing partnerships and optimizing for mass production. First commercial installations and long-term operational testing.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h4 className="text-[#D5CEA5] font-zen-antique text-xl mb-2">
                  Phase 3: Gigaton Trajectory
                </h4>
                <p className="text-gray-300 font-spectral mb-2">5 Years</p>
                <p className="text-gray-300 font-spectral">
                  Expanding production capacity significantly. Deploying large-scale projects globally to make a tangible impact on atmospheric CO₂ levels.
                </p>
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