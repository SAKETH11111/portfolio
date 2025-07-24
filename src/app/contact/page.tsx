import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F9F9AF]">
      {/* Navigation - Fixed at top like blog page */}
      <div className="fixed w-full top-0 z-50 bg-[#F9F9AF]">
        {/* Top Bar */}
        <div className="relative h-22 flex items-center justify-between px-2 sm:px-5 py-4">
          {/* Logo Container */}
          <div className="flex-1 flex-shrink-0">
          </div>

          {/* Title Container - Empty for contact */}
          <div className="flex-shrink-0 hidden sm:block">
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
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/blog" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  href="/projects" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Projects
                </Link>
                <Link 
                  href="/about" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-900 border-b-2 border-gray-900 transition-colors"
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

      <main className="px-4 sm:px-6 lg:px-8" style={{ paddingTop: '150px' }}>
        <div className="max-w-4xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
              CONTACT
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Let&apos;s connect and create something meaningful together
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/30 backdrop-blur-sm border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl font-bold text-black mb-6">GET IN TOUCH</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-bold text-black">Email</h3>
                      <a href="mailto:rudaiba@example.com" className="text-gray-800 hover:underline">
                        rudaiba@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-bold text-black">LinkedIn</h3>
                      <a href="#" className="text-gray-800 hover:underline">
                        linkedin.com/in/rudaibatarannum
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-bold text-black">Twitter</h3>
                      <a href="#" className="text-gray-800 hover:underline">
                        @rudaibatarannum
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-bold text-black">Blog</h3>
                      <a href="/blog" className="text-gray-800 hover:underline">
                        Read my thoughts
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/30 backdrop-blur-sm border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-bold text-black mb-6">SEND MESSAGE</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-black font-bold mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:ring-0 focus:border-gray-600"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-black font-bold mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:ring-0 focus:border-gray-600"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-black font-bold mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:ring-0 focus:border-gray-600"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-black font-bold mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:ring-0 focus:border-gray-600 resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold py-4 px-8 border-2 border-black hover:bg-white hover:text-black transition-colors duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-x-1 hover:-translate-y-1"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/30 backdrop-blur-sm border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold text-black mb-4">LET&apos;S COLLABORATE</h2>
            <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss ideas, or just want to say hello, 
              I&apos;d love to hear from you. Every great conversation starts with a simple message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="inline-block bg-white text-black font-bold py-3 px-8 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-x-1 hover:-translate-y-1"
              >
                VIEW MY WORK
              </a>
              <a
                href="/blog"
                className="inline-block bg-white text-black font-bold py-3 px-8 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-x-1 hover:-translate-y-1"
              >
                READ MY THOUGHTS
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}