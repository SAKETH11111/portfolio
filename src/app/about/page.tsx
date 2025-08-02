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
        <div className="w-[65%] flex flex-col h-full" style={{ backgroundColor: '#EFFDFA' }}>
          {/* Empty space at top - 35% */}
          <div className="h-[35%]"></div>
          
          {/* Text content at bottom with 64px padding */}
          <div className="flex-1 flex flex-col justify-end pb-16">
            <div className="px-16">
              {/* Subtitle */}
              <p className="text-black font-spectral text-sm md:text-base mb-2 md:mb-3">
                A thread of thought, pulled gently into form
              </p>

              {/* Main heading */}
              <h2 className="text-black font-zen-antique font-normal mb-3 md:mb-4" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                Greetings from Rudaiba!
              </h2>

              {/* Body text */}
              <p className="text-black font-spectral leading-relaxed mb-3 md:mb-4" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
                Hey there! I&apos;m a student from Bangladesh, and I really like cool things. From building a plutonium bomb to working on artificially recreating Savant syndrome - I like everything that&apos;s cool. So, as you may have guessed, I always have something weird going on in the back of my mind. I&apos;m not just a dreamer though, I&apos;m also a designer. Not just any designer either, I&apos;m a designer who designs her own dreams and sews them into reality. Other than that, I also love playing piano, sketching, writing, or just binge-watching anime and crime documentaries in my free time. Since childhood, learning new things and connecting them to different challenges has always fascinated me. So, if you got a thought in mind, don&apos;t forget to leave a text!
              </p>

              {/* Divider line */}
              <div className="w-32 h-[3px] bg-black mb-4 md:mb-6"></div>
              
              {/* Thank you text */}
              <p className="text-black font-spectral text-sm md:text-base">
                Thank you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}