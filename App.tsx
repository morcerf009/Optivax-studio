
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

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
