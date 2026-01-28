import React from 'react';

const PartnerBadge = ({ name, subText }: { name: string; subText: string }) => (
  <div className="flex flex-col opacity-30 hover:opacity-100 transition-all cursor-default">
    <span className="text-white font-black text-[10px] tracking-widest leading-none">{name}</span>
    <span className="text-[6px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">{subText}</span>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden bg-slate-950">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[60rem] h-[60rem] bg-indigo-600/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 -right-20 w-[60rem] h-[60rem] bg-red-600/5 rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.1]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left Side Content (Grid span 7) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 glass-card mb-8">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-400">
                Premium Production Studio
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 text-white tracking-tighter">
              Epic Stories <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-indigo-500 to-purple-500">Realized.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed mx-auto lg:mx-0">
              We translate raw imagination into professional, publish-ready masterpieces. One studio. Complete production. Zero compromises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-20">
              <a
                href="#packages"
                className="w-full sm:w-auto px-12 py-5 bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-2xl hover:bg-indigo-500 transition-all"
              >
                View Packages
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-white/5 transition-all"
              >
                Request Quote
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 pt-10 border-t border-white/5">
              <PartnerBadge name="AMAZON" subText="KDP Certified" />
              <PartnerBadge name="WEBTOON" subText="Pro Layouts" />
              <PartnerBadge name="APPLE" subText="Hi-Res Ebook" />
            </div>
          </div>

          {/* Right Side Visual (Grid span 5) - MOONER PROJECT STYLE */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[440px] mx-auto">
              {/* Actual Red Silhouette Art Container */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 group">
                {/* Custom Red Atmospheric Visual */}
                <div className="absolute inset-0 bg-slate-900">
                  <img
                    src="/mooner-art.jpg"
                    alt="Mooner Project Reference"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-900/40 to-transparent"></div>
                  {/* Silhouette Graphic Overlay Effect */}
                  {/* Silhouette Graphic Overlay Effect - REMOVED */}
                </div>

                {/* Testimonial Integrated Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-[2rem] border border-red-500/20 bg-slate-950/60 backdrop-blur-3xl">
                  <p className="text-sm font-bold italic text-white leading-relaxed mb-6">
                    "Optivax delivered the 'MOONER' project with studio consistency that exceeded every expectation."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 shadow-lg">
                      <img
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        alt="Alex A."
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Alex A.</p>
                      <p className="text-[8px] font-bold text-red-500 uppercase tracking-widest mt-1">Author of Mooner</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glows */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-[80px]"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;