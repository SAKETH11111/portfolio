import Image from "next/image";
import BrutalistNavigation from "@/components/BrutalistNavigation";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col border-[3px] border-black">
      {/* Brutalist Navigation */}
      <BrutalistNavigation pageColor="about" />
      
      {/* Header */}
      <div className="w-full h-[100px] bg-[#E8C5C5] border-b-[3px] border-black flex items-center pl-8">
        <h1 className="text-black font-zen-antique text-5xl font-normal">About</h1>
      </div>

      {/* Content Area */}
      <div className="flex flex-1">
        {/* Left Section */}
        <div
          className="w-[45%] border-r-[3px] border-black p-8 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pfp.jpeg')" }}
        >
          {/* Two circles - with a slight background to make them visible against the image */}
          <div className="flex gap-4 mt-5 relative z-10">
            <div className="w-12 h-12 rounded-full border-[3px] border-black bg-white bg-opacity-50"></div>
            <div className="w-12 h-12 rounded-full border-[3px] border-black bg-white bg-opacity-50"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[55%] bg-[#E8C5C5] flex items-center justify-center p-16">
          <div className="max-w-2xl">
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
            <div className="w-32 h-[3px] bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}