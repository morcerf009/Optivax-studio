import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Indie Author",
        text: "Optivax transformed my manuscript into a bestseller-ready ebook. The layout and cover design were absolutely stunning!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Marcus Thorne",
        role: "Webcomic Creator",
        text: "The character designs they produced were exactly what I envisioned. Professional, timely, and incredibly talented team.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Publisher",
        text: "We've used Optivax for three series launches now. Their full production studio capability saves us weeks of coordination.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 4,
        name: "David Chen",
        role: "Sci-Fi Writer",
        text: "The world-building art they created for my universe bible was mind-blowing. Truly premium top-tier work.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/86.jpg"
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                    Creator <span className="text-indigo-500">Stories</span>
                </h2>
                <p className="text-slate-400 font-medium max-w-2xl mx-auto">
                    Hear from the authors and artists who brought their visions to life with Optivax.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Main Card */}
                <div className="glass-card rounded-[2.5rem] p-8 md:p-12 relative border border-white/10 bg-slate-900/40 backdrop-blur-md">
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-indigo-500/20" />

                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-lg shadow-indigo-500/20">
                            <img
                                src={TESTIMONIALS[currentIndex].image}
                                alt={TESTIMONIALS[currentIndex].name}
                                className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                            />
                        </div>

                        <div className="flex gap-1 mb-6 text-amber-400">
                            {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                        </div>

                        <p className="text-xl md:text-2xl text-slate-200 font-medium italic leading-relaxed mb-8">
                            "{TESTIMONIALS[currentIndex].text}"
                        </p>

                        <div>
                            <h4 className="text-lg font-black text-white uppercase tracking-widest">{TESTIMONIALS[currentIndex].name}</h4>
                            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mt-1">{TESTIMONIALS[currentIndex].role}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-white/10 text-white hover:bg-indigo-600 transition-all shadow-xl z-20 group"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-white/10 text-white hover:bg-indigo-600 transition-all shadow-xl z-20 group"
                >
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {TESTIMONIALS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentIndex(idx);
                            }}
                            className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
