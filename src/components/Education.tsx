'use client';

import React from 'react';
import { EDUCATION_DATA } from '@/data/portfolioData';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-dark-border">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white hover:text-stroke-light transition-all duration-300">
          Academic Honors
        </h2>
        <p className="font-mono text-xs sm:text-sm uppercase tracking-caps text-text-muted">
          Education &amp; Distinction Credentials
        </p>
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
        {EDUCATION_DATA.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-dark-border bg-dark-card/80 backdrop-blur-sm p-7 sm:p-9 space-y-6 hover:border-white/30 transition-all duration-300"
            data-cursor="Academic<br>Honors"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-accent-blue/20 border border-accent-blue/30 flex items-center justify-center text-accent-sky shrink-0">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-medium text-text-muted">
                      {item.degree} {item.major ? `• Major in ${item.major}` : ''}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-dim">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3 text-accent-sky" />
                  {item.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {item.period}
                </span>
              </div>
            </div>

            {/* Academic Standing Pill Banner for UTS */}
            {item.wam && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-caps text-text-dim block">
                    Academic WAM
                  </span>
                  <span className="font-display text-2xl font-bold text-white">
                    {item.wam}
                  </span>
                  <span className="text-xs text-text-muted block">High Distinction Average</span>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-caps text-text-dim block">
                    Cumulative GPA
                  </span>
                  <span className="font-display text-2xl font-bold text-white">
                    {item.gpa}
                  </span>
                  <span className="text-xs text-text-muted block">Out of 7.00 scale</span>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-caps text-text-dim block">
                    Faculty Standing
                  </span>
                  <span className="font-display text-base font-semibold text-amber-300 flex items-center gap-1.5 mt-1">
                    <Award className="size-4 text-amber-400" />
                    {item.honors}
                  </span>
                </div>
              </div>
            )}

            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              {item.description}
            </p>

            {/* Coursework High Distinction Badges */}
            {item.coursework && (
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs uppercase tracking-caps text-text-dim font-medium">
                  Coursework Performance
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {item.coursework.map((course) => (
                    <div
                      key={course.code}
                      className="p-3 rounded-xl bg-dark-surface/90 border border-dark-border/80 flex items-center justify-between text-xs"
                    >
                      <div className="space-y-0.5 pr-2">
                        <span className="font-mono text-[10px] text-accent-sky block">
                          {course.code}
                        </span>
                        <span className="font-medium text-white/90 leading-tight block">
                          {course.name}
                        </span>
                      </div>
                      <span
                        className={`font-mono font-bold px-2.5 py-1 rounded-md text-xs shrink-0 ${
                          course.mark >= 85
                            ? 'bg-accent-blue/30 text-accent-sky border border-accent-blue/40'
                            : 'bg-white/10 text-white border border-white/15'
                        }`}
                      >
                        {course.mark} / {course.grade.includes('High') ? 'HD' : 'D'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
