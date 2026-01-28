import React from 'react';

const About: React.FC = () => {
  const highlights = [
    { title: 'Studio-Level Quality', desc: 'No gig-market inconsistency. Every frame and page follows professional standards.' },
    { title: '100% Client Ownership', desc: 'You own everything we create. Full rights, full control, forever.' },
    { title: 'Global Production', desc: 'Capable of handling complex IPs and high-volume releases for US & European markets.' }
  ];

  const images = [
    "https://images.unsplash.com/photo-1544273677-277914c9ad4a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1">
          <div className="inline-block px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
            The Studio Difference
          </div>
          <h2 className="text-3xl lg:text-5xl font-black mb-8 text-white tracking-tighter leading-tight">
            Not Freelancers. <br />
            <span className="text-transparent bg-clip-text accent-gradient">A Creative Powerhouse.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
            At Optivax Studios, we believe that great stories deserve more than just a "quick gig." They deserve a dedicated team who understands the nuances of visual flow, character depth, and international publishing standards.
          </p>
          
          <div className="space-y-8">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-5 group">
                <div className="w-1.5 h-16 bg-slate-800 rounded-full overflow-hidden flex flex-col justify-end">
                  <div className="w-full h-0 group-hover:h-full bg-indigo-500 transition-all duration-500"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full max-w-[600px]">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src={images[0]} alt="Process 1" className="rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl border border-white/5" />
              <img src={images[1]} alt="Process 2" className="rounded-3xl w-full aspect-square object-cover shadow-2xl border border-white/5" />
            </div>
            <div className="space-y-4 pt-12">
              <img src={images[2]} alt="Process 3" className="rounded-3xl w-full aspect-square object-cover shadow-2xl border border-white/5" />
              <img src={images[3]} alt="Process 4" className="rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl border border-white/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;