import React from 'react';
import { ShieldCheck, Award, Star, BadgeCheck, Lock } from 'lucide-react';

interface TrustBadgeProps {
    variant?: 'hero' | 'footer' | 'compact';
}

const TrustBadges: React.FC<TrustBadgeProps> = ({ variant = 'hero' }) => {
    const badges = [
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: 'Verified Studio',
            subtitle: 'Trusted Partner'
        },
        {
            icon: <Award className="w-5 h-5" />,
            title: '500+ Projects',
            subtitle: 'Delivered'
        },
        {
            icon: <Star className="w-5 h-5" />,
            title: '4.9/5 Rating',
            subtitle: 'Client Reviews'
        },
        {
            icon: <Lock className="w-5 h-5" />,
            title: 'Secure Payment',
            subtitle: '100% Protected'
        }
    ];

    if (variant === 'compact') {
        return (
            <div className="flex flex-wrap items-center justify-center gap-6">
                {badges.map((badge) => (
                    <div
                        key={badge.title}
                        className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                        <span className="text-indigo-500">{badge.icon}</span>
                        <span className="text-xs font-bold uppercase tracking-wider">{badge.title}</span>
                    </div>
                ))}
            </div>
        );
    }

    if (variant === 'footer') {
        return (
            <div className="flex flex-wrap items-center justify-center gap-8 py-6">
                {badges.map((badge) => (
                    <div
                        key={badge.title}
                        className="flex items-center gap-3 glass-card px-4 py-2 rounded-full"
                    >
                        <span className="text-indigo-400">{badge.icon}</span>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">{badge.title}</span>
                            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">{badge.subtitle}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {badges.map((badge) => (
                <div
                    key={badge.title}
                    className="glass-card rounded-2xl p-4 lg:p-6 flex flex-col items-center text-center group hover:border-indigo-500/40 transition-all"
                >
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 group-hover:bg-indigo-500/20 transition-colors">
                        {badge.icon}
                    </div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1">{badge.title}</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{badge.subtitle}</p>
                </div>
            ))}
        </div>
    );
};

export default TrustBadges;
