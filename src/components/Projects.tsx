'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { ArrowUpRight, Github, ExternalLink, Code2, Award } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Systems & .NET', 'AI & Data Science'];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-dark-border">
      {/* Section Header with Stroke Effect */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-block">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white hover:text-stroke-light transition-all duration-300">
            Portfolio
          </h2>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-caps text-text-muted mt-2">
            Featured Projects <span className="hidden sm:inline">• (hover over the cards)</span>
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-display text-xs tracking-wider uppercase transition-all duration-300 ${
                filter === cat
                  ? 'bg-white text-dark font-semibold shadow-lg'
                  : 'bg-dark-card border border-dark-border text-text-muted hover:border-white/30 hover:text-white'
              }`}
              data-cursor="Filter"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Creative Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-dark-border bg-dark-card/70 backdrop-blur-sm p-7 sm:p-9 transition-all duration-300 hover:border-accent-sky/50 hover:shadow-2xl overflow-hidden"
            data-cursor="View<br>Project"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 size-48 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-blue/20 transition-all duration-500" />

            <div className="space-y-5 relative z-10">
              {/* Category & Academic Highlight Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-accent-sky uppercase tracking-wider">
                  {project.category}
                </span>
                {project.metrics && (
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-amber-300/90 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                    <Award className="size-3" />
                    <span>{project.metrics}</span>
                  </span>
                )}
              </div>

              {/* Title & Role */}
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-accent-sky transition-colors leading-snug">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-text-dim block mt-1">
                  Role: {project.role}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
                {project.description}
              </p>

              {/* Key Bullet Highlights */}
              <div className="space-y-2 pt-1">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                    <span className="size-1.5 rounded-full bg-accent-blue mt-2 shrink-0"></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Tech Stack & GitHub Action */}
            <div className="relative z-10 pt-6 mt-8 border-t border-dark-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5 max-w-md">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-display font-medium text-white hover:text-accent-sky transition-colors py-2 px-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/30"
                  data-cursor="Open<br>GitHub"
                >
                  <Github className="size-3.5" />
                  <span>Repository</span>
                  <ArrowUpRight className="size-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Rotating Circular "See All Works" Button */}
      <div className="mt-20 flex justify-center">
        <a
          href="https://github.com/Kaiwannafly?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="relative size-36 sm:size-40 rounded-full border border-white/20 bg-dark-card flex items-center justify-center group hover:border-white transition-all duration-300 shadow-xl"
          data-cursor="All<br>Works"
        >
          {/* Central Arrow */}
          <div className="size-12 rounded-full bg-white text-dark flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-sky group-hover:text-white transition-all duration-300 z-10">
            <ArrowUpRight className="size-5" />
          </div>

          {/* Spinning Circular SVG Text */}
          <div className="absolute inset-0 scr-btn-spinner animate-spin-slow pointer-events-none">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 250, 250 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                />
              </defs>
              <text dy="10" className="fill-white/80 text-[28px] font-display uppercase tracking-[8px] font-bold">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  • SEE ALL WORKS • SEE ALL WORKS •
                </textPath>
              </text>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
