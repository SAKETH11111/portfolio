import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#00011C] flex flex-col">
      <SubstackNavigation currentPage="contact" textColor="text-white" />
      
      {/* Background fill for navbar area */}
      <div className="h-[80px] bg-[#00011C]"></div>

      {/* Hero Section */}
      <div className="relative h-[25vh] min-h-[200px] flex items-center justify-center overflow-hidden flex-shrink-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/image.png"
            alt="Contact background"
            fill
            sizes="100vw"
            className="object-cover filter grayscale contrast-125"
            priority
          />
        </div>
        
        {/* Hero Title */}
        <h1 
          className="relative z-10 font-light text-white text-center tracking-[-0.02em] font-zen-antique"
          style={{ fontSize: '60px' }}
        >
          Get in touch
        </h1>
      </div>

      <main className="px-6 lg:px-8 flex-grow flex items-center justify-center pt-16">
        <div className="max-w-[1200px] mx-auto w-full py-8">
          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[20px] font-medium text-white mb-2 font-zen-antique">Email</h3>
                  <a 
                    href="mailto:tarannumrudaiba@gmail.com" 
                    className="text-[18px] text-[#B8BCC8] hover:text-white transition-colors duration-300 underline font-zen-antique"
                  >
                    tarannumrudaiba@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-[20px] font-medium text-white mb-2 font-zen-antique">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/rudaibatarannum" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] text-[#B8BCC8] hover:text-white transition-colors duration-300 underline font-zen-antique"
                  >
                    linkedin.com/in/rudaibatarannum
                  </a>
                </div>
                
                <div>
                  <h3 className="text-[20px] font-medium text-white mb-2 font-zen-antique">Blog</h3>
                  <a 
                    href="https://rudaiba.substack.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] text-[#B8BCC8] hover:text-white transition-colors duration-300 underline font-zen-antique"
                  >
                    rudaiba.substack.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1">
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#D5CEA5] text-white placeholder-[#6B7280] focus:outline-none focus:border-white transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#D5CEA5] text-white placeholder-[#6B7280] focus:outline-none focus:border-white transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#D5CEA5] text-white placeholder-[#6B7280] focus:outline-none focus:border-white transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#D5CEA5] text-white placeholder-[#6B7280] focus:outline-none focus:border-white transition-colors duration-300 resize-vertical min-h-[150px]"
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-[#D5CEA5] text-[#00011C] border-2 border-[#D5CEA5] font-semibold text-base hover:bg-[#E5D9A7] hover:border-[#E5D9A7] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}