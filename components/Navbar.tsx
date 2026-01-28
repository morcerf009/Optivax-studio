import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants.tsx';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Unified Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full transition-transform duration-500 group-hover:rotate-[15deg]">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-500/20" />
                <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="currentColor" className="text-indigo-600" />
                <path d="M50 20 V80" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <circle cx="50" cy="50" r="10" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-xl lg:text-2xl tracking-tighter text-white uppercase">
                OPTIVAX<span className="text-indigo-500">.</span>
              </span>
              <span className="text-[7px] font-black tracking-[0.5em] text-slate-500 uppercase mt-1">Studio Production</span>
            </div>
          </a>

          {/* Desktop Nav - Perfectly Balanced */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8 mr-8 border-r border-white/10 pr-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.2em] relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-xl active:scale-95"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-slate-950 z-[100] flex flex-col p-10 animate-fade-in">
            <div className="flex justify-between items-center mb-16">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.2" />
                      <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="#4f46e5" />
                      <path d="M50 20 V80" stroke="white" strokeWidth="4" />
                      <circle cx="50" cy="50" r="10" fill="white" />
                    </svg>
                  </div>
                  <span className="font-display font-black text-2xl text-white uppercase tracking-tighter">OPTIVAX<span className="text-indigo-500">.</span></span>
               </div>
               <button onClick={() => setIsOpen(false)}><X className="w-10 h-10 text-white" /></button>
            </div>
            <div className="flex flex-col gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white text-4xl font-black uppercase tracking-tighter transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-6 w-full text-center py-6 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-lg"
                onClick={() => setIsOpen(false)}
              >
                Request Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;