import React from 'react';
import { WORKFLOW } from '../constants.tsx';

const Workflow: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white tracking-tighter uppercase italic">How We Work</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Creativity meets structure. Our studio process ensures high-quality execution and zero missed deadlines.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
          {WORKFLOW.map((step, idx) => (
            <div key={step.title} className="text-center group flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:border-indigo-400 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:bg-slate-900 transition-all duration-500 z-20">
                {step.icon}
              </div>
              <div className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">Phase 0{idx + 1}</div>
              <h4 className="text-xl font-black text-white mb-4 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{step.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;