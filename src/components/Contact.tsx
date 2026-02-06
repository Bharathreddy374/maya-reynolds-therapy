'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Contact() {
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
      id="contact" 
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--secondary)' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div 
              className="relative overflow-hidden"
              style={{ 
                borderRadius: '200px 200px 200px 200px',
                aspectRatio: '4/5'
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=750&fit=crop"
                alt="Welcoming therapy space"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="py-8">
            <h2 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-3xl md:text-4xl mb-6"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-dark)',
                fontWeight: 400
              }}
            >
              Let&apos;s Connect
            </h2>
            
            <p 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 text-base md:text-lg mb-8 italic"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-medium)',
                lineHeight: 1.7
              }}
            >
              I offer a free 15-minute consultation to discuss your needs and determine if we&apos;re the right fit.
            </p>

            <div 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 space-y-4 mb-10"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-dark)'
              }}
            >
              <p className="text-base">
                <strong>Phone:</strong>{' '}
                <a href="tel:+15125550123" className="hover:underline">(512) 555-0123</a>
              </p>
              <p className="text-base">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@mayareynolds.com" className="hover:underline">hello@mayareynolds.com</a>
              </p>
              <p className="text-base">
                <strong>Location:</strong> Downtown Austin, Texas
              </p>
            </div>

            <a
              href="mailto:hello@mayareynolds.com"
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-300 ease-out delay-300 inline-flex items-center text-sm tracking-wider uppercase hover:opacity-70"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-dark)',
                fontWeight: 500
              }}
            >
              GET IN TOUCH
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
