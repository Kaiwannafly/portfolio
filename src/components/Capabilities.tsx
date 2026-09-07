'use client';

import React, { useState } from 'react';
import { CAPABILITIES_DATA } from '@/data/portfolioData';
import { ChevronDown } from 'lucide-react';

export default function Capabilities() {
  const [openId, setOpenId] = useState<string | null>(CAPABILITIES_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="capabilities" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-dark-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Quote */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-caps text-text-dim">
              What I Excel In
            </h3>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              My Core Capabilities
            </h2>
          </div>

          <div className="p-6 rounded-2xl border border-dark-border bg-dark-card/60 backdrop-blur-sm">
            <p className="font-display text-lg sm:text-xl font-medium text-white/90 leading-relaxed italic">
              &ldquo;The recipe to an extraordinary software system is: architectural clarity 📐, engineering rigor 💻, and user empathy 🤝.&rdquo;
            </p>
            <span className="block font-mono text-xs text-text-dim mt-4 uppercase tracking-wider">
              — Kyle Dam Engineering Philosophy
            </span>
          </div>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {CAPABILITIES_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-dark-border bg-dark-card/80 overflow-hidden transition-all duration-300 hover:border-white/30"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 transition-colors"
                  data-cursor={isOpen ? 'Collapse' : 'Expand'}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl">{item.icon}</span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white hover:text-accent-sky transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-mono text-xs text-text-muted pl-9">
                      {item.subtitle}
                    </p>
                  </div>

                  <div
                    className={`size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-white/15' : ''
                    }`}
                  >
                    <ChevronDown className="size-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-dark-border/50 text-text-muted text-sm sm:text-base leading-relaxed pl-15">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
