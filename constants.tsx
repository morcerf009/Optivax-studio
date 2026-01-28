import React from 'react';
import { 
  BookOpen, 
  PenTool, 
  Users, 
  Palette, 
  Layout, 
  FileCheck,
  Facebook,
  Instagram,
  Youtube,
  Search,
  Zap,
  CheckCircle2,
  Clock,
  Rocket
} from 'lucide-react';
import { ServiceItem, PricingPackage, NavLink } from './types.ts';

// Refined TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.76-.53-1.43-1.18-1.97-1.92v6.43c.02 2.09-.59 4.27-2.13 5.75-1.54 1.48-3.72 2.05-5.78 1.83-2.06-.22-4.1-1.4-5.18-3.21-1.08-1.81-1.19-4.18-.31-6.07.88-1.89 2.76-3.28 4.82-3.6 1.61-.25 3.32.1 4.67 1.1v-9c-.01-1.15-.01-2.31 0-3.46z"/>
  </svg>
);

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'How We Work', href: '#workflow' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ebook-creation',
    title: 'Ebook Art & Visual Layout',
    description: 'Complete visual design for digital readers, ensuring your story looks as good as it reads.',
    icon: <BookOpen className="w-8 h-8" />,
    genres: ['Romance', 'Thrillers', 'Fantasy', 'Sci-Fi', 'Young Adult', 'Non-fiction']
  },
  {
    id: 'comic-art',
    title: 'Comic Illustration & Page Art',
    description: 'Dynamic storytelling through studio-quality pencils, inks, and colors.',
    icon: <PenTool className="w-8 h-8" />,
    genres: ['Superhero', 'Action', 'Fantasy', 'Sci-Fi', 'Webcomics', 'Horror']
  },
  {
    id: 'character-design',
    title: 'Character Design',
    description: 'Original character concepts with turnarounds and expression sheets for IP building.',
    icon: <Users className="w-8 h-8" />,
    genres: ['All Genres']
  },
  {
    id: 'cover-design',
    title: 'Cover Design',
    description: 'Market-ready, high-conversion book covers for digital and print platforms.',
    icon: <Palette className="w-8 h-8" />,
    genres: ['Ebook', 'Print', 'Comic']
  },
  {
    id: 'layout-formatting',
    title: 'Page Layout & Formatting',
    description: 'Professional typesetting and digital formatting for all major publishing platforms.',
    icon: <Layout className="w-8 h-8" />,
    genres: ['Amazon KDP', 'ePub', 'PDF']
  },
  {
    id: 'delivery-ready',
    title: 'Publish-Ready Files',
    description: '100% compliant technical delivery for Amazon, Apple Books, and Print-on-Demand.',
    icon: <FileCheck className="w-8 h-8" />,
    genres: ['Global Standards']
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'ebook-starter',
    name: 'Ebook Starter',
    price: '$799 – $1,299',
    description: 'Best for first-time authors & entrepreneurs looking for a professional start.',
    features: [
      'Story concept refinement',
      'Visual layout & formatting',
      'Professional editing & proofreading',
      'Custom ebook cover design',
      'Amazon KDP & digital files'
    ],
    cta: 'Get Started',
    color: 'border-blue-500/50'
  },
  {
    id: 'comic-pro',
    name: 'Comic Creator Pro',
    price: '$1,999 – $3,499',
    description: 'Best for indie comic creators & webcomic artists building their vision.',
    features: [
      'Story development & scripting',
      'Full character design',
      '10–20 fully illustrated pages',
      'Lettering & page layout',
      'Print & digital-ready files'
    ],
    cta: 'Request a Quote',
    popular: true,
    color: 'border-indigo-500/50'
  },
  {
    id: 'full-studio',
    name: 'Full Production Studio',
    price: '$5,000+',
    description: 'Complete end-to-end production for serious brands and IP builders.',
    features: [
      'Complete concept & development',
      'Ebook or comic scripting',
      'Full illustration & visual design',
      'Premium page formatting',
      'Publishing & launch support'
    ],
    cta: 'Book Discovery Call',
    color: 'border-purple-500/50'
  }
];

export const WORKFLOW = [
  {
    title: 'Discovery & Idea Review',
    desc: 'We sit down to understand your vision, goals, and the scope of your story.',
    icon: <Search className="w-6 h-6" />
  },
  {
    title: 'Blueprint & Timeline',
    desc: 'A structured roadmap with clear milestones and guaranteed delivery dates.',
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: 'Production Phase',
    desc: 'Our studio team handles illustration, design, layout, and formatting.',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: 'Feedback & Revisions',
    desc: 'Collaborative checkpoints ensuring every detail aligns with your vision.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Final Delivery & Launch',
    desc: 'Receive your print & digital-ready files, 100% owned by you.',
    icon: <Rocket className="w-6 h-6" />
  }
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/comicorbit', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', url: 'https://www.instagram.com/comic_orbit', icon: <Instagram className="w-5 h-5" /> },
  { name: 'TikTok', url: 'https://www.tiktok.com/@comicorbitart', icon: <TikTokIcon className="w-5 h-5" /> },
  { name: 'YouTube', url: 'https://www.youtube.com/@ComicOrbit-7', icon: <Youtube className="w-5 h-5" /> }
];