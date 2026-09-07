'use client';

import React from 'react';
import { TIMELINE_DATA } from '@/data/portfolioData';
import { Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto border-t border-dark-border">
      {/* Section Heading */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white hover:text-stroke-light transition-all duration-300">
          Work History
        </h2>
        <p className="font-mono text-xs sm:text-sm uppercase tracking-caps text-text-muted">
          Career &amp; Academic Timeline
        </p>
      </div>

      {/* Timeline Segments */}
      <div className="flex flex-col gap-5 max-w-3xl mx-auto">
        {TIMELINE_DATA.map((item, idx) => (
          <div
            key={idx}
            className={`group relative flex items-center justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
              item.current
                ? 'border-accent-sky/60 bg-gradient-to-r from-accent-blue/20 via-dark-card to-dark-card shadow-lg hover:border-accent-sky'
                : 'border-dark-border bg-dark-card/80 hover:border-white/30 hover:bg-dark-surface'
            }`}
            data-cursor={item.current ? 'Current<br>Active' : 'Milestone'}
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <div
                className={`size-12 rounded-xl flex items-center justify-center shrink-0 border ${
                  item.current
                    ? 'border-accent-sky/40 bg-accent-blue/30 text-accent-sky'
                    : 'border-white/10 bg-white/5 text-text-muted group-hover:text-white'
                }`}
              >
                {item.type === 'career' ? (
                  <Briefcase className="size-5" />
                ) : (
                  <GraduationCap className="size-5" />
                )}
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-accent-sky transition-colors">
                    {item.organization}
                  </h3>
                  {item.current && (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-accent-sky bg-accent-sky/10 border border-accent-sky/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      <Sparkles className="size-2.5" />
                      Immediate
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-text-muted">
                  {item.role}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono text-text-dim">
                  <MapPin className="size-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            {/* Year Badge in Jason's Style */}
            <div
              className={`font-display font-bold text-xl sm:text-2xl px-4 py-2 rounded-xl border shrink-0 ${
                item.current
                  ? 'border-accent-sky/40 bg-accent-blue/20 text-accent-sky'
                  : 'border-white/10 bg-white/5 text-text-muted group-hover:border-white/20 group-hover:text-white'
              }`}
            >
              {item.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
