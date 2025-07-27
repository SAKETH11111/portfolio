import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SubstackNavigationProps {
  currentPage?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function SubstackNavigation({ currentPage = 'home', backgroundColor = 'transparent', textColor = 'text-gray-600' }: SubstackNavigationProps) {
  return (
    <div className="fixed w-full top-8 z-50" style={{ backgroundColor }}>
      {/* Navigation Bar */}
      <div className="border-t border-b border-gray-200">
        <div className="h-12 px-1 flex items-center justify-center relative overflow-x-auto">
          <div className="flex items-center">
            <div className="flex whitespace-nowrap">
              <Link 
                href="/" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'home' 
                    ? `${textColor === 'text-white' ? 'text-white border-b-2 border-white' : 'text-gray-900 border-b-2 border-gray-900'}` 
                    : `${textColor === 'text-white' ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'blog' 
                    ? `${textColor === 'text-white' ? 'text-white border-b-2 border-white' : 'text-gray-900 border-b-2 border-gray-900'}` 
                    : `${textColor === 'text-white' ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                Blog
              </Link>
              <Link 
                href="/projects" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'projects' 
                    ? `${textColor === 'text-white' ? 'text-white border-b-2 border-white' : 'text-gray-900 border-b-2 border-gray-900'}` 
                    : `${textColor === 'text-white' ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/about" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'about' 
                    ? `${textColor === 'text-white' ? 'text-white border-b-2 border-white' : 'text-gray-900 border-b-2 border-gray-900'}` 
                    : `${textColor === 'text-white' ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'contact' 
                    ? `${textColor === 'text-white' ? 'text-white border-b-2 border-white' : 'text-gray-900 border-b-2 border-gray-900'}` 
                    : `${textColor === 'text-white' ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Left scroll button */}
          <div className="absolute left-1 top-1/2 transform -translate-y-1/2 sm:hidden">
            <button className={`p-1 rounded ${textColor === 'text-white' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <ChevronLeft size={16} className={textColor === 'text-white' ? 'text-white' : 'text-gray-600'} />
            </button>
          </div>
          
          {/* Right scroll button */}
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 sm:hidden">
            <button className={`p-1 rounded ${textColor === 'text-white' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <ChevronRight size={16} className={textColor === 'text-white' ? 'text-white' : 'text-gray-600'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}