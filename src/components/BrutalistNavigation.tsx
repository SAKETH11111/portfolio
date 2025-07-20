'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

interface BrutalistNavigationProps {
  pageColor: 'about' | 'projects';
}

export default function BrutalistNavigation({ pageColor }: BrutalistNavigationProps) {
  const pathname = usePathname();
  
  const getBgColor = () => {
    return pageColor === 'about' ? 'bg-[#E8C5C5]' : 'bg-[#B3D1E3]';
  };
  
  const getActiveColor = () => {
    return pageColor === 'about' ? 'bg-[#D1A8A8]' : 'bg-[#9BB8CC]';
  };

  return (
    <nav className="brutalist-nav">
      <div className={`brutalist-nav-container ${getBgColor()}`}>
        <ul className="brutalist-nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  brutalist-nav-item
                  ${pathname === item.href ? `brutalist-nav-item-active ${getActiveColor()}` : ''}
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}