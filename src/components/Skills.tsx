'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES, CORE_SKILLS } from '@/data/portfolioData';
import {
  FileCode,
  Code2,
  Terminal,
  Coffee,
  Layers,
  Database,
  Atom,
  Component,
  Globe,
  Palette,
  Server,
  Cpu,
  Boxes,
  Table,
  Cloud,
  Zap,
  GitBranch,
  Monitor,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  FileCode,
  Code2,
  Terminal,
  Coffee,
  Layers,
  Database,
  Atom,
  Component,
  Globe,
  Palette,
  Server,
  Cpu,
  Boxes,
  Table,
  Cloud,
  Zap,
  GitBranch,
  Monitor,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const displaySkills =
    activeCategory === 'All'
      ? CORE_SKILLS
      : SKILL_CATEGORIES.find((c) => c.title === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-dark-border">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white hover:text-stroke-light transition-all duration-300">
          Technical Skills
        </h2>
        <p className="font-mono text-xs sm:text-sm uppercase tracking-caps text-text-muted">
          My Engineering Toolbox
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full font-display text-xs tracking-wider uppercase transition-all duration-300 ${
              activeCategory === 'All'
                ? 'bg-white text-dark font-semibold shadow-lg'
                : 'bg-dark-card border border-dark-border text-text-muted hover:border-white/30 hover:text-white'
            }`}
            data-cursor="Toolbox"
          >
            All Skills (Core)
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-4 py-2 rounded-full font-display text-xs tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.title
                  ? 'bg-white text-dark font-semibold shadow-lg'
                  : 'bg-dark-card border border-dark-border text-text-muted hover:border-white/30 hover:text-white'
              }`}
              data-cursor="Filter"
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Tech Wall Grid */}
      <div
        className={`grid gap-4 sm:gap-6 mx-auto ${
          activeCategory === 'All'
            ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 max-w-5xl'
            : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-6xl'
        }`}
      >
        {displaySkills.map((skill, index) => {
          const Icon = iconMap[skill.iconName] || Code2;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="group relative flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl border border-dark-border bg-dark-card/60 backdrop-blur-sm overflow-hidden hover:border-accent-sky/50 hover:bg-dark-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl text-center"
              data-cursor={skill.name}
            >
              {/* Top Hairline Highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Ambient Hover Glow */}
              <div className="absolute -top-12 -right-12 size-32 bg-accent-sky/10 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="size-13 sm:size-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:text-accent-sky group-hover:border-accent-sky/40 group-hover:bg-accent-blue/10 group-hover:scale-110 transition-all duration-300 mb-3.5">
                <Icon className="size-6" />
              </div>

              {/* Skill Title */}
              <h3 className="font-display text-sm sm:text-base font-semibold text-white group-hover:text-accent-sky transition-colors">
                {skill.name}
              </h3>

              {skill.subtitle && (
                <span className="font-sans text-xs text-text-muted mt-1 leading-snug">
                  {skill.subtitle}
                </span>
              )}

              {/* Crisp Level Micro-Pill */}
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.1] group-hover:border-accent-sky/30 group-hover:bg-accent-sky/10 transition-all">
                <span className="size-1.5 rounded-full bg-accent-sky/70 group-hover:bg-accent-sky transition-all" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-dim group-hover:text-white transition-colors font-medium">
                  {skill.level}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
