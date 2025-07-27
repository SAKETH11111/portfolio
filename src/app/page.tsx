import Image from "next/image";
import SubstackNavigation from '@/components/SubstackNavigation';

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

      <SubstackNavigation currentPage="home" textColor="text-white" />

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
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