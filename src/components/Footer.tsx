import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-mist bg-canvas-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <span className="font-display font-medium text-sm text-graphite">
            Kyle Dam (Phuong Nam Dam)
          </span>
          <p className="font-mono text-xs text-slate">
            Built with Next.js, TypeScript &amp; Tailwind CSS • Ventriloc Editorial Design System
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-steel hover:text-graphite transition-colors"
            title="GitHub"
          >
            <Github className="size-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-steel hover:text-graphite transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 text-steel hover:text-graphite transition-colors"
            title="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="#"
            className="p-2 text-steel hover:text-graphite transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
