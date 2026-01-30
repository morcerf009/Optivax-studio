import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Comic',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          subject: `New Quote Request from ${formData.name}`,
          from_name: 'Optivax Studios Website',
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: 'Comic', message: '' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center py-20 animate-fade-in">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Request Received!</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-lg font-medium">
          Thank you for reaching out to Optivax Studios. Our team will review your project and get back to you within 24-48 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-indigo-400 font-black uppercase tracking-widest text-xs hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center py-20 animate-fade-in">
        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 mx-auto mb-6">
          <Send className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Something Went Wrong</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-lg font-medium">
          We couldn't send your request. Please try again or email us directly at optivaxglobal@gmail.com
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-indigo-400 font-black uppercase tracking-widest text-xs hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-5xl mx-auto glass-card rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/5">
        <div className="lg:w-2/5 bg-indigo-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter leading-none">Let's Create <br />Something Iconic.</h2>
            <p className="text-indigo-100/80 mb-8 leading-relaxed text-lg font-medium">
              Tell us about your story. Whether it's a sprawling epic or a short indie piece, we have the team to bring it to life.
            </p>
          </div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-indigo-200">Email Us</p>
                <p className="font-bold">optivaxglobal@gmail.com</p>
              </div>
            </div>
            <p className="text-[10px] italic opacity-70 font-bold uppercase tracking-widest">
              * Average response time: &lt; 24 hours
            </p>
          </div>
        </div>

        <div className="lg:w-3/5 p-12 bg-slate-900/40 backdrop-blur-3xl">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`w-full bg-slate-950 border rounded-2xl px-5 py-4 focus:outline-none transition-all text-white font-medium ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/5 focus:border-indigo-500'
                    }`}
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest pl-2">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full bg-slate-950 border rounded-2xl px-5 py-4 focus:outline-none transition-all text-white font-medium ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/5 focus:border-indigo-500'
                    }`}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest pl-2">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Type</label>
              <select
                className="w-full bg-slate-950 border border-white/5 rounded-2xl px-5 py-4 focus:border-indigo-500 focus:outline-none transition-all appearance-none text-white font-medium"
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
              >
                <option value="Comic">Comic Art / Webcomic</option>
                <option value="Ebook">Ebook Creation & Layout</option>
                <option value="Character">Character Design</option>
                <option value="Cover">Cover Design Only</option>
                <option value="Custom">Custom Studio Production</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Details</label>
              <textarea
                rows={4}
                placeholder="Briefly describe your story and what you're looking for..."
                className={`w-full bg-slate-950 border rounded-2xl px-5 py-4 focus:outline-none transition-all resize-none text-white font-medium ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/5 focus:border-indigo-500'
                  }`}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
              {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest pl-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-5 bg-indigo-600 rounded-2xl font-black text-white uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Send Request <Send className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;