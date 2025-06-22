import { Search, MessageCircle, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFFDFA' }}>
      {/* Fixed Header */}
      <div className="fixed w-full top-0 z-50" style={{ backgroundColor: '#EFFDFA' }}>
        {/* Top Bar */}
        <div className="relative h-22 flex items-center justify-between px-5 py-4">
          {/* Logo Container */}
          <div className="flex-1 flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-sm overflow-hidden flex items-center justify-center">
                <img 
                  src="https://substackcdn.com/image/fetch/$s_!jMoJ!,w_80,h_80,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed63687-d4bc-401d-bf8a-f7b2e64e8322_1080x1080.png"
                  alt="Portfolio Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover"
                />
              </div>
            </a>
          </div>

          {/* Title Container */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold">
              <a href="/" className="block">
                <img 
                  alt="Your Portfolio"
                  src="https://substackcdn.com/image/fetch/$s_!01R7!,e_trim:10:white/e_trim:10:transparent/h_72,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1de2d244-0740-47dc-a251-78d3f27e08c0_801x262.png"
                  className="block h-9"
                />
              </a>
            </h1>
          </div>

          {/* Buttons Container */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <button 
                  type="button" 
                  aria-label="Search"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Search size={20} className="text-gray-600" />
                </button>
                <button 
                  type="button" 
                  aria-label="Messages"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <MessageCircle size={20} className="text-gray-600" />
                </button>
                <button 
                  type="button" 
                  aria-label="Notifications"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Bell size={20} className="text-gray-600" />
                </button>
              </div>
              <button 
                type="button" 
                aria-label="Profile menu"
                className="relative ml-2"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                  <img 
                    src="https://substackcdn.com/image/fetch/$s_!P1eg!,w_40,h_40,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1eb53d4b-535b-4ec4-90e1-e645ad361edc_2048x2048.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 20 20" fill="white">
                    <path d="M5.72845 8.252C5.25083 7.59067 5.72336 6.6665 6.53913 6.6665H13.461C14.2767 6.6665 14.7493 7.59067 14.2716 8.25199L10.8107 13.044C10.4116 13.5967 9.58852 13.5967 9.18936 13.044L5.72845 8.252Z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-b border-gray-200">
          <div className="h-12 px-1 flex items-center justify-center relative">
            <div className="flex items-center">
              <div className="flex">
                <a 
                  href="/" 
                  className="px-4 py-2 text-sm font-medium text-gray-900 border-b-2 border-gray-900"
                >
                  Home
                </a>
                <a 
                  href="/notes" 
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Notes
                </a>
                <a 
                  href="/portfolio" 
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Portfolio
                </a>
                <a 
                  href="/archive" 
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Archive
                </a>
                <a 
                  href="/about" 
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
              </div>
            </div>
            
            {/* Left scroll button */}
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft size={16} className="text-gray-600" />
              </button>
            </div>
            
            {/* Right scroll button */}
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - with top margin to account for fixed header */}
      <div className="pt-32">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A space of peace and creativity, where green represents nature's calm, 
            yellow brings joy and success, and blue adds depth and contemplation. 
            Together they create absolute peace - a sanctuary for those who seek harmony.
          </p>
        </div>
      </div>
    </div>
  );
}