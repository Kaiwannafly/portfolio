'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-dark-border bg-dark-surface py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Monogram / Brand & Notice */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="font-display text-lg font-bold text-white tracking-wide">
            Kyle Dam (Phuong Nam Dam)
          </div>
          <p className="font-mono text-xs text-text-dim">
            Designed &amp; engineered with Next.js 14, React 19, TypeScript &amp; Tailwind CSS.
          </p>
        </div>

        {/* Back to Top Magnetic Button in Jason Immanuel Style */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:border-white/30 transition-colors"
              title="GitHub"
              data-cursor="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:border-white/30 transition-colors"
              title="LinkedIn"
              data-cursor="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="size-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:border-white/30 transition-colors"
              title="Email"
              data-cursor="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>

          <a
            href="#"
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 py-2.5 px-4 rounded-full border border-white/20 bg-dark-card hover:border-white text-white font-display text-xs uppercase tracking-wider transition-all duration-300"
            data-cursor="Top ↑"
          >
            <div className="size-5 rounded-full bg-white text-dark flex items-center justify-center group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowUp className="size-3" />
            </div>
            <span>Back to Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
