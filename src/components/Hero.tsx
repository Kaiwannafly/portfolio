'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-36 md:pt-44 pb-12 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ghost Watermark */}
      <div className="caption-title-ghost">
        KYLE DAM
      </div>

      <div className="relative z-10 space-y-8 max-w-5xl">
        {/* Subtitle with colored subtle links */}
        <div className="ph-appear text-sm sm:text-base md:text-lg text-text-muted leading-relaxed">
          Welcome to my portfolio! Also view my{' '}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d76c0] underline-on-hover font-medium"
            data-cursor="LinkedIn"
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4c86c0] underline-on-hover font-medium"
            data-cursor="GitHub"
          >
            GitHub
          </a>
          , and{' '}
          <a
            href={PERSONAL_INFO.resumePath}
            download="Kyle_Dam_Resume.pdf"
            className="text-[#88a4c0] underline-on-hover font-medium"
            data-cursor="Resume"
          >
            Resume
          </a>
          .
        </div>

        {/* Main Display Headline with Jason Immanuel Style Stroked Text */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
          Kyle Dam,<br />
          Software Engineer<br />
          systems <span className="inline-block text-white/40">→</span>{' '}
          <em className="text-stroke-light font-normal not-italic">focused</em>
        </h1>

        <p className="font-sans text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed pt-2">
          Information Technology graduate from the <strong className="text-white font-medium">University of Technology Sydney (UTS)</strong> with a High Distinction academic record (WAM 80.06 / GPA 6.00). Architecting scalable web applications, high-concurrency Go services, and enterprise .NET systems.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 pt-16 flex items-center justify-between border-t border-dark-border/60 mt-12">
        <div className="flex items-center gap-6 font-mono text-xs text-text-dim uppercase tracking-caps">
          <span>Sydney, Australia</span>
          <span>•</span>
          <span>UTS Enterprise Systems</span>
          <span>•</span>
          <span className="text-accent-blue font-medium">Available for Roles</span>
        </div>

        <a
          href="#hello-world"
          className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-text-muted hover:text-white transition-colors"
          data-cursor="Scroll<br>Down"
        >
          <span>Scroll</span>
          <div className="size-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors group-hover:translate-y-1 duration-300">
            <ArrowDown className="size-3.5" />
          </div>
        </a>
      </div>
    </section>
  );
}
