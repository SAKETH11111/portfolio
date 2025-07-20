'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';

interface NavItem {
  href: string;
  label: string;
  dataNav: string;
}

const navItems: NavItem[] = [
  { href: '/about', label: 'About', dataNav: 'about' },
  { href: '/portfolio', label: 'Projects', dataNav: 'projects' },
  { href: '/blog', label: 'Blog', dataNav: 'blog' },
  { href: '/contact', label: 'Contact', dataNav: 'contact' },
];

export default function GlassNavigation() {
  const navListRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isHovering, setIsHovering] = useState(false);

  const calculatePath = (fromIndex: number, toIndex: number): number[] => {
    if (fromIndex === -1) return [toIndex];
    
    const path: number[] = [];
    const start = Math.min(fromIndex, toIndex);
    const end = Math.max(fromIndex, toIndex);
    
    if (fromIndex < toIndex) {
      for (let i = start; i <= end; i++) {
        path.push(i);
      }
    } else {
      for (let i = start; i <= end; i++) {
        path.push(i);
      }
      path.reverse();
    }
    
    return path;
  };

  const animateIndicator = useCallback(async (targetIndex: number, immediate: boolean = false) => {
    const navList = navListRef.current;
    const indicator = indicatorRef.current;
    
    if (!navList || !indicator || targetIndex < 0) {
      indicator?.style.setProperty('opacity', '0');
      return;
    }

    const navElements = navList.querySelectorAll('.nav-item');
    const targetElement = navElements[targetIndex] as HTMLElement;
    
    if (!targetElement) return;

    const navRect = navList.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    const navContainer = navList.parentElement?.getBoundingClientRect();
    
    if (!navContainer) return;
    
    // Calculate position relative to the nav container, accounting for padding
    const left = targetRect.left - navContainer.left;
    const width = targetRect.width;
    
    if (immediate) {
      indicator.style.setProperty('transition', 'none');
      indicator.style.setProperty('left', `${left}px`);
      indicator.style.setProperty('width', `${width}px`);
      indicator.style.setProperty('opacity', '1');
      
      // Force reflow and restore transition
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      indicator.offsetHeight;
      indicator.style.setProperty('transition', 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)');
    } else {
      const currentIndex = activeIndex;
      
      if (currentIndex !== -1) {
        const path = calculatePath(currentIndex, targetIndex);
        
        for (let i = 0; i < path.length; i++) {
          const stepIndex = path[i];
          const stepElement = navElements[stepIndex] as HTMLElement;
          const stepRect = stepElement.getBoundingClientRect();
          const stepLeft = stepRect.left - navContainer.left;
          const stepWidth = stepRect.width;
          
          const isLast = i === path.length - 1;
          const duration = isLast ? 0.4 : 0.2;
          
          indicator.style.setProperty('transition', `all ${duration}s cubic-bezier(0.4, 0.0, 0.2, 1)`);
          indicator.style.setProperty('left', `${stepLeft}px`);
          indicator.style.setProperty('width', `${stepWidth}px`);
          indicator.style.setProperty('opacity', '1');
          
          if (!isLast) {
            await new Promise(resolve => setTimeout(resolve, duration * 1000 * 0.6));
          }
        }
      } else {
        indicator.style.setProperty('left', `${left}px`);
        indicator.style.setProperty('width', `${width}px`);
        indicator.style.setProperty('opacity', '1');
      }
    }
  }, [activeIndex]);

  const handleMouseEnter = (index: number) => {
    setIsHovering(true);
    animateIndicator(index);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    const indicator = indicatorRef.current;
    if (indicator) {
      indicator.style.setProperty('opacity', '0');
    }
    setActiveIndex(-1);
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    animateIndicator(index, true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (activeIndex !== -1 && isHovering) {
        animateIndicator(activeIndex, true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, isHovering, animateIndicator]);

  return (
    <>
      {/* SVG Filter for Glass Distortion */}
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="glass-distortion">
            <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
          </filter>
          <filter id="glass-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>
        </defs>
      </svg>

      {/* Advanced Glass Morphism Navigation Bar */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <div className="glass-nav">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <div className="glass-indicator" ref={indicatorRef}></div>
          <div className="glass-content">
            <ul 
              className="nav-list" 
              ref={navListRef}
              onMouseLeave={handleMouseLeave}
            >
              {navItems.map((item, index) => (
                <li key={item.dataNav}>
                  <Link 
                    href={item.href} 
                    className="nav-item font-zen-antique"
                    data-nav={item.dataNav}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => handleClick(index)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}