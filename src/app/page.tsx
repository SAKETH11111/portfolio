import Link from 'next/link';
import Image from 'next/image';
import { Search, MessageCircle, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFFDFA' }}>
      {/* Fixed Header */}
      <div className="fixed w-full top-0 z-50" style={{ backgroundColor: '#EFFDFA' }}>
        {/* Top Bar */}
        <div className="relative h-22 flex items-center justify-between px-5 py-4">
          {/* Logo Container */}
          <div className="flex-1 flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-sm overflow-hidden flex items-center justify-center">
                <Image 
                  src="https://substackcdn.com/image/fetch/$s_!jMoJ!,w_80,h_80,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed63687-d4bc-401d-bf8a-f7b2e64e8322_1080x1080.png"
                  alt="Portfolio Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Title Container */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold">
              <Link href="/" className="block">
                <Image 
                  alt="Your Portfolio"
                  src="https://substackcdn.com/image/fetch/$s_!01R7!,e_trim:10:white/e_trim:10:transparent/h_72,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1de2d244-0740-47dc-a251-78d3f27e08c0_801x262.png"
                  width={110}
                  height={36}
                  className="block h-9"
                />
              </Link>
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
                  <Image 
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
                <Link 
                  href="/" 
                  className="px-4 py-2 text-sm font-medium text-gray-900 border-b-2 border-gray-900"
                >
                  Home
                </Link>
                <Link 
                  href="/notes" 
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Notes
                </Link>
                <Link 
                  href="/portfolio" 
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Portfolio
                </Link>
                <Link 
                  href="/archive" 
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Archive
                </Link>
                <Link 
                  href="/about" 
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
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
        {/* Substack-style Grid Layout */}
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* First Post - Featured */}
            <article className="lg:col-span-2 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
              <div className="flex flex-col">
                <div className="aspect-[1.5] bg-gray-100 rounded mb-4">
                  <Image 
                    src="https://substackcdn.com/image/fetch/w_1250,h_833,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb1b92d26-c17b-4dec-a458-1d4f24b4986d_735x728.jpeg"
                    alt="A Smile well Done"
                    width={1250}
                    height={833}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="px-4 pb-4">
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      A Smile well Done
                    </h2>
                    <p className="text-gray-600 mb-3">(:)</p>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      <time>Jun 19</time> • <span>Rudaiba Tarannum</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>1</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                      <span>0</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Second Post */}
            <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
              <div className="flex flex-col gap-3">
                <div className="aspect-[1.5] bg-gray-100 rounded">
                  <Image 
                    src="https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4dbd5c39-03a5-4547-ae8a-86ecaa1db984_736x517.jpeg"
                    alt="His void"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-3">
                    His void
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">The girl on the piano</p>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    <time>May 1</time> • <span>Rudaiba Tarannum</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>1</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Third Post */}
            <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
              <div className="flex flex-col gap-3">
                <div className="aspect-[1.5] bg-gray-100 rounded">
                  <Image 
                    src="https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F280fb921-3e19-4762-9324-6ea6066502db_736x981.jpeg"
                    alt="Her Void"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-3">
                    Her Void
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">The guy with sketchbooks</p>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    <time>May 1</time> • <span>Rudaiba Tarannum</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>2</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Fourth Post */}
            <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
              <div className="flex flex-col gap-3">
                <div className="aspect-[1.5] bg-gray-100 rounded">
                  <Image 
                    src="https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31884a0f-2f1a-47f2-b3d8-b02f9d56a5e7_736x736.jpeg"
                    alt="A life"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-3">
                    A life
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">Living with dying</p>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    <time>Apr 20</time> • <span>Rudaiba Tarannum</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>2</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Fifth Post */}
            <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
              <div className="flex flex-col gap-3">
                <div className="aspect-[1.5] bg-gray-100 rounded">
                  <Image 
                    src="https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe48150e8-5643-409b-b1e9-5daba45b3571_657x920.jpeg"
                    alt="A cup of milk tea"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-3">
                    A cup of milk tea
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">Decisions - a short thought</p>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    <time>Mar 23</time> • <span>Rudaiba Tarannum</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>1</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-200 my-8"></div>

          {/* Most Popular Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Most Popular</h2>
              <Link href="/archive?sort=top" className="text-xs text-gray-500 uppercase tracking-wider hover:text-gray-700">
                View all
              </Link>
            </div>

            {/* Popular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Popular Post 1 */}
              <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                      Drumrolls for November!
                    </h3>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      <time>Dec 8, 2024</time> • <span>Rudaiba Tarannum</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <Image 
                      src="https://substackcdn.com/image/fetch/w_150,h_150,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3bae30f9-5d35-4c57-b195-7c6cb961506d_1600x1200.jpeg"
                      alt="Drumrolls for November!"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>5</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    <span>4</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Popular Post 2 */}
              <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                      Rishab Academy Un-wrapped
                    </h3>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      <time>Jan 3</time> • <span>Rudaiba Tarannum</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <Image 
                      src="https://substackcdn.com/image/fetch/w_150,h_150,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3393db93-8eac-4dd3-a375-be0f5eebdc7c_721x690.png"
                      alt="Rishab Academy Un-wrapped"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>4</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    <span>3</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Popular Post 3 */}
              <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                      The little Plant
                    </h3>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      <time>Feb 19</time> • <span>Rudaiba Tarannum</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <Image 
                      src="https://substackcdn.com/image/fetch/w_150,h_150,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff705c049-9392-48ce-9594-54f6162d8540_664x664.jpeg"
                      alt="The little Plant"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>4</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Popular Post 4 */}
              <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                      How I Study 15-Hours A Day
                    </h3>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      <time>Dec 14, 2024</time> • <span>Rudaiba Tarannum and Chinnu</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <Image 
                      src="https://substackcdn.com/image/fetch/w_150,h_150,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe8cfa081-7631-4689-a2bc-a90484257991_1200x1600.jpeg"
                      alt="How I Study 15-Hours A Day"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>3</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    <span>2</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}