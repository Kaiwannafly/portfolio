'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { ArrowUpRight, Github, Code, CheckCircle2, Sparkles } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Systems & .NET', 'AI & Data Science'];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-mist">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate uppercase tracking-caps">
            <span className="size-1.5 rounded-full bg-ember"></span>
            Featured Work
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-graphite tracking-display">
            Selected Software Projects
          </h2>
          <p className="text-steel text-sm sm:text-base max-w-xl">
            A showcase of full-stack web applications, enterprise .NET systems, and machine learning models developed with modern engineering practices.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-ash/80 border border-mist rounded-pill self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-pill transition-all ${
                filter === cat
                  ? 'bg-canvas-white text-graphite shadow-subtle'
                  : 'text-steel hover:text-graphite'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between bg-canvas-white border border-mist rounded-card p-6 sm:p-8 transition-all duration-200 hover:border-graphite/40 hover:shadow-card"
          >
            <div className="space-y-4">
              {/* Header Meta: Category & Metrics */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-ember font-medium uppercase tracking-caps">
                  {project.category}
                </span>
                {project.metrics && (
                  <span className="font-mono text-[11px] text-slate bg-fog px-2.5 py-0.5 rounded-tag border border-mist/60">
                    {project.metrics}
                  </span>
                )}
              </div>

              {/* Title & Role */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-normal text-graphite tracking-display group-hover:text-black transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-slate mt-0.5 block">
                  Role: {project.role}
                </span>
              </div>

              {/* Description */}
              <p className="text-steel text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 pt-2">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-steel">
                    <span className="size-1 rounded-full bg-brass mt-1.5 shrink-0"></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer: Tech Stack & Actions */}
            <div className="pt-6 mt-6 border-t border-mist/80 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag-ember">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-graphite hover:text-ember transition-colors"
                >
                  <Github className="size-3.5" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
