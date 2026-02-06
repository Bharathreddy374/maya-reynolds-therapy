'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const specialties = [
  {
    id: 1,
    title: 'Anxiety',
    description: 'Feeling overwhelmed by worry and stress? Let\'s work together to find calm and develop coping strategies that work for you.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Trauma & PTSD',
    description: 'Healing from trauma takes time and support. I\'m here to guide you through evidence-based treatments like EMDR to help you process and recover.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Life Transitions',
    description: 'Major life changes can feel overwhelming. Together, we\'ll navigate these transitions and help you find your footing.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
  }
];

export default function Services() {
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
      id="services" 
      className="py-20 md:py-32 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-3xl md:text-4xl lg:text-5xl text-center mb-16 md:mb-20 italic"
          style={{ 
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-dark)',
            fontWeight: 400
          }}
        >
          My Specialties
        </h2>

        {/* Specialties Grid - Cards with circular images */}
        <div className="grid md:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div 
              key={specialty.id}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out p-8 border flex flex-col"
              style={{ 
                borderColor: 'var(--secondary-dark)',
                transitionDelay: `${0.1 + index * 0.1}s`
              }}
            >
              {/* Title */}
              <h3 
                className="text-lg md:text-xl mb-4"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-dark)',
                  fontWeight: 500
                }}
              >
                {specialty.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-sm mb-8"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-medium)',
                  lineHeight: 1.7
                }}
              >
                {specialty.description}
              </p>
              
              {/* Circular Image */}
              <div className="mt-auto flex justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 200px, 250px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
