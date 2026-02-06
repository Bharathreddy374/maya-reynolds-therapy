'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mayaProfile from '../assets/Dr. Maya Reynolds.png';

export default function About() {
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
      id="about" 
      className="py-20 md:py-32 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Image with creative layout */}
          <div className="relative animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div 
              className="relative w-full aspect-[4/5] overflow-hidden"
              style={{ borderRadius: '250px 250px 0 0' }}
            >
              <Image
                src={mayaProfile}
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right - Condensed Text Content */}
          <div>
            <p 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-sm uppercase tracking-[0.2em] mb-4"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--primary)',
                fontWeight: 500
              }}
            >
              About Me
            </p>
            
            <h2 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 text-4xl md:text-5xl mb-6"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-dark)',
                fontWeight: 600,
                lineHeight: 1.1
              }}
            >
              Hi, I&apos;m Dr. Maya<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Reynolds</span>
            </h2>
            
            <p 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-150 text-lg mb-6"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-medium)',
                lineHeight: 1.9
              }}
            >
              I&apos;m a licensed clinical psychologist in Austin, Texas, helping adults navigate 
              anxiety, trauma, and burnout. My clients are often high-achieving and self-aware—yet 
              internally exhausted, stuck in overthinking, or emotionally on edge.
            </p>

            {/* Key Focus Areas */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 grid grid-cols-2 gap-4 mb-8">
              {['Anxiety & Panic', 'Trauma & PTSD', 'Burnout', 'Perfectionism'].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2"
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                  />
                  <span 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-dark)'
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-250 text-base mb-8"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-medium)',
                lineHeight: 1.8
              }}
            >
              I combine <strong>CBT, EMDR, and mindfulness</strong> with a warm, grounded approach. 
              Whether in-person or via telehealth, my goal is helping you build insight, 
              resilience, and a stronger relationship with yourself.
            </p>

            <Link
              href="#contact"
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-300 ease-out delay-300 inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase border hover:bg-[var(--text-dark)] hover:text-white"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-dark)',
                borderColor: 'var(--text-dark)',
                fontWeight: 500
              }}
            >
              Let&apos;s connect
              <span style={{ fontSize: '14px' }}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
