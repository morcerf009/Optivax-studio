import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';
import { PRICING_PACKAGES } from '../constants.tsx';

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white tracking-tighter uppercase italic">Studio Packages</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Transparent, structured pricing designed for indie creators and established brands alike.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRICING_PACKAGES.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`relative p-10 rounded-[3rem] glass-card border-2 ${pkg.color} flex flex-col h-full ${
              pkg.popular ? 'lg:-translate-y-4 z-10 bg-slate-950/60' : 'opacity-90'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-1.5 rounded-full text-[9px] font-black tracking-[0.3em] flex items-center gap-2 shadow-2xl">
                <Star className="w-3 h-3 fill-current" />
                MOST POPULAR
              </div>
            )}

            <div className="mb-12">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{pkg.name}</h3>
              <p className="text-xs text-slate-500 mb-8 min-h-[32px]">{pkg.description}</p>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase font-black tracking-[0.4em] text-indigo-500/60">Starting Rate</span>
                <div className="text-3xl font-black text-white tracking-tighter">
                  {pkg.price}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-12 flex-grow">
              {pkg.features.map((feature) => (
                <div key={feature} className="flex items-start gap-4">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-xs font-bold leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact"
              className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-center transition-all ${
                pkg.popular 
                  ? 'bg-indigo-600 text-white shadow-xl hover:bg-indigo-500' 
                  : 'bg-slate-900 hover:bg-slate-800 text-white border border-white/5'
              }`}
            >
              {pkg.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;