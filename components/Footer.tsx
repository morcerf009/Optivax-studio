import React from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full transition-transform duration-500 group-hover:rotate-[15deg]">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-500/20" />
                  <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="currentColor" className="text-indigo-600" />
                  <path d="M50 20 V80" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="10" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-xl lg:text-3xl tracking-tighter text-white uppercase">
                  OPTIVAX<span className="text-indigo-500">.</span>
                </span>
                <span className="text-[8px] font-black tracking-[0.5em] text-slate-500 uppercase mt-1">Studio Production</span>
              </div>
            </a>
            <p className="text-slate-400 max-w-sm mb-10 leading-relaxed text-lg">
              A premium production studio bridging the gap between raw storytelling and global publishing success.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-slate-500 hover:text-white hover:bg-indigo-600 transition-all shadow-xl"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Our Services</a></li>
              <li><a href="#packages" className="hover:text-indigo-400 transition-colors">Studio Packages</a></li>
              <li><a href="#workflow" className="hover:text-indigo-400 transition-colors">Our Workflow</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">Connect</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Studio</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Request Quote</a></li>
              <li className="text-indigo-100 font-black">optivaxglobal@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <p>© {new Date().getFullYear()} Optivax Studios. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;