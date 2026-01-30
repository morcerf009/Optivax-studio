import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.history.back(); }}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 font-bold text-sm uppercase tracking-widest"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </a>

                <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                    Privacy Policy
                </h1>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-12">
                    Effective Date: January 30, 2026
                </p>

                <div className="prose prose-invert prose-slate max-w-none space-y-10">
                    <p className="text-lg text-slate-300 leading-relaxed">
                        This Privacy Policy explains how Optivax Studios ("we", "us", or "our") collects, uses, shares, and protects data when you visit our website or use our services.
                    </p>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">1. Information We Collect</h2>
                        <p className="text-slate-400 mb-4">We may collect data such as:</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Name and contact details</li>
                            <li>Email address</li>
                            <li>Project details you submit</li>
                            <li>Payment information via third-party processors</li>
                            <li>Cookies and analytics data</li>
                        </ul>
                        <p className="text-slate-400 mt-4">We collect data to provide and improve services you request.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">2. Use of Personal Information</h2>
                        <p className="text-slate-400 mb-4">We use your information to:</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Respond to inquiries and deliver services</li>
                            <li>Process payments</li>
                            <li>Communicate updates or offers</li>
                            <li>Improve website functionality</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">3. Cookies and Tracking</h2>
                        <p className="text-slate-400">
                            We use cookies and similar technologies to understand usage patterns and enhance site experience. You can manage cookie settings via your browser.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">4. Sharing of Information</h2>
                        <p className="text-slate-400 mb-4">We do not sell your personal data. We may share with:</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Payment providers for processing</li>
                            <li>Legal authorities if required</li>
                            <li>Partners only as needed to deliver services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">5. Data Security</h2>
                        <p className="text-slate-400">
                            We implement industry-standard measures to protect your information, but no system is 100% secure. Use the site at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">6. Third-Party Links</h2>
                        <p className="text-slate-400">
                            Our site may contain links to external sites. We are not responsible for their policies or practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">7. Your Rights</h2>
                        <p className="text-slate-400 mb-4">You may request:</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Access to your data</li>
                            <li>Correction or deletion</li>
                            <li>Contact preferences</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">8. Children's Privacy</h2>
                        <p className="text-slate-400">
                            We do not knowingly collect information from individuals under 18.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">9. Policy Changes</h2>
                        <p className="text-slate-400">
                            We may update this policy. Updates will be posted here for transparency.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">10. Contact</h2>
                        <p className="text-slate-400">
                            For privacy inquiries, use the <a href="#contact" className="text-indigo-400 hover:underline">contact form</a> on our website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
