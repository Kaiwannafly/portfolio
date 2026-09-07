'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
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

  const allSkills = SKILL_CATEGORIES.flatMap((c) => c.skills);
  const displaySkills =
    activeCategory === 'All'
      ? allSkills
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
            All Skills
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {displaySkills.map((skill, index) => {
          const Icon = iconMap[skill.iconName] || Code2;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-dark-border bg-dark-card/60 backdrop-blur-sm hover:border-accent-sky/50 hover:bg-dark-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
              data-cursor={skill.name}
            >
              <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-accent-sky group-hover:border-accent-sky/30 group-hover:scale-110 transition-all duration-300 mb-3">
                <Icon className="size-6" />
              </div>

              <h3 className="font-display text-sm font-semibold text-white group-hover:text-accent-sky transition-colors">
                {skill.name}
              </h3>

              <span className="font-mono text-[11px] text-text-dim mt-1">
                {skill.level}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
