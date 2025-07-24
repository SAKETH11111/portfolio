import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsNavigationProps {
  currentPage?: string;
}

export default function ProjectsNavigation({ currentPage = 'projects' }: ProjectsNavigationProps) {
  return (
    <div className="fixed w-full top-0 z-50 bg-[#B3D1E3] border-b-[3px] border-black">
      {/* Navigation Bar */}
      <div className="h-16 px-4 flex items-center justify-center relative overflow-x-auto">
        <div className="flex items-center">
          <div className="flex whitespace-nowrap">
            <Link 
              href="/" 
              className={`px-6 py-3 text-lg font-bold transition-colors border-2 border-black mr-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                currentPage === 'home' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              HOME
            </Link>
            <Link 
              href="/blog" 
              className={`px-6 py-3 text-lg font-bold transition-colors border-2 border-black mr-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                currentPage === 'blog' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              BLOG
            </Link>
            <Link 
              href="/projects" 
              className={`px-6 py-3 text-lg font-bold transition-colors border-2 border-black mr-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                currentPage === 'projects' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              PROJECTS
            </Link>
            <Link 
              href="/about" 
              className={`px-6 py-3 text-lg font-bold transition-colors border-2 border-black mr-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                currentPage === 'about' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              href="/contact" 
              className={`px-6 py-3 text-lg font-bold transition-colors border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                currentPage === 'contact' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              CONTACT
            </Link>
          </div>
        </div>
        
        {/* Left scroll button */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:hidden">
          <button className="p-2 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white">
            <ChevronLeft size={16} />
          </button>
        </div>
        
        {/* Right scroll button */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:hidden">
          <button className="p-2 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}