'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-[85vh] px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-8 md:pb-12"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-8xl pl-5 mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left - Arch Image */}
        <div className="relative flex justify-center lg:justify-start animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div 
            className="relative w-full max-w-3xl aspect-[3/4] overflow-hidden"
            style={{ 
              borderRadius: '350px 350px 0 0'
            }}
          >
            <Image  
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1974&auto=format&fit=crop"
              alt="Peaceful lavender flowers - representing calm and healing"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="flex flex-col items-center justify-center text-center gap-20 ">
          <h1 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 text-6xl md:text-7xl lg:text-8xl mb-8"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-dark)',
              fontWeight: 900,
              lineHeight: 1.3,
              letterSpacing: '0.1em'
            }}
          >
            Find peace and<br />
            heal from within
          </h1>
          
          <p 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 text-lg md:text-xl mb-10"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--text-dark)',
              fontWeight: 400,
              letterSpacing: '0.02em'
            }}
          >
            Anxiety & Trauma Therapy for Adults in Austin, TX.
          </p>
          
          <Link
            href="#contact"
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-300 ease-out delay-300 inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase border hover:bg-[var(--text-dark)] hover:text-white text-[var(--text-dark)]"
            style={{ 
              fontFamily: 'var(--font-body)',
              borderColor: 'var(--text-dark)',
              fontWeight: 500
            }}
          >
            Connect with me
            <span style={{ fontSize: '14px' }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
