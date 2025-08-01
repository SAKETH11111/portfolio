'use client';

import { useState } from 'react';
import SubstackNavigation from '@/components/SubstackNavigation';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#D5CEA5] text-white placeholder-[#6B7280] focus:outline-none focus:border-white transition-colors duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#D5CEA5] text-white placeholder-[#6B7280] focus:outline-none focus:border-white transition-colors duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#D5CEA5] text-white placeholder-[#6B7280] focus:outline-none focus:border-white transition-colors duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Message"
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#D5CEA5] text-white placeholder-[#6B7280] focus:outline-none focus:border-white transition-colors duration-300 resize-vertical min-h-[150px]"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded-sm animate-fade-in">
                    <p className="font-spectral">✓ Message sent successfully! I&apos;ll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-sm animate-fade-in">
                    <p className="font-spectral">✗ {errorMessage}</p>
                  </div>
                )}
                
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      px-12 py-4 font-semibold text-base transition-all duration-300 cursor-pointer
                      ${isSubmitting 
                        ? 'bg-gray-600 text-gray-300 border-2 border-gray-600 cursor-not-allowed' 
                        : 'bg-[#D5CEA5] text-[#00011C] border-2 border-[#D5CEA5] hover:bg-[#E5D9A7] hover:border-[#E5D9A7] hover:-translate-y-0.5'
                      }
                    `}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>

      {/* Add fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}