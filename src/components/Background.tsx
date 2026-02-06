'use client';

import { useState, useEffect, useRef } from 'react';

const backgrounds = [
  {
    title: 'Education',
    content: 'Master of Arts in Clinical Psychology from the University of Texas at Austin. Bachelor of Science in Psychology with a minor in Neuroscience from Texas State University. Specialized training in trauma-focused cognitive behavioral therapy and EMDR.'
  },
  {
    title: 'Licensure',
    content: 'Licensed Professional Counselor (LPC) in the State of Texas. Licensed to provide telehealth services throughout Texas. Member in good standing with the Texas State Board of Examiners of Professional Counselors.'
  },
  {
    title: 'Certifications',
    content: 'EMDR Certified Therapist through EMDRIA. Certified in Trauma-Focused Cognitive Behavioral Therapy (TF-CBT). Trained in Mindfulness-Based Stress Reduction (MBSR). Gottman Level 1 trained for couples counseling.'
  }
];

export default function Background() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      className="py-20 md:py-28"
      style={{ backgroundColor: '#E8DED4' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <h2 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-3xl md:text-4xl text-center mb-12"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-dark)',
              fontWeight: 400
            }}
          >
            My Professional Background
          </h2>

          <div>
            {backgrounds.map((item, index) => (
              <div 
                key={index}
                className="border-b"
                style={{ borderColor: 'rgba(0,0,0,0.15)' }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-5 flex items-center justify-between text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 
                    className="text-base md:text-lg"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-dark)',
                      fontWeight: 400
                    }}
                  >
                    {item.title}
                  </h3>
                  <span 
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
                    style={{ 
                      color: 'var(--text-dark)',
                      transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p 
                    className="text-sm md:text-base"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-medium)',
                      lineHeight: 1.7
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
