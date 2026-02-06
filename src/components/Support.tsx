'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Support() {
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

  const challenges = [
    'Persistent feelings of anxiety or worry',
    'Trouble focusing or making decisions',
    'Difficulty processing past trauma',
    'Feeling constantly exhausted or unmotivated',
    'A pervasive sense of being overwhelmed'
  ];

  return (
    <section ref={sectionRef} className="grid lg:grid-cols-2">
      {/* Left - Image */}
      <div className="relative min-h-[500px] lg:min-h-[700px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop"
          alt="Peaceful moment of reflection"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Right - Content with sage/green background */}
      <div 
        className="px-8 md:px-16 lg:px-20 py-16 lg:py-24 flex flex-col justify-center"
        style={{ backgroundColor: 'var(--primary-light)' }}
      >
        <h2 
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-3xl md:text-4xl lg:text-5xl mb-6"
          style={{ 
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-dark)',
            fontWeight: 400,
            lineHeight: 1.2
          }}
        >
          You don&apos;t have to do this all alone.
        </h2>
        
        <p 
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 text-base mb-8"
          style={{ 
            fontFamily: 'var(--font-body)',
            color: 'var(--text-dark)',
            lineHeight: 1.8
          }}
        >
          If you are facing any of these, there&apos;s hope:
        </p>

        <ul className="space-y-3 mb-10">
          {challenges.map((challenge, index) => (
            <li 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex items-start gap-3 text-base"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-dark)',
                transitionDelay: `${0.15 + index * 0.05}s`
              }}
            >
              <span className="mt-1">•</span>
              <span>{challenge}</span>
            </li>
          ))}
        </ul>
        
        <p 
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400 text-base"
          style={{ 
            fontFamily: 'var(--font-body)',
            color: 'var(--text-dark)',
            lineHeight: 1.8
          }}
        >
          With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
        </p>
      </div>
    </section>
  );
}
