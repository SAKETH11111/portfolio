export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Title",
      subtitle: "Project Resources",
      image: "/images/sewing-room.jpg",
    },
    {
      id: 2,
      title: "Title", 
      subtitle: "Project Resources",
      image: "/images/sewing-room.jpg",
    },
    {
      id: 3,
      title: "Title",
      subtitle: "Project Resources", 
      image: "/images/sewing-room.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#00011C] flex flex-col">
      {/* Page Title - Space for navbar */}
      <div className="pt-24 pb-8 px-4 md:px-8">
        <h1 className="text-[#D5CEA5] font-zen-antique text-8xl md:text-9xl lg:text-[12rem]">
          Work History
        </h1>
      </div>

      {/* Projects Container - Fill remaining space and center properly */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="flex gap-8 items-center justify-center w-full max-w-[1600px]">
          {projects.map((project, index) => {
            const isMiddle = index === 1;
            return (
              <div
                key={project.id}
                className={`bg-white border-4 border-black flex flex-col transition-all duration-500 ${
                  isMiddle ? 'scale-110 z-10 shadow-2xl' : 'scale-100'
                }`}
                style={{
                  width: '420px',
                  height: '600px',
                }}
              >
                {/* Project Image */}
                <div 
                  className="bg-gray-300 relative overflow-hidden"
                  style={{
                    height: '350px',
                  }}
                >
                  {/* Placeholder for sewing room image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-700 text-xl font-medium">
                    [Sewing Room Image]
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 text-center flex flex-col justify-between bg-white flex-1">
                  <div className="mb-6">
                    <h2 className="text-black font-zen-antique mb-3 text-4xl">
                      {project.title}
                    </h2>
                    <p className="text-gray-700 font-spectral text-xl">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Icon Links */}
                  <div className="flex gap-6 justify-center mb-6">
                    {/* Arrow Icon */}
                    <button className="flex items-center justify-center hover:bg-gray-100 transition-colors w-14 h-14">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M8 8L24 24M24 24V8M24 24H8"
                          stroke="black"
                          strokeWidth="3"
                          strokeLinecap="square"
                        />
                      </svg>
                    </button>

                    {/* Document Icon */}
                    <button className="flex items-center justify-center hover:bg-gray-100 transition-colors w-14 h-14">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <rect
                          x="6"
                          y="6"
                          width="20"
                          height="20"
                          stroke="black"
                          strokeWidth="3"
                          fill="none"
                        />
                        <rect x="10" y="12" width="12" height="2.5" fill="black" />
                        <rect x="10" y="17" width="12" height="2.5" fill="black" />
                      </svg>
                    </button>

                    {/* Menu Icon */}
                    <button className="flex items-center justify-center hover:bg-gray-100 transition-colors w-14 h-14">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <rect x="6" y="8" width="20" height="3" fill="black" />
                        <rect x="6" y="14.5" width="20" height="3" fill="black" />
                        <rect x="6" y="21" width="20" height="3" fill="black" />
                      </svg>
                    </button>
                  </div>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="text-black font-spectral underline hover:text-gray-700 transition-colors text-xl"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}