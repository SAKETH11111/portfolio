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
              2025 • TKS Innovation Program
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
              Corbent is developing container-sized &ldquo;carbon vacuums&rdquo; that capture CO₂ directly from the air using 90% less energy than conventional direct air capture methods. Our breakthrough technology combines advanced Metal-Organic Frameworks (MOFs) with an innovative electro-swing adsorption process to make large-scale atmospheric carbon removal economically viable.
            </p>
          </section>

          {/* The Problem */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-4">
              The Climate Crisis Challenge
            </h3>
            <p className="text-gray-300 font-spectral text-lg leading-relaxed mb-6">
              We have over a trillion tons of excess CO₂ in our atmosphere, and emissions continue to rise. Even with aggressive emission reductions, we need to actively remove CO₂ from the air to prevent catastrophic climate change. Current direct air capture technologies are either too slow, too expensive, or require too much energy to scale effectively.
            </p>
            <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
              <h4 className="text-red-400 font-zen-antique text-lg mb-3">
                Current DAC Limitations
              </h4>
              <ul className="text-gray-300 font-spectral space-y-2">
                <li>• High energy requirements (1,500-2,000 kWh per ton CO₂)</li>
                <li>• Expensive infrastructure and operating costs ($125-335+ per ton)</li>
                <li>• Limited scalability due to energy and cost constraints</li>
                <li>• Slow deployment and small capture volumes</li>
              </ul>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              Our Revolutionary Approach
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-400 font-zen-antique text-xl mb-3">
                  MOF-Powered Capture
                </h4>
                <p className="text-gray-300 font-spectral">
                  Our specially designed Metal-Organic Frameworks have an incredibly high surface area and selectivity for CO₂ molecules. These crystalline materials can capture CO₂ directly from ambient air with unprecedented efficiency.
                </p>
              </div>
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                <h4 className="text-green-400 font-zen-antique text-xl mb-3">
                  Electro-Swing Release
                </h4>
                <p className="text-gray-300 font-spectral">
                  Instead of using heat to release captured CO₂, our electro-swing process uses a low-energy electric pulse. This innovation reduces energy consumption by 90% compared to traditional thermal swing methods.
                </p>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="text-[#D5CEA5] font-zen-antique text-xl mb-4">
                Container-Sized Deployment
              </h4>
              <p className="text-gray-300 font-spectral text-lg leading-relaxed">
                Each Corbent module is the size of a shipping container, making it easy to transport and deploy anywhere. Multiple modules can be connected to scale capacity. The captured CO₂ is then permanently stored through mineralization in basalt rock formations, turning it literally into stone.
              </p>
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              Performance Advantages
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30 text-center">
                <div className="text-3xl font-zen-antique text-green-400 mb-2">90%</div>
                <div className="text-[#D5CEA5] font-spectral font-bold mb-2">Less Energy</div>
                <div className="text-gray-300 font-spectral text-sm">vs. conventional thermal DAC</div>
              </div>
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30 text-center">
                <div className="text-3xl font-zen-antique text-green-400 mb-2">$30-50</div>
                <div className="text-[#D5CEA5] font-spectral font-bold mb-2">Cost per Ton</div>
                <div className="text-gray-300 font-spectral text-sm">vs. $125-335+ conventional</div>
              </div>
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30 text-center">
                <div className="text-3xl font-zen-antique text-green-400 mb-2">24/7</div>
                <div className="text-[#D5CEA5] font-spectral font-bold mb-2">Operation</div>
                <div className="text-gray-300 font-spectral text-sm">Continuous capture cycle</div>
              </div>
            </div>
          </section>

          {/* Market Impact */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              Market Impact & Scalability
            </h3>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-6">
              <p className="text-gray-300 font-spectral text-lg leading-relaxed">
                The global carbon removal market is projected to reach $1.9 trillion by 2050. Corbent&apos;s technology makes large-scale deployment economically feasible for the first time, opening up massive opportunities in carbon credits, corporate sustainability programs, and government climate initiatives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-400 font-spectral font-bold">Target Markets</h4>
                <ul className="text-gray-300 font-spectral text-sm space-y-1 mt-2">
                  <li>• Carbon credit generation</li>
                  <li>• Corporate net-zero initiatives</li>
                  <li>• Government climate programs</li>
                  <li>• Industrial CO₂ utilization</li>
                </ul>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                <h4 className="text-purple-400 font-spectral font-bold">Deployment Strategy</h4>
                <ul className="text-gray-300 font-spectral text-sm space-y-1 mt-2">
                  <li>• Modular, scalable installations</li>
                  <li>• Strategic placement near storage sites</li>
                  <li>• Partnership with utilities & industrials</li>
                  <li>• Global expansion framework</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Development Timeline */}
          <section className="mb-12">
            <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-6">
              Development Roadmap
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-spectral font-bold">1Y</div>
                <div className="flex-1">
                  <h4 className="text-[#D5CEA5] font-zen-antique text-lg mb-2">Proof of Concept & Pilot</h4>
                  <p className="text-gray-300 font-spectral">
                    Complete laboratory testing of MOF materials and electro-swing process. Deploy first pilot module with industrial partner to validate performance metrics in real-world conditions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-spectral font-bold">3Y</div>
                <div className="flex-1">
                  <h4 className="text-[#D5CEA5] font-zen-antique text-lg mb-2">Commercial Scale-Up</h4>
                  <p className="text-gray-300 font-spectral">
                    Manufacturing partnerships for module production. Deployment of first commercial installations capturing thousands of tons per year. Establish carbon storage partnerships.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-spectral font-bold">5Y</div>
                <div className="flex-1">
                  <h4 className="text-[#D5CEA5] font-zen-antique text-lg mb-2">Global Expansion</h4>
                  <p className="text-gray-300 font-spectral">
                    Expanding production capacity significantly. Deploying large-scale projects globally to make a tangible impact on atmospheric CO₂ levels.
                  </p>
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