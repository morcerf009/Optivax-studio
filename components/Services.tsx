import React from 'react';
import { SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white tracking-tighter">Our Creative Expertise</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          We combine artistic brilliance with structured production to deliver studio-level results across every genre.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="group glass-card p-10 rounded-[2.5rem] hover:border-indigo-500/50 transition-all duration-500 flex flex-col h-full bg-slate-950/40"
          >
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xl">
              {service.icon}
            </div>
            <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{service.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              {service.description}
            </p>
            
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-600 mb-4">Core Genres</p>
              <div className="flex flex-wrap gap-2">
                {service.genres.map((genre) => (
                  <span 
                    key={genre} 
                    className="text-[9px] font-black px-3 py-1 bg-slate-900 text-indigo-300 rounded-full border border-indigo-500/10"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;