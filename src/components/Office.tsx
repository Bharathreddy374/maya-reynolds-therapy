'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import office1 from '../assets/office1.jpeg';
import office2 from '../assets/office2.jpeg';

export default function Office() {
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
      id="office" 
      className="py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-sm uppercase tracking-[0.2em] mb-4"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--primary)',
              fontWeight: 500
            }}
          >
            The Space
          </p>
          <h2 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-dark)',
              fontWeight: 600,
              lineHeight: 1.1
            }}
          >
            A sanctuary for<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>your healing journey</span>
          </h2>
          
          <p 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 text-lg max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--text-medium)',
              lineHeight: 1.8
            }}
          >
            My office is a quiet, private space designed to feel calm and grounding, 
            with natural light and a comfortable, uncluttered environment.
          </p>
        </div>

        {/* Creative Image Layout */}
        <div className="relative">
          {/* Main container with overlapping images */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image - Large with arch top */}
            <div className="lg:col-span-7 relative">
              <div 
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 relative aspect-[4/5] overflow-hidden"
                style={{ 
                  borderRadius: '250px 250px 0 0',
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.15)'
                }}
              >
                <Image
                  src={office1}
                  alt="Therapy office - comfortable and welcoming space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              
              {/* Decorative element - floating accent */}
              <div 
                className="animate-on-scroll opacity-0 scale-90 transition-all duration-700 ease-out delay-300 absolute -bottom-6 -left-6 w-32 h-32 rounded-full z-10"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  opacity: 0.1
                }}
              />
            </div>

            {/* Right Image - Offset position */}
            <div className="lg:col-span-5 relative lg:-ml-12 lg:mt-24">
              <div 
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 relative aspect-[3/4] overflow-hidden"
                style={{ 
                  border: '10px solid var(--bg-primary)',
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Image
                  src={office2}
                  alt="Peaceful therapy environment with calming atmosphere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Quote overlay */}
              <div 
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400 absolute -bottom-8 -right-4 lg:right-auto lg:-left-8 bg-white px-8 py-6 max-w-xs"
                style={{ 
                  boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <p 
                  className="text-base italic"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-dark)',
                    lineHeight: 1.6
                  }}
                >
                  "Clients often share that the space itself helps them feel more at ease."
                </p>
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <div 
            className="animate-on-scroll opacity-0 transition-all duration-700 ease-out delay-500 hidden lg:block absolute top-1/2 right-0 w-24 h-px"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </div>

        {/* Office Features */}
        <div className="grid md:grid-cols-3 gap-12 mt-24 text-center">
          {[
            { title: 'Private & Secure', desc: 'Complete confidentiality with a discreet entrance and soundproofed rooms.' },
            { title: 'Natural Light', desc: 'Large windows create a warm, bright atmosphere that promotes calm.' },
            { title: 'Telehealth Available', desc: 'Secure video sessions for clients throughout Texas.' }
          ].map((feature, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
            >
              <div 
                className="w-12 h-px mx-auto mb-6"
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-dark)',
                  fontWeight: 500
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-medium)',
                  lineHeight: 1.8
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
