import GlassNavigation from "../components/GlassNavigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Artistic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          style={{ opacity: 0.95 }}
          draggable={false}
          priority
        />
        <div className="absolute border border-[#effdfa] border-solid inset-0 pointer-events-none" />
      </div>

      {/* Glass Navigation Component */}
      <GlassNavigation />

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-0">
        <div className="text-center max-w-4xl mx-auto">
          {/* Small indicator/badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
            <span className="text-white/80 text-sm font-medium">Rudaiba Tarannum</span>
          </div>

          {/* Main Title */}
          <div style={{width: '100%', height: '100%', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#D5CEA5', fontSize: 69, fontFamily: 'Zen Antique Soft', fontWeight: '400', wordWrap: 'break-word'}}>Rudaiba Tarannum</div>

          {/* Subtitle */}
          <p
            className="font-normal text-center"
            style={{
              fontFamily: "'Zen Antique Soft', serif",
              fontSize: 30,
              lineHeight: "1.4",
              color: "#FFFEF6",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            A drifting mind, a blooming world
          </p>
        </div>
      </main>
    </div>
  );
}