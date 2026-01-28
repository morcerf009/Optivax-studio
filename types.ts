import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  // Added React import to resolve the 'Cannot find namespace React' error
  icon: React.ReactNode;
  genres: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  color: string;
}

export interface NavLink {
  name: string;
  href: string;
}
