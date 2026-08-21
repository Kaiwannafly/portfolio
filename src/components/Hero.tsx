import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-8 md:gap-10 max-w-4xl">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 bg-ash border border-mist/80 px-3.5 py-1.5 rounded-pill self-start">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ember"></span>
          </span>
          <span className="font-mono text-xs text-steel font-medium">
            {PERSONAL_INFO.status}
          </span>
        </div>

        {/* Main Display Heading (PolySans/Space Grotesk 400 weight editorial voice) */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal text-graphite tracking-display leading-[1.05]">
            Engineering robust systems &amp; modern web interfaces.
          </h1>
          <p className="text-base sm:text-lg text-steel leading-relaxed max-w-2xl font-normal">
            Hi, I&apos;m <span className="text-graphite font-medium">Kyle Dam</span> (Phuong Nam Dam) — an Information Technology graduate from{' '}
            <span className="text-graphite font-medium">UTS</span> with a High Distinction academic standing (WAM 80.54). Passionate about full-stack architecture, clean code, and user-centered design.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a href="#projects" className="btn-primary">
            <span>Explore Projects</span>
            <ArrowDown className="size-4" />
          </a>
          <a
            href={PERSONAL_INFO.resumePath}
            download="Kyle_Dam_Resume.pdf"
            className="btn-ghost"
          >
            <FileText className="size-4" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Metadata Strip */}
        <div className="pt-8 border-t border-mist grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-caps text-slate mb-1">Location</span>
            <span className="text-sm font-medium text-graphite flex items-center gap-1.5">
              <MapPin className="size-3.5 text-ember" />
              Sydney, Australia
            </span>
          </div>

          <div>
            <span className="block font-mono text-[11px] uppercase tracking-caps text-slate mb-1">Education</span>
            <span className="text-sm font-medium text-graphite">UTS (BIT Enterprise)</span>
          </div>

          <div>
            <span className="block font-mono text-[11px] uppercase tracking-caps text-slate mb-1">Academic Standing</span>
            <span className="text-sm font-medium text-graphite">WAM 80.54 (HD)</span>
          </div>

          <div>
            <span className="block font-mono text-[11px] uppercase tracking-caps text-slate mb-1">Connect</span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-steel hover:text-graphite transition-colors"
                title="GitHub"
              >
                <Github className="size-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-steel hover:text-graphite transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-steel hover:text-graphite transition-colors"
                title="Email"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
