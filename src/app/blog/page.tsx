import Link from 'next/link';
import Image from 'next/image';
import { Search, MessageCircle, Bell, ChevronLeft, ChevronRight } from 'lucide-react';
import SubstackNavigation from '@/components/SubstackNavigation';

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFFDFA' }}>
      <SubstackNavigation currentPage="blog" />

      {/* Main Content - with top margin to account for fixed header */}
      <div style={{ paddingTop: '90px' }}>
        {/* Substack-style Grid Layout */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-6">
          {/* Main Grid Container - Five Up Layout with Dividers */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0 relative" style={{ minHeight: '700px' }}>
            {/* Divider lines with proper padding */}
            <div className="hidden lg:block absolute bottom-0 pt-6" style={{ 
              left: 'calc(25%)',
              top: '16px',
              width: '1px',
              backgroundColor: '#d1d5db'
            }}>
            </div>
            <div className="hidden lg:block absolute bottom-0 pt-6" style={{ 
              right: 'calc(25%)',
              top: '16px',
              width: '1px',
              backgroundColor: '#d1d5db'
            }}>
            </div>
            
            {/* Left Side - Two Posts */}
            <div className="w-1/4 flex flex-col sm:flex-row lg:flex-col gap-8">
              {/* Second Post */}
              <Link
                href="https://rudaiba.substack.com/p/his-void"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="flex flex-col flex-1 sm:max-w-xs lg:max-w-none hover:opacity-80 transition-opacity" style={{
                  marginTop: '16px',
                  padding: '16px',
                  position: 'relative',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  color: 'rgb(59, 88, 82)',
                  cursor: 'pointer',
                  fontFamily: 'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
                }}>
                  <div className="w-full aspect-[1.5] bg-gray-100 overflow-hidden rounded-sm">
                    <Image
                      src="https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4dbd5c39-03a5-4547-ae8a-86ecaa1db984_736x517.jpeg"
                      alt="His void"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-spectral">
                      His void
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 font-system">The girl on the piano</p>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      <time>May 1</time> • <span>Rudaiba Tarannum</span>
                    </div>
                  </div>
                </article>
              </Link>

              {/* Third Post */}
              <Link
                href="https://rudaiba.substack.com/p/her-void"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="flex flex-col flex-1 sm:max-w-xs lg:max-w-none hover:opacity-80 transition-opacity" style={{
                  marginTop: '16px',
                  padding: '16px',
                  position: 'relative',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  color: 'rgb(59, 88, 82)',
                  cursor: 'pointer',
                  fontFamily: 'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
                }}>
                  <div className="w-full aspect-[1.5] bg-gray-100 overflow-hidden rounded-sm">
                    <Image
                      src="https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F280fb921-3e19-4762-9324-6ea6066502db_736x981.jpeg"
                      alt="Her Void"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-spectral">
                      Her Void
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 font-system">The guy with sketchbooks</p>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      <time>May 1</time> • <span>Rudaiba Tarannum</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>


            {/* Center - Featured Post */}
            <Link
              href="https://rudaiba.substack.com/p/a-smile-well-done"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/4 px-0 flex flex-col items-center"
            >
              <article className="w-full hover:opacity-80 transition-opacity">
                <div
                  className="flex flex-col relative rounded-sm border-box w-full"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    padding: '16px',
                    marginTop: '16px',
                    marginLeft: '0px',
                    marginRight: '0px',
                    marginBottom: '0px',
                    boxSizing: 'border-box',
                    overflow: 'visible',
                    backgroundColor: 'transparent',
                    color: 'rgb(59, 88, 82)',
                    fontSize: '19px',
                    fontWeight: 400,
                    textAlign: 'start',
                    zIndex: 'auto',
                    border: '0px none rgb(59, 88, 82)',
                    cursor: 'pointer'
                  }}
                >
                  <div className="overflow-hidden mb-3 rounded-sm w-full max-w-full">
                    <div className="w-full aspect-[3/2]">
                      <Image
                        src="https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb1b92d26-c17b-4dec-a458-1d4f24b4986d_735x728.jpeg"
                        alt="A Smile well Done"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center flex-grow">
                    <h2 className="font-bold text-gray-900 mb-2 text-xl sm:text-2xl lg:text-3xl font-spectral" style={{ lineHeight: '1.3' }}>
                      A Smile well Done
                    </h2>
                    <p className="text-gray-600 mb-2 text-lg font-spectral">(:)</p>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      <time>Jun 19</time> • <span>Rudaiba Tarannum</span>
                    </div>
                    <div className="flex justify-center gap-3">
                      <span className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors text-red-500">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        <span>1</span>
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                        </svg>
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500 hover:text-green-500 transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>


            {/* Right Side - Two Posts */}
            <div className="w-1/4 flex flex-col sm:flex-row lg:flex-col gap-8">
              {/* Fourth Post */}
              <Link
                href="https://rudaiba.substack.com/p/a-life"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="flex flex-col flex-1 sm:max-w-xs lg:max-w-none hover:opacity-80 transition-opacity" style={{
                  marginTop: '16px',
                  padding: '16px',
                  position: 'relative',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  color: 'rgb(59, 88, 82)',
                  cursor: 'pointer',
                  fontFamily: 'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
                }}>
                  <div className="w-full aspect-[1.5] bg-gray-100 overflow-hidden rounded-sm">
                    <Image
                      src="https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31884a0f-2f1a-47f2-b3d8-b02f9d56a5e7_736x736.jpeg"
                      alt="A life"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-spectral">
                      A life
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 font-system">Living with dying</p>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      <time>Apr 20</time> • <span>Rudaiba Tarannum</span>
                    </div>
                  </div>
                </article>
              </Link>

              {/* Fifth Post */}
              <Link
                href="https://rudaiba.substack.com/p/a-cup-of-milk-tea"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="flex flex-col flex-1 sm:max-w-xs lg:max-w-none hover:opacity-80 transition-opacity" style={{
                  marginTop: '16px',
                  padding: '16px',
                  position: 'relative',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  color: 'rgb(59, 88, 82)',
                  cursor: 'pointer',
                  fontFamily: 'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
                }}>
                  <div className="w-full aspect-[1.5] bg-gray-100 overflow-hidden rounded-sm">
                    <Image
                      src="https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe48150e8-5643-409b-b1e9-5daba45b3571_657x920.jpeg"
                      alt="A cup of milk tea"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-spectral">
                      A cup of milk tea
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 font-system">Decisions - a short thought</p>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      <time>Mar 23</time> • <span>Rudaiba Tarannum</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>

          {/* Subscribe Button */}
          <div className="flex justify-center my-12">
            <Link 
              href="https://rudaiba.substack.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF6719] text-white font-bold text-lg rounded-md hover:bg-[#E55A0D] transition-colors shadow-lg"
            >
              Subscribe to Rudaiba&apos;s Blogs
            </Link>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-200 my-8"></div>

          {/* Most Popular Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 font-system">Most Popular</h2>
              <Link href="/archive?sort=top" className="text-xs text-gray-500 uppercase tracking-wider hover:text-gray-700">
                View all
              </Link>
            </div>

            {/* Popular Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Popular Post 1 */}
              <Link
                href="https://rudaiba.substack.com/p/drumrolls-for-november"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2 font-spectral">
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
                    <span className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>5</span>
                    </span>
                    <span className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                      <span>4</span>
                    </span>
                    <span className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>

              {/* Popular Post 2 */}
              <Link
                href="https://rudaiba.substack.com/p/rishab-academy-un-wrapped"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2 font-spectral">
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
                    <span className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>3</span>
                    </span>
                    <span className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </span>
                    <span className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>

              {/* Popular Post 3 */}
              <Link
                href="https://rudaiba.substack.com/p/the-little-plant"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2 font-spectral">
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
                    <span className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>4</span>
                    </span>
                    <span className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </span>
                    <span className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>

              {/* Popular Post 4 */}
              <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-2">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2 font-spectral">
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
                  <span className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>3</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    <span>2</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-green-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-6-4l-4-4m0 0L8 6m4-4v12" />
                    </svg>
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}