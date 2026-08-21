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
  Layout,
  Atom,
  Component,
  Globe,
  Palette,
  Smartphone,
  Sliders,
  Server,
  Cpu,
  Network,
  Boxes,
  Key,
  Table,
  Cloud,
  Zap,
  GitBranch,
  Monitor,
  Send,
  Kanban,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  FileCode,
  Code2,
  Terminal,
  Coffee,
  Layers,
  Database,
  Layout,
  Atom,
  Component,
  Globe,
  Palette,
  Smartphone,
  Sliders,
  Server,
  Cpu,
  Network,
  Boxes,
  Key,
  Table,
  Cloud,
  Zap,
  GitBranch,
  Monitor,
  Send,
  Kanban,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].title);

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-mist">
      {/* Section Header */}
      <div className="space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-slate uppercase tracking-caps">
          <span className="size-1.5 rounded-full bg-ember"></span>
          Technical Capabilities
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-normal text-graphite tracking-display">
          Skills &amp; Technology Stack
        </h2>
        <p className="text-steel text-sm sm:text-base max-w-xl">
          Core programming languages, frameworks, architectural patterns, and development tools I work with.
        </p>
      </div>

      {/* Categories Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(cat.title)}
            className={`px-4 py-2 text-xs font-medium rounded-pill transition-all ${
              activeCategory === cat.title
                ? 'bg-graphite text-canvas-white shadow-subtle'
                : 'bg-fog text-steel hover:text-graphite hover:bg-ash'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Active Category Skills Grid */}
      {SKILL_CATEGORIES.filter((c) => c.title === activeCategory).map((cat) => (
        <div key={cat.title} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cat.skills.map((skill) => {
            const Icon = iconMap[skill.iconName] || Code2;
            return (
              <div
                key={skill.name}
                className="bg-canvas-white border border-mist rounded-card p-4 flex items-center justify-between transition-all hover:border-graphite/30 hover:shadow-subtle"
              >
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-md bg-fog flex items-center justify-center text-graphite border border-mist/80">
                    <Icon className="size-4 text-graphite" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-graphite">{skill.name}</h4>
                    <span className="font-mono text-[11px] text-slate">{skill.level}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}
