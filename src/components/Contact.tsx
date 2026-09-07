'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, Copy, FileText, ArrowUpRight } from 'lucide-react';

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
    <section id="contact" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-dark-border">
      <div className="space-y-16">
        {/* Jason Immanuel Signature Callout Header */}
        <div className="space-y-4 max-w-4xl">
          <h3 className="font-mono text-xs sm:text-sm uppercase tracking-caps text-text-dim">
            A project, an idea, a question?
          </h3>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white hover:text-accent-sky transition-colors">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-3 underline-on-hover"
              data-cursor="Email<br>Me ✉️"
            >
              <span>{PERSONAL_INFO.email}</span>
              <ArrowUpRight className="size-8 sm:size-12 opacity-80" />
            </a>
          </h2>
        </div>

        {/* Two-Column Detail & Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed">
              I am currently based in Sydney and open to full-time Junior/Graduate Software Engineer, Full-Stack Developer, and Systems Engineering roles. Whether you have an open opportunity, an interesting project, or just want to connect, feel free to reach out.
            </p>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-dark-border bg-dark-card/60">
                <div className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent-sky shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-caps text-text-dim block">
                    Location
                  </span>
                  <span className="font-display font-medium text-sm text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Email & One-Click Copy */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-dark-border bg-dark-card/60">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent-sky shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-caps text-text-dim block">
                      Primary Contact
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-display font-medium text-sm text-white hover:text-accent-sky transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-text-muted hover:text-white hover:border-white/30 transition-colors"
                  title="Copy email to clipboard"
                  data-cursor="Copy"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="size-4 text-emerald-400" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels in Jason's Style */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-caps text-text-dim block">
                Follow &amp; Verified Profiles
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 font-display text-xs font-semibold text-[#2d76c0] hover:text-white hover:border-[#2d76c0] hover:bg-[#2d76c0]/20 transition-all duration-300"
                  data-cursor="LinkedIn"
                >
                  <Linkedin className="size-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 font-display text-xs font-semibold text-[#4c86c0] hover:text-white hover:border-[#4c86c0] hover:bg-[#4c86c0]/20 transition-all duration-300"
                  data-cursor="GitHub"
                >
                  <Github className="size-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Kyle_Dam_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 font-display text-xs font-semibold text-[#88a4c0] hover:text-white hover:border-[#88a4c0] hover:bg-[#88a4c0]/20 transition-all duration-300"
                  data-cursor="PDF"
                >
                  <FileText className="size-4" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7 rounded-2xl border border-dark-border bg-dark-card/80 backdrop-blur-sm p-7 sm:p-9 space-y-6">
            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold text-white">
                Send a Message
              </h3>
              <p className="font-sans text-xs text-text-dim">
                Have a role or inquiry? Leave a note and I will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-center space-y-3">
                <CheckCircle2 className="size-10 text-accent-sky mx-auto" />
                <h4 className="font-display text-lg font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-text-muted">
                  Thank you for reaching out. I will reply to your email address shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] uppercase tracking-caps text-text-dim">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jason Immanuel"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-dark-surface border border-dark-border px-4 py-3 text-sm text-white placeholder:text-text-dim/60 rounded-xl focus:outline-none focus:border-accent-sky transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] uppercase tracking-caps text-text-dim">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-dark-surface border border-dark-border px-4 py-3 text-sm text-white placeholder:text-text-dim/60 rounded-xl focus:outline-none focus:border-accent-sky transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] uppercase tracking-caps text-text-dim">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your role, team, or opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-dark-surface border border-dark-border px-4 py-3 text-sm text-white placeholder:text-text-dim/60 rounded-xl focus:outline-none focus:border-accent-sky transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-display text-xs uppercase tracking-widest font-bold bg-white text-dark hover:bg-accent-sky hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  data-cursor="Send"
                >
                  <Send className="size-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
