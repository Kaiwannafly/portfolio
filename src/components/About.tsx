import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Award, BookOpen, Globe2, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-mist">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate uppercase tracking-caps">
            <span className="size-1.5 rounded-full bg-ember"></span>
            About Me
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-normal text-graphite tracking-display leading-tight">
            Bridging technical precision with thoughtful user experience.
          </h2>

          <div className="space-y-4 text-steel text-base leading-relaxed">
            <p>
              I am a Software Engineer and recent Information Technology graduate from the{' '}
              <strong className="text-graphite font-medium">University of Technology Sydney (UTS)</strong>, majoring in{' '}
              <strong className="text-graphite font-medium">Enterprise Systems Development</strong>.
            </p>
            <p>
              Throughout my academic career, I maintained a <strong className="text-graphite font-medium">WAM of 80.54 (GPA 6.09/7.00)</strong>, earning High Distinctions in core disciplines including Advanced Software Development (97), Introduction to Software Development (96), Data Structures &amp; Algorithms (89), .NET Application Development (89), and Software Architecture (86).
            </p>
            <p>
              My international academic background spans across the United States (studying Big Data &amp; Computer Science at Suffolk University in Boston) and Australia (UTS). This experience gave me a versatile problem-solving mindset, cross-cultural collaboration skills, and an adaptable approach to emerging technologies.
            </p>
          </div>
        </div>

        {/* Right Column: Key Stats & Highlights Cards */}
        <div className="w-full md:w-80 lg:w-96 flex flex-col gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-fog/80 border border-mist p-5 rounded-card flex flex-col gap-1 transition-all hover:bg-ash/80 hover:border-graphite/20"
            >
              <span className="font-mono text-xs text-slate uppercase tracking-caps">
                {stat.label}
              </span>
              <span className="font-display text-2xl sm:text-3xl font-medium text-graphite tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-steel mt-0.5">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
