'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
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
      className="py-20 md:py-32 px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left - Creative Image Composition */}
        <div className="relative h-[500px] md:h-[600px] order-2 lg:order-1">
          {/* Main large image - Arch shape */}
          <div 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out absolute top-0 left-0 w-[65%] h-[85%] overflow-hidden z-10"
            style={{ 
              borderRadius: '200px 200px 0 0',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
              alt="Cozy therapy setting with coffee and journal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 65vw, 35vw"
            />
          </div>
          
          {/* Secondary image - Offset rectangle with border */}
          <div 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 absolute bottom-0 right-0 w-[55%] h-[60%] overflow-hidden z-20"
            style={{ 
              border: '8px solid var(--bg-primary)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
              alt="Eucalyptus and peaceful elements"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 55vw, 30vw"
            />
          </div>

          {/* Decorative accent circle */}
          <div 
            className="animate-on-scroll opacity-0 scale-90 transition-all duration-700 ease-out delay-300 absolute top-[15%] right-[25%] w-20 h-20 md:w-24 md:h-24 rounded-full z-30"
            style={{ 
              backgroundColor: 'var(--primary)',
              opacity: 0.15
            }}
          />
        </div>

        {/* Right - Text Content */}
        <div className="order-1 lg:order-2">
          <h2 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-4xl md:text-5xl lg:text-5xl mb-8 italic"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-dark)',
              fontWeight: 400,
              lineHeight: 1.2
            }}
          >
            Live a fulfilling life.
          </h2>
          
          <p 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 text-base md:text-lg mb-6"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--text-medium)',
              lineHeight: 1.9
            }}
          >
            Life can be challenging—especially when you&apos;re navigating anxiety, stress, 
            or the lingering effects of past experiences. It&apos;s easy to feel overwhelmed and alone.
          </p>
          
          <p 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 text-base md:text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--text-medium)',
              lineHeight: 1.9
            }}
          >
            But I want you to know that I&apos;m here to help. Together, we can work through 
            these challenges and find a path toward healing and peace.
          </p>

          {/* Divider line */}
          <div 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 w-full h-px mb-8"
            style={{ backgroundColor: 'var(--text-light)' }}
          />

          {/* CTA */}
          <Link
            href="#contact"
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-300 ease-out delay-300 inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase hover:opacity-70"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--text-dark)',
              fontWeight: 500
            }}
          >
            Get in touch
            <span style={{ fontSize: '14px' }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
