export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col border-[3px] border-black">
      {/* Header */}
      <div className="w-full h-[100px] bg-[#B3D1E3] border-b-[3px] border-black flex items-center pl-8">
        <h1 className="text-white font-zen-antique text-5xl font-normal">Projects</h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#B3D1E3] p-16">
        {/* Main Heading */}
        <h2 className="text-white text-6xl font-zen-antique text-center mb-16">
          Work, work, work!
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Project Card 1 */}
          <div className="border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Browser Header */}
            <div className="h-12 bg-[#7FA8C4] border-b-[3px] border-black flex items-center px-4 gap-3">
              <div className="w-5 h-5 rounded-full border-[2px] border-black bg-white"></div>
              <div className="w-5 h-5 rounded-full border-[2px] border-black bg-white"></div>
            </div>
            
            {/* Content Area */}
            <div className="bg-[#D9D9D9] h-64"></div>
            
            {/* Footer */}
            <div className="bg-[#7FA8C4] border-t-[3px] border-black p-6">
              <h3 className="text-white font-zen-antique text-3xl mb-3">Title</h3>
              <p className="text-white font-spectral text-lg mb-6 leading-relaxed">
                basically here you add some explanation of what it 
                is, again, I do the good stuff, you do the boring 
                stuff, hehe! so yeah!
              </p>
              <button className="bg-[#8FA9B9] text-white px-6 py-2 font-system text-base border-[2px] border-black hover:bg-[#7A94A4] transition-colors">
                View more
              </button>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Browser Header */}
            <div className="h-12 bg-[#7FA8C4] border-b-[3px] border-black flex items-center px-4 gap-3">
              <div className="w-5 h-5 rounded-full border-[2px] border-black bg-white"></div>
              <div className="w-5 h-5 rounded-full border-[2px] border-black bg-white"></div>
            </div>
            
            {/* Content Area */}
            <div className="bg-[#D9D9D9] h-64"></div>
            
            {/* Footer */}
            <div className="bg-[#7FA8C4] border-t-[3px] border-black p-6">
              <h3 className="text-white font-zen-antique text-3xl mb-3">Title</h3>
              <p className="text-white font-spectral text-lg mb-6 leading-relaxed">
                basically here you add some explanation of what it 
                is, again, I do the good stuff, you do the boring 
                stuff, hehe! so yeah!
              </p>
              <button className="bg-[#8FA9B9] text-white px-6 py-2 font-system text-base border-[2px] border-black hover:bg-[#7A94A4] transition-colors">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}