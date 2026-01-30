
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Pricing from './components/Pricing.tsx';
import Workflow from './components/Workflow.tsx';
import About from './components/About.tsx';
import Testimonials from './components/Testimonials.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import TermsOfService from './components/TermsOfService.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy-policy') {
        setCurrentPage('privacy');
        window.scrollTo(0, 0);
      } else if (hash === '#terms-of-service') {
        setCurrentPage('terms');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar scrolled={scrolled} />
        <main className="flex-grow">
          <PrivacyPolicy />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar scrolled={scrolled} />
        <main className="flex-grow">
          <TermsOfService />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />

      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-20 lg:py-32 bg-slate-900/50">
          <Services />
        </section>

        <section id="packages" className="py-20 lg:py-32">
          <Pricing />
        </section>

        <section id="workflow" className="py-20 lg:py-32 bg-slate-900/50">
          <Workflow />
        </section>

        <section id="about" className="py-20 lg:py-32">
          <About />
        </section>

        <section id="testimonials" className="py-20 lg:py-32 bg-slate-900/50">
          <Testimonials />
        </section>

        <section id="contact" className="py-20 lg:py-32 bg-indigo-950/20">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
