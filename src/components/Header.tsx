'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at top
      setIsAtTop(currentScrollY < 50);
      
      // Hide/show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed z-50 pt-3 pb-6 md:pt-10 md:pb-8 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        top: '0',
        left: '0',
        right: '0',
        paddingLeft: '50px',
        paddingRight: '50px',
        backgroundColor: isAtTop ? 'var(--bg-primary)' : 'var(--bg-primary)',
      }}
      data-header-style="dynamic"
    >
      <div className="flex items-center justify-between">
        {/* Logo - with slide-in animation */}
        <Link 
          href="/" 
          className="text-4xl md:text-5xl animate-fade-in"
          style={{ 
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-dark)',
            fontWeight: 500,
            animationDelay: '0s',
            animationDuration: '0.8s',
            animationTimingFunction: 'ease'
          }}
        >
        Dr. Maya Reynolds
        </Link>

        {/* Desktop Navigation - with staggered slide-in */}
        <nav className="hidden md:flex items-center gap-12">
          <Link
            href="#about"
            className="text-base md:text-lg tracking-wide hover:opacity-70 transition-opacity animate-fade-in"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--text-dark)',
              animationDelay: '0.1s',
              animationDuration: '0.8s',
              animationTimingFunction: 'ease'
            }}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-base md:text-lg tracking-wide hover:opacity-70 transition-opacity animate-fade-in"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--text-dark)',
              animationDelay: '0.15s',
              animationDuration: '0.8s',
              animationTimingFunction: 'ease'
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button - Double Line Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 animate-fade-in"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          style={{
            animationDelay: '0.2s',
            animationDuration: '0.8s'
          }}
        >
          <span 
            className={`w-6 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}
            style={{ 
              backgroundColor: 'var(--text-dark)',
              height: '1px'
            }}
          />
          <span 
            className={`w-6 mt-2 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
            style={{ 
              backgroundColor: 'var(--text-dark)',
              height: '1px'
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay - with fade animation */}
      <div 
        className={`md:hidden fixed inset-0 top-[72px] z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="#about"
            className="text-2xl tracking-wide transition-opacity hover:opacity-70"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-2xl tracking-wide transition-opacity hover:opacity-70"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
