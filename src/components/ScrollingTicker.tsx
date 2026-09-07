'use client';

import React from 'react';
import { TICKER_TEXTS } from '@/data/portfolioData';

export default function ScrollingTicker() {
  return (
    <section className="py-20 border-y border-dark-border bg-dark-surface/50 overflow-hidden select-none">
      <div className="space-y-6">
        {/* Banner 1: Forward Marquee */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-white shrink-0">
            <span>{TICKER_TEXTS.line1}</span>
            <span>{TICKER_TEXTS.line1}</span>
          </div>
          <div className="flex animate-marquee font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-white shrink-0" aria-hidden="true">
            <span>{TICKER_TEXTS.line1}</span>
            <span>{TICKER_TEXTS.line1}</span>
          </div>
        </div>

        {/* Banner 2: Reverse Outlined Marquee */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee-reverse font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-stroke-light shrink-0">
            <span>{TICKER_TEXTS.line2}</span>
            <span>{TICKER_TEXTS.line2}</span>
          </div>
          <div className="flex animate-marquee-reverse font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-stroke-light shrink-0" aria-hidden="true">
            <span>{TICKER_TEXTS.line2}</span>
            <span>{TICKER_TEXTS.line2}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
