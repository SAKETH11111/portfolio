import Image from "next/image";
import BrutalistNavigation from "@/components/BrutalistNavigation";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col border-[3px] border-black">
      {/* Brutalist Navigation */}
      <BrutalistNavigation pageColor="about" />
      
      {/* Content Area */}
      <div className="flex flex-1">
        {/* Left Section */}
        <div className="w-[45%] border-r-[3px] border-black flex flex-col">
          {/* Image part */}
          <div
            className="flex-1 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/pfp.jpeg')" }}
          ></div>
        </div>

        {/* Right Section */}
        <div className="w-[55%] bg-[#FFEFF3] flex items-center justify-center p-16">
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