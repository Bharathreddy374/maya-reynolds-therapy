import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      {/* Top Dark Green Bar */}
      <div 
        className="py-4"
        style={{ backgroundColor: 'var(--primary)' }}
      >
      </div>

      {/* Main Footer Content */}
      <div 
        className="py-16"
        style={{ backgroundColor: 'var(--secondary)' }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Column 1 - Practice Info */}
            <div>
              <h3 
                className="text-xl mb-6"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-dark)',
                  fontWeight: 400
                }}
              >
                Dr. Maya Reynolds
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-medium)',
                  lineHeight: 1.7
                }}
              >
                1234 Therapy Lane, Suite 100<br />
                Austin, TX 78701
              </p>
              <p 
                className="text-sm mb-2"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-medium)'
                }}
              >
                <a href="tel:+15125550123" className="hover:underline">
                  (512) 555-0123
                </a>
              </p>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-medium)'
                }}
              >
                <a href="mailto:hello@mayareynolds.com" className="hover:underline">
                  hello@mayareynolds.com
                </a>
              </p>
            </div>

            {/* Column 2 - Hours */}
            <div>
              <h3 
                className="text-xl mb-6"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-dark)',
                  fontWeight: 400
                }}
              >
                Hours
              </h3>
              <div 
                className="text-sm space-y-2"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-medium)',
                  lineHeight: 1.7
                }}
              >
                <p>Monday - Thursday: 9am - 6pm</p>
                <p>Friday: 9am - 2pm</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Column 3 - Find Links */}
            <div>
              <h3 
                className="text-xl mb-6"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-dark)',
                  fontWeight: 400
                }}
              >
                Find
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '#about', label: 'About' },
                  { href: '#services', label: 'Services' },
                  { href: '#faq', label: 'FAQ' },
                  { href: '#contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:underline"
                      style={{ 
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-medium)'
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dark Bar */}
      <div 
        className="py-4"
        style={{ backgroundColor: 'var(--text-dark)' }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="#"
                className="text-xs hover:underline"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs hover:underline"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}
              >
                Good Faith Estimate
              </Link>
              <Link
                href="#"
                className="text-xs hover:underline"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}
              >
                Accessibility
              </Link>
            </div>
            <p 
              className="text-xs"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              © 2025 Dr. Maya Reynolds Therapy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
