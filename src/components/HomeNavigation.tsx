import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HomeNavigationProps {
  currentPage?: string;
}

export default function HomeNavigation({ currentPage = 'home' }: HomeNavigationProps) {
  return (
    <div className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      {/* Navigation Bar */}
      <div className="h-16 px-4 flex items-center justify-center relative overflow-x-auto">
        <div className="flex items-center">
          <div className="flex whitespace-nowrap">
            <Link 
              href="/" 
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 mr-4 ${
                currentPage === 'home' 
                  ? 'text-gray-900 border-gray-900' 
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-400'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 mr-4 ${
                currentPage === 'blog' 
                  ? 'text-gray-900 border-gray-900' 
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-400'
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/projects" 
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 mr-4 ${
                currentPage === 'projects' 
                  ? 'text-gray-900 border-gray-900' 
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-400'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 mr-4 ${
                currentPage === 'about' 
                  ? 'text-gray-900 border-gray-900' 
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-400'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                currentPage === 'contact' 
                  ? 'text-gray-900 border-gray-900' 
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-400'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        
        {/* Left scroll button */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:hidden">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
        </div>
        
        {/* Right scroll button */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:hidden">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}