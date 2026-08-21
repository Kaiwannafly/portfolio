'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Copy } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-mist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column: Direct Info */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate uppercase tracking-caps">
            <span className="size-1.5 rounded-full bg-ember"></span>
            Get In Touch
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-normal text-graphite tracking-display leading-tight">
            Let&apos;s build something exceptional together.
          </h2>

          <p className="text-steel text-base leading-relaxed">
            I am currently open to full-time Software Engineer, Frontend Developer, and Graduate Technology roles. Whether you have a question or an opportunity, feel free to reach out directly.
          </p>

          <div className="space-y-3 pt-2">
            {/* Email Card */}
            <div className="p-4 bg-canvas-white border border-mist rounded-card flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-md bg-fog flex items-center justify-center text-graphite">
                  <Mail className="size-4" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-slate block">Email Address</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-medium text-graphite hover:text-ember transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyToClipboard}
                className="p-2 text-steel hover:text-graphite rounded-md transition-colors"
                title="Copy email"
              >
                {copiedEmail ? <CheckCircle2 className="size-4 text-ember" /> : <Copy className="size-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 bg-canvas-white border border-mist rounded-card flex items-center gap-3">
              <div className="size-9 rounded-md bg-fog flex items-center justify-center text-graphite">
                <Phone className="size-4" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-slate block">Phone Number</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                  className="text-sm font-medium text-graphite hover:text-ember transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 bg-canvas-white border border-mist rounded-card flex items-center gap-3">
              <div className="size-9 rounded-md bg-fog flex items-center justify-center text-graphite">
                <MapPin className="size-4" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-slate block">Location</span>
                <span className="text-sm font-medium text-graphite">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="bg-canvas-white border border-mist rounded-card p-6 sm:p-8 space-y-6">
          <h3 className="font-display text-xl font-medium text-graphite">
            Send a Direct Message
          </h3>

          {submitted ? (
            <div className="p-6 bg-fog rounded-md text-center space-y-2">
              <CheckCircle2 className="size-8 text-ember mx-auto" />
              <h4 className="text-base font-medium text-graphite">Thank you for your message!</h4>
              <p className="text-xs text-steel">
                I will get back to you at your email address as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-caps text-slate mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-fog border border-mist px-4 py-2.5 text-sm text-graphite rounded-button focus:outline-none focus:border-graphite transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-caps text-slate mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-fog border border-mist px-4 py-2.5 text-sm text-graphite rounded-button focus:outline-none focus:border-graphite transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-caps text-slate mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, team, or opportunity..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-fog border border-mist px-4 py-2.5 text-sm text-graphite rounded-button focus:outline-none focus:border-graphite transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="size-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
