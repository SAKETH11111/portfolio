import Image from "next/image";
import SubstackNavigation from '@/components/SubstackNavigation';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background fill above navbar */}
      <div className="fixed top-0 left-0 right-0 h-16 z-40" style={{ backgroundColor: '#EFFDFA' }} />
      
      <SubstackNavigation currentPage="about" />

      {/* Content Area - starts right below navbar */}
      <div className="flex flex-1 mt-16 border-t border-gray-200">
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
        <div className="w-[65%] flex items-center justify-center p-12" style={{ backgroundColor: '#EFFDFA', paddingTop: '20%' }}>
          <div className="max-w-3xl w-full">
            {/* Subtitle */}
            <p className="text-black font-spectral text-lg mb-4">
              A thread of thought, pulled gently into form
            </p>

            {/* Main heading */}
            <h2 className="text-black font-zen-antique text-5xl font-normal mb-12">
              Hey hey, it&apos;s Rudaiba!
            </h2>

            {/* Body text */}
            <p className="text-black font-spectral text-lg leading-relaxed mb-16">
              So like, I really wanna have a para here telling about me, kinda
              like an introduction (DEFINATELY NOT CAUSE i SAW IT ELSE
              WHERE) but anyways, I don&apos;t really know what to write about
              myself so I left it blank hoping y bujji will be kind enough to
              write it later
            </p>

            {/* Divider line */}
            <div className="w-32 h-[3px] bg-black mb-8"></div>
            
            {/* Thank you text */}
            <p className="text-black font-spectral text-lg">
              Thank you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}