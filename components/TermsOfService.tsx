import React from 'react';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
                    Terms and Conditions
                </h1>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-12">
                    Optivax Studios
                </p>

                <div className="prose prose-invert prose-slate max-w-none space-y-10">
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Welcome to Optivax Studios. These Terms and Conditions ("Terms") govern your use of our website, services, products, and anything provided by Optivax Studios ("we", "us", or "our"). By accessing or using our site or services, you agree to these Terms. Please read carefully.
                    </p>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">1. Services</h2>
                        <p className="text-slate-400 mb-4">Optivax Studios offers digital creative services including:</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Comic art creation and illustration</li>
                            <li>eBook writing, editing, and design</li>
                            <li>Story development and character design</li>
                            <li>Publishing formats and digital delivery</li>
                        </ul>
                        <p className="text-slate-400 mt-4">All services are subject to project scope, deliverables, pricing, and timelines agreed in writing.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">2. Eligibility</h2>
                        <p className="text-slate-400">
                            You must be at least 18 years old to use our services. By using our website or services, you represent you meet this age requirement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">3. Orders, Payments, and Delivery</h2>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>All orders must be confirmed in writing with agreed payment terms.</li>
                            <li>We may require advance deposits before starting work.</li>
                            <li>Final delivery occurs after full payment.</li>
                            <li>Digital files are delivered via email or download link once payment clears.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">4. Revisions and Approvals</h2>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Each package includes a set number of revisions as specified in the project contract.</li>
                            <li>Additional revisions beyond that may incur extra charges.</li>
                            <li>Client approval is required to proceed with final production.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">5. Intellectual Property</h2>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>We retain ownership of all drafts, concepts, preliminary designs, and work not paid in full.</li>
                            <li>Upon full payment, ownership transfers to the client for final deliverables.</li>
                            <li>We may showcase completed projects in our portfolio unless a written NDA is provided.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">6. Refunds</h2>
                        <p className="text-slate-400 mb-4">Due to the bespoke nature of creative work:</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Refunds are not guaranteed.</li>
                            <li>Partial refunds may be issued at our discretion, based on work completed and expenses incurred.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">7. User Conduct</h2>
                        <p className="text-slate-400 mb-4">You agree not to:</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Use our services unlawfully</li>
                            <li>Upload harmful, illegal, or infringing content</li>
                            <li>Interfere with website operation</li>
                        </ul>
                        <p className="text-slate-400 mt-4">Violation of these rules may result in service termination.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">8. Limitation of Liability</h2>
                        <p className="text-slate-400">
                            Optivax Studios is not liable for indirect damages, lost profits, or data loss. Our liability is limited to the amount paid by you for the specific service in question.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">9. Changes to Terms</h2>
                        <p className="text-slate-400">
                            We may update these Terms at any time. Continued use of our services constitutes acceptance of any changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">10. Contact Information</h2>
                        <p className="text-slate-400">
                            If you have questions, contact us through the <a href="#contact" className="text-indigo-400 hover:underline">contact form</a> on our website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
