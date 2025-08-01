import Image from "next/image";
import SubstackNavigation from '@/components/SubstackNavigation';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background fill above navbar */}
      <div className="fixed top-0 left-0 right-0 h-20 z-40" style={{ backgroundColor: '#EFFDFA' }} />
      
      <SubstackNavigation currentPage="about" />

      {/* Content Area - starts right below navbar */}
      <div className="flex flex-1 pt-20">
        {/* Left Section */}
        <div className="w-[35%] border-r border-gray-200 flex flex-col">
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
        <div className="w-[65%] flex items-center justify-center" style={{ backgroundColor: '#EFFDFA', paddingTop: '25%', paddingBottom: '15%', paddingLeft: '64px', paddingRight: '64px' }}>
          <div className="w-full">
            {/* Subtitle */}
            <p className="text-black font-spectral text-xl mb-4">
              A thread of thought, pulled gently into form
            </p>

            {/* Main heading */}
            <h2 className="text-black font-zen-antique text-6xl font-normal mb-12">
              Greetings from Rudaiba!
            </h2>

            {/* Body text */}
            <p className="text-black font-spectral text-xl leading-relaxed mb-16">
              I&apos;m a student from Bangladesh, and I really like cool things. From building a plutonium bomb to working on Savant syndrome or artificially recreating Savant syndrome - I like everything that&apos;s cool. I always have something weird going on in the back of my mind which sometimes doesn&apos;t even let me sleep. I love playing piano, working on creative things like art or sewing in my free time, or just binge-watching anime or Rotten Mango crime documentaries. There&apos;s always something strange floating around in my head, and honestly, that&apos;s just how I like it.
            </p>

            {/* Divider line */}
            <div className="w-32 h-[3px] bg-black mb-8"></div>
            
            {/* Thank you text */}
            <p className="text-black font-spectral text-xl">
              Thank you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}