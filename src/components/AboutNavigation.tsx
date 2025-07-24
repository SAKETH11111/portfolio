import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AboutNavigationProps {
  currentPage?: string;
}

export default function AboutNavigation({ currentPage = 'about' }: AboutNavigationProps) {
  return (
    <div className="fixed w-full top-0 z-50 bg-white border-b-[3px] border-black">
      {/* Navigation Bar */}
      <div className="h-16 px-4 flex items-center justify-center relative overflow-x-auto">
        <div className="flex items-center">
          <div className="flex whitespace-nowrap">
            <Link 
              href="/" 
              className={`px-4 py-3 text-lg font-medium transition-colors border-b-2 mr-6 ${
                currentPage === 'home' 
                  ? 'text-black border-black font-bold' 
                  : 'text-gray-600 border-transparent hover:text-black hover:border-gray-400'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`px-4 py-3 text-lg font-medium transition-colors border-b-2 mr-6 ${
                currentPage === 'blog' 
                  ? 'text-black border-black font-bold' 
                  : 'text-gray-600 border-transparent hover:text-black hover:border-gray-400'
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/projects" 
              className={`px-4 py-3 text-lg font-medium transition-colors border-b-2 mr-6 ${
                currentPage === 'projects' 
                  ? 'text-black border-black font-bold' 
                  : 'text-gray-600 border-transparent hover:text-black hover:border-gray-400'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-3 text-lg font-medium transition-colors border-b-2 mr-6 ${
                currentPage === 'about' 
                  ? 'text-black border-black font-bold' 
                  : 'text-gray-600 border-transparent hover:text-black hover:border-gray-400'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-3 text-lg font-medium transition-colors border-b-2 ${
                currentPage === 'contact' 
                  ? 'text-black border-black font-bold' 
                  : 'text-gray-600 border-transparent hover:text-black hover:border-gray-400'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        
        {/* Left scroll button */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:hidden">
          <button className="p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
        </div>
        
        {/* Right scroll button */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:hidden">
          <button className="p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}