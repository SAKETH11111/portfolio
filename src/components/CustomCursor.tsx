'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isVisible ? '' : 'custom-cursor-hidden'}`}
      style={{
        left: mousePosition.x - 35,
        top: mousePosition.y - 35,
        width: 70,
        height: 70,
      }}
    >
      <div className="relative w-full h-full">
        {/* Central dot */}
        <div className="custom-cursor-center"></div>
        
        {/* Circular text */}
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          className="custom-cursor-ring absolute top-0 left-0"
        >
          <defs>
            <path
              id="cursor-circle"
              d="M 35, 35 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
            />
          </defs>
          <text className="custom-cursor-text">
            <textPath href="#cursor-circle" startOffset="0%">
              RUDAIBA • RUDAIBA • RUDAIBA • RUDAIBA •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}