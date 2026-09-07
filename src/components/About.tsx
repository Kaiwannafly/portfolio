'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-dark-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-caps text-text-dim">
              About Me
            </h3>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Bridging technical precision with thoughtful user experience.
            </h2>
          </div>

          <div className="space-y-4 font-sans text-text-muted text-base sm:text-lg leading-relaxed pt-2">
            <p>
              I am a Software Engineer and Information Technology graduate from the{' '}
              <strong className="text-white font-medium">University of Technology Sydney (UTS)</strong>, majoring in{' '}
              <strong className="text-white font-medium">Enterprise Systems Development</strong>.
            </p>
            <p>
              Across my degree, I maintained a <strong className="text-white font-medium">WAM of 80.54 (GPA 6.09 / 7.00)</strong>, earning High Distinctions in Advanced Software Development (97), Introduction to Software Development (96), Data Structures &amp; Algorithms (89), .NET Application Development (89), and Software Architecture (86).
            </p>
            <p>
              My academic trajectory spans the United States (studying Big Data &amp; Computer Science at Suffolk University in Boston, MA) and Australia (UTS Sydney). This multicultural education cultivated a versatile engineering mindset, high adaptability to emerging technology stacks, and strong cross-functional communication skills.
            </p>
          </div>
        </div>

        {/* Right Column: Key Stats Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-dark-border bg-dark-card/80 backdrop-blur-sm flex flex-col justify-between gap-3 hover:border-white/30 transition-all duration-300"
              data-cursor={stat.value}
            >
              <span className="font-mono text-[11px] uppercase tracking-caps text-text-dim">
                {stat.label}
              </span>
              <div className="space-y-0.5">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs text-text-muted block">
                  {stat.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
