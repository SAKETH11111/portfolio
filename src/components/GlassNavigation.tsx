'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function GlassNavigation() {
  const [activeItem, setActiveItem] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (href: string) => {
    setActiveItem(href);
  };

  const handleMouseLeave = () => {
    setActiveItem('');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileItemClick = (href: string) => {
    setActiveItem(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* SVG Filters for Liquid Glass Effect */}
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
        <defs>
          <filter id="liquid-glass-distortion" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.008 0.008" 
              numOctaves="2" 
              seed="92" 
              result="noise" 
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="blurred" 
              scale="45" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
          <filter id="liquid-glass-mobile" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.006 0.006" 
              numOctaves="2" 
              seed="92" 
              result="noise" 
            />
            <feGaussianBlur in="noise" stdDeviation="1.5" result="blurred" />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="blurred" 
              scale="35" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      {/* Desktop & Tablet Liquid Glass Navigation */}
      <nav className="liquid-glass-nav hidden md:block">
        <div className="liquid-glass-container">
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <li key={item.href} className="relative">
                <Link 
                  href={item.href}
                  className={`
                    liquid-glass-item
                    ${activeItem === item.href ? 'active' : ''}
                    ${index !== navItems.length - 1 ? 'border-separator' : ''}
                  `}
                  onMouseEnter={() => handleMouseEnter(item.href)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="liquid-glass-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Liquid Glass Navigation */}
      <nav className="liquid-glass-nav-mobile md:hidden">
        {/* Mobile Menu Button */}
        <div className="liquid-glass-container-mobile">
          <button
            onClick={toggleMobileMenu}
            className="liquid-glass-mobile-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="liquid-glass-text">Menu</span>
            <svg 
              className={`liquid-glass-chevron ${isMobileMenuOpen ? 'rotated' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="liquid-glass-dropdown">
            <div className="liquid-glass-container-mobile">
              <ul>
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className={`
                        liquid-glass-item-mobile
                        ${index !== navItems.length - 1 ? 'border-separator-mobile' : ''}
                      `}
                      onClick={() => handleMobileItemClick(item.href)}
                    >
                      <span className="liquid-glass-text">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="liquid-glass-backdrop md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}