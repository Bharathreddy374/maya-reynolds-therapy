'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'Do you take insurance?',
    answer: 'I am an out-of-network provider for most insurance plans. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. Many clients are able to receive partial reimbursement depending on their plan\'s out-of-network benefits.'
  },
  {
    question: 'What are your rates?',
    answer: 'Individual therapy sessions are $175 for 50 minutes. I offer a free 15-minute phone consultation to discuss your needs and answer any questions before we begin. I also offer a sliding scale for clients who need financial assistance—please ask if this would be helpful for you.'
  },
  {
    question: 'Do you have any openings?',
    answer: 'I typically have a few openings each week for new clients. I offer both morning and evening appointments to accommodate different schedules. Please reach out to check my current availability, and we can find a time that works best for you.'
  },
  {
    question: 'What can I expect in our first session?',
    answer: 'Our first session is all about getting to know each other. We\'ll discuss what brings you to therapy, your history, and your goals. I\'ll share a bit about my approach and we\'ll determine together if we\'re a good fit. There\'s no pressure—this is about finding the right support for you.'
  },
  {
    question: 'Do you offer virtual sessions?',
    answer: 'Yes! I offer secure, HIPAA-compliant video sessions for clients throughout Texas. Telehealth can be just as effective as in-person therapy and offers greater flexibility for your schedule.'
  }
];

export default function FAQ() {
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
      id="faq" 
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=750&fit=crop"
                alt="Peaceful flowers in natural light"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="py-8">
            <h2 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-3xl md:text-4xl mb-12"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-dark)',
                fontWeight: 400
              }}
            >
              FAQ
            </h2>

            <div>
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b"
                  style={{ borderColor: 'rgba(0,0,0,0.1)' }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-5 flex items-center justify-between text-left"
                    aria-expanded={openIndex === index}
                  >
                    <h3 
                      className="text-base md:text-lg pr-8"
                      style={{ 
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-dark)',
                        fontWeight: 400
                      }}
                    >
                      {faq.question}
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
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
