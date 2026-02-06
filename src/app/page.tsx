import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import Support from '@/components/Support';
import About from '@/components/About';
import Office from '@/components/Office';
import FAQ from '@/components/FAQ';
import Background from '@/components/Background';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero - Arch image left, text right */}
        <Hero />
        
        {/* Intro - "Live a fulfilling life" text left, image right */}
        <Intro />
        
        {/* Services/Specialties - 3 cards with circular images */}
        <Services />
        
        {/* Support - "You don't have to do this alone" image left, green bg right */}
        <Support />
        
        {/* About - "Hi, I'm Maya" text left, overlapping images right */}
        <About />
        
        {/* Our Office - Custom creative section */}
        <Office />
        
        {/* FAQ - Image left, accordion right */}
        <FAQ />
        
        {/* Professional Background - Centered accordion */}
        <Background />
        
        {/* Contact - Simple contact section */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
