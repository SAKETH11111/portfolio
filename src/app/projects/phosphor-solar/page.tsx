import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Phosphor Solar Research | Rudaiba",
  description: "A comprehensive research investigation into creating more efficient solar panels using phosphor materials. CRF Research project by Rudaiba Tarannum.",
  icons: {
    icon: '/images/png-png-urbanbrush-1733.jpg',
    shortcut: '/images/png-png-urbanbrush-1733.jpg',
    apple: '/images/png-png-urbanbrush-1733.jpg',
  },
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-[#D5CEA5] font-zen-antique text-3xl md:text-4xl mb-6">{title}</h2>
    <div className="space-y-6 text-gray-300 font-spectral text-lg leading-relaxed">
      {children}
    </div>
  </section>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={`mt-6 ${className}`}>
        <h3 className="text-white font-zen-antique text-2xl md:text-3xl mb-4">{title}</h3>
        <div className="space-y-4 text-gray-300 font-spectral leading-relaxed">
            {children}
        </div>
    </div>
);

const InfoBox: React.FC<{ title: string; children: React.ReactNode; variant?: 'blue' | 'green' | 'red' | 'yellow' }> = ({ title, children, variant = 'blue' }) => {
    const variants = {
        blue: 'bg-blue-900/20 border-blue-500/30 text-blue-400',
        green: 'bg-green-900/20 border-green-500/30 text-green-400',
        red: 'bg-red-900/20 border-red-500/30 text-red-400',
        yellow: 'bg-yellow-900/20 border-yellow-500/30 text-yellow-400'
    }
    return (
        <div className={`p-6 rounded-lg border ${variants[variant]}`}>
            <h4 className={`font-zen-antique text-lg mb-3 ${variants[variant].split(' ')[2]}`}>{title}</h4>
            <div className="text-gray-300 font-spectral">{children}</div>
        </div>
    );
};

export default function PhosphorSolarProject() {
  return (
    <div className="min-h-screen bg-[#00011C] text-white">
      <SubstackNavigation currentPage="projects" textColor="text-white" />
      
      <div className="relative w-full h-[40vh] md:h-[50vh] mt-16">
        <Image 
          src="/images/hero-background.png"
          alt="Phosphor Solar Research"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="px-8 md:px-16 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-yellow-600 text-white px-3 py-1 text-sm font-spectral rounded">
                Solar Technology
              </span>
              <span className="bg-[#D5CEA5] text-black px-3 py-1 text-sm font-spectral rounded">
                CRF Research
              </span>
            </div>
            <h1 
              className="text-[#D5CEA5] font-zen-antique leading-tight mb-2"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
            >
              Can Phosphor Materials Be Utilized to Create More Efficient Solar Panels?
            </h1>
            <p className="text-gray-300 font-spectral text-lg mt-2">
              2025 • Rudaiba Tarannum
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-16 py-12">
        <div className="max-w-4xl mx-auto">
          
          <Section title="Research Overview">
            <p>This research explores the potential of phosphor materials to address critical limitations in solar panel efficiency, specifically concerning light absorption and energy conversion. By investigating spectral upconversion, this study aims to provide a viable pathway to enhance photovoltaic performance.</p>
            <InfoBox title="Hypothesis" variant="blue">
              <p>Solar panels coated with a phosphor-TiO₂ mixture will demonstrate a measurable increase in power output compared to uncoated panels, attributable to spectral upconversion.</p>
            </InfoBox>
          </Section>

          <Section title="Methodology">
            <SubSection title="Scientific Approach">
              <p>Due to accessibility issues with more specialized phosphor materials, this research utilized readily available alternatives to conduct the investigation. The core methodology involved formulating a coating, applying it to solar panels, and conducting a controlled experiment to measure efficiency gains.</p>
            </SubSection>
            <div className="grid md:grid-cols-2 gap-8 my-8">
                <InfoBox title="Coating Formulation" variant="green">
                  <p>A mixture of Strontium Aluminate (UV reactive pigment powder) and Titanium Dioxide (TiO₂) powder was created in varying ratios to form thin, consistent layers for application on mini solar panels.</p>
                </InfoBox>
                <InfoBox title="Experimental Design" variant="green">
                    <p>A controlled experiment was set up with both coated and uncoated panels. A stable light source was used to ensure consistent illumination, and data for voltage (Voc), current (Isc), and power output were collected and analyzed using R software.</p>
                </InfoBox>
            </div>
          </Section>

          <Section title="Data & Analysis Findings">
              <SubSection title="Data Inventory & Cleaning">
                  <p>The research relied on two primary datasets due to the niche nature of the field: a comprehensive dataset on spectral converters (LSC_KPI2023) and an optical property dataset of inorganic phosphors (IPOP-dataset). Data cleaning was performed in R using `readxl` and `dplyr` to prepare the data for analysis, which involved separating devices into phosphor-doped and non-doped categories.</p>
              </SubSection>

              <SubSection title="Analysis of Top-Performing Phosphors">
                  <p>An analysis was conducted to identify the top 10 phosphors across three key metrics: T50 (Lifespan), EQE (External Quantum Efficiency), and IQE (Internal Quantum Efficiency). The analysis revealed no single phosphor that ranked in the top 10 across all three categories, or even in two of the three. However, expanding the analysis to the top 20 revealed five key overlaps:</p>
                  <InfoBox title="Key Overlaps in Top 20" variant="yellow">
                      <ul className="list-disc pl-5 space-y-2">
                          <li><strong>T50 & IQE Overlap:</strong> Found robust candidates like &ldquo;Rb2PO8MoEu1&rdquo; and &ldquo;Ba3P2O8Eu1&rdquo; that are ideal for high-durability applications.</li>
                          <li><strong>T50 & EQE Overlap:</strong> Identified &ldquo;KMg4P3O12Li0.025Eu0.02&rdquo; as a rare candidate with excellent overall light emission, making it a strong contender for applications valuing brightness.</li>
                          <li><strong>IQE & EQE Overlap:</strong> No overlap found.</li>
                      </ul>
                  </InfoBox>
              </SubSection>
          </Section>

          <Section title="Results & Conclusion">
            <p>The statistical analysis of 16 experiments from diverse devices shows that, on average, phosphor integration increased Power Conversion Efficiency (PCE) by <strong>2.12% absolute</strong>, corresponding to a <strong>21% relative gain</strong>. The paired t-test confirmed a significant positive effect (p ≪ 0.01) with a large practical impact (Cohen’s d = 1.44).</p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
                 <InfoBox title="Avg. Improvement" variant="green"><p className="text-3xl">2.12%</p></InfoBox>
                 <InfoBox title="Relative Gain" variant="green"><p className="text-3xl">21%</p></InfoBox>
                 <InfoBox title="Effect Size" variant="green"><p className="text-3xl">1.44</p></InfoBox>
            </div>
             <SubSection title="Final Conclusion">
                <p>Silicate-based downshifting phosphors produced the largest enhancements, while upconversion phosphors offered more modest improvements. While gains vary, the statistical evidence overwhelmingly supports the hypothesis that phosphor materials enhance photovoltaic performance. This research provides a data-driven foundation for future explorations into this promising field of study.</p>
             </SubSection>
          </Section>
          
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