import Image from "next/image";
import SubstackNavigation from '@/components/SubstackNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About - Rudaiba",
  description: "Learn more about Rudaiba",
  icons: {
    icon: '/images/png-png-urbanbrush-1733.jpg',
    shortcut: '/images/png-png-urbanbrush-1733.jpg',
    apple: '/images/png-png-urbanbrush-1733.jpg',
  },
};

export default function About() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Background fill above navbar */}
      <div className="fixed top-0 left-0 right-0 h-20 z-40" style={{ backgroundColor: '#EFFDFA' }} />
      
      <SubstackNavigation currentPage="about" />

      {/* Content Area - starts right below navbar */}
      <div className="flex flex-1 pt-20 h-full">
        {/* Left Section */}
        <div className="w-[35%] border-r border-gray-200 flex flex-col h-full">
          {/* Image part - fill entire rectangle */}
          <div className="flex-1 relative">
            <Image
              src="/images/pfp.jpeg"
              alt="Rudaiba"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[65%] flex items-center justify-center h-full" style={{ backgroundColor: '#EFFDFA' }}>
          <div className="w-full px-8 md:px-16 py-4 mt-32">
            {/* Subtitle */}
            <p className="text-black font-spectral text-sm md:text-base mb-2 md:mb-3">
              A thread of thought, pulled gently into form
            </p>

            {/* Main heading */}
            <h2 className="text-black font-zen-antique font-normal mb-3 md:mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Greetings from Rudaiba!
            </h2>

            {/* Body text */}
            <p className="text-black font-spectral leading-relaxed mb-3 md:mb-4" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
              I&apos;m a student from Bangladesh, and I really like cool things. From building a plutonium bomb to working on Savant syndrome or artificially recreating Savant syndrome - I like everything that&apos;s cool. I always have something weird going on in the back of my mind which sometimes doesn&apos;t even let me sleep. I love playing piano, working on creative things like art or sewing in my free time, or just binge-watching anime or Rotten Mango crime documentaries. There&apos;s always something strange floating around in my head, and honestly, that&apos;s just how I like it.
            </p>

            {/* Divider line */}
            <div className="w-32 h-[3px] bg-black mb-4 md:mb-6"></div>
            
            {/* Thank you text */}
            <p className="text-black font-spectral text-lg md:text-xl">
              Thank you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}