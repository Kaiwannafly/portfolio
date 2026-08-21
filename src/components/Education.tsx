import React from 'react';
import { EDUCATION_DATA } from '@/data/portfolioData';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto border-t border-mist">
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-slate uppercase tracking-caps">
          <span className="size-1.5 rounded-full bg-ember"></span>
          Academic Honors
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-normal text-graphite tracking-display">
          Education &amp; Credentials
        </h2>
        <p className="text-steel text-sm sm:text-base max-w-xl">
          Academic foundations across Australia and the United States, marked by high distinction performance in software engineering.
        </p>
      </div>

      <div className="space-y-8">
        {EDUCATION_DATA.map((item, idx) => (
          <div
            key={idx}
            className="bg-canvas-white border border-mist rounded-card p-6 sm:p-8 space-y-6 transition-all hover:border-graphite/30 hover:shadow-card"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="size-5 text-ember" />
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-graphite">
                    {item.institution}
                  </h3>
                </div>
                <p className="text-sm font-medium text-steel">
                  {item.degree} {item.major ? `• Major in ${item.major}` : ''}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3.5 text-slate" />
                  {item.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3.5 text-slate" />
                  {item.period}
                </span>
              </div>
            </div>

            {/* Academic Standing Banner (if present) */}
            {item.wam && (
              <div className="flex flex-wrap items-center gap-4 p-4 bg-ivory/70 border border-brass/20 rounded-md">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-caps text-slate block">Academic WAM</span>
                  <span className="font-display text-xl font-medium text-graphite">{item.wam}</span>
                </div>
                <div className="h-8 w-px bg-brass/20"></div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-caps text-slate block">GPA</span>
                  <span className="font-display text-xl font-medium text-graphite">{item.gpa}</span>
                </div>
                <div className="h-8 w-px bg-brass/20"></div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-caps text-slate block">Standing</span>
                  <span className="text-sm font-medium text-brass flex items-center gap-1 mt-0.5">
                    <Award className="size-4" />
                    {item.honors}
                  </span>
                </div>
              </div>
            )}

            <p className="text-steel text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Key Coursework Grid (for UTS) */}
            {item.coursework && (
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs uppercase tracking-caps text-slate font-medium">
                  Notable Coursework Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {item.coursework.map((course) => (
                    <div
                      key={course.code}
                      className="p-2.5 bg-fog/70 border border-mist/80 rounded-md flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-mono text-[10px] text-slate block">
                          {course.code}
                        </span>
                        <span className="font-medium text-graphite">{course.name}</span>
                      </div>
                      <span
                        className={`font-mono font-medium px-2 py-0.5 rounded text-[11px] ${
                          course.mark >= 85
                            ? 'bg-ember/10 text-ember'
                            : 'bg-ash text-steel'
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
