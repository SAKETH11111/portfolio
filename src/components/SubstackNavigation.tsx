import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SubstackNavigationProps {
  currentPage?: string;
}

export default function SubstackNavigation({ currentPage = 'home' }: SubstackNavigationProps) {
  return (
    <div className="fixed w-full top-0 z-50" style={{ backgroundColor: '#EFFDFA' }}>
      {/* Top Bar */}
      <div className="relative h-22 flex items-center justify-between px-2 sm:px-5 py-4">
        {/* Logo Container */}
        <div className="flex-1 flex-shrink-0">
        </div>

        {/* Title Container */}
        <div className="flex-shrink-0 hidden sm:block">
          <h1 className="text-xl font-semibold">
            <Link href="/" className="block">
              <Image 
                alt="Rudaiba's Thoughts"
                src="https://substackcdn.com/image/fetch/$s_!01R7!,e_trim:10:white/e_trim:10:transparent/h_72,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1de2d244-0740-47dc-a251-78d3f27e08c0_801x262.png"
                width={72}
                height={36}
                className="block"
                style={{ height: '36px' }}
              />
            </Link>
          </h1>
        </div>

        {/* Buttons Container */}
        <div className="flex-1 flex justify-end">
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t border-b border-gray-200">
        <div className="h-12 px-1 flex items-center justify-center relative overflow-x-auto">
          <div className="flex items-center">
            <div className="flex whitespace-nowrap">
              <Link 
                href="/" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'home' 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'blog' 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Blog
              </Link>
              <Link 
                href="/projects" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'projects' 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/about" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'about' 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`px-2 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'contact' 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Left scroll button */}
          <div className="absolute left-1 top-1/2 transform -translate-y-1/2 sm:hidden">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
          </div>
          
          {/* Right scroll button */}
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 sm:hidden">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}