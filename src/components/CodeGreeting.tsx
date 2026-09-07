'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CodeGreeting() {
  const [dayName, setDayName] = useState('day');
  const [timeGreeting, setTimeGreeting] = useState('welcome');

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    setDayName(days[now.getDay()]);

    const hour = now.getHours();
    if (hour < 12) {
      setTimeGreeting('good morning');
    } else if (hour < 18) {
      setTimeGreeting('good afternoon');
    } else {
      setTimeGreeting('good evening');
    }
  }, []);

  return (
    <section id="hello-world" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Hello World Heading */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Hello, World!
        </h2>

        {/* VS Code Theme Editor Container */}
        <div className="rounded-xl border border-dark-border bg-dark-card/90 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Editor Window Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-dark-border">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#ff5f56]" />
              <span className="size-3 rounded-full bg-[#ffbd2e]" />
              <span className="size-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-xs text-text-dim">
              kyle_dam.tsx — portfolio
            </span>
            <div className="w-12"></div>
          </div>

          {/* Editor Body */}
          <div className="p-5 sm:p-7 flex gap-4 text-sm sm:text-base font-mono leading-relaxed">
            {/* Line Numbers */}
            <div className="select-none text-text-dim/50 flex flex-col text-right pr-2 border-r border-dark-border/50">
              <span>1</span>
              <span>2</span>
            </div>

            {/* Code Content */}
            <div className="vscode-theme flex-1">
              <div>
                <span className="tag">&lt;p&gt;</span>
                {' '}My name is{' '}
                <em className="text-white font-semibold">Kyle Dam</em> (Phuong Nam Dam).
                {' '}<span className="tag">&lt;/p&gt;</span>
              </div>
              <div className="text-text-muted mt-1">
                <span className="tag">&lt;role&gt;</span>
                {' '}Software Engineer &amp; Full-Stack Systems Developer
                {' '}<span className="tag">&lt;/role&gt;</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>
        </div>

        {/* Personal Narrative in Jason's voice */}
        <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed pt-4 max-w-3xl">
          <p>
            I&apos;m a Software Engineer and UTS IT Graduate based in Hanoi, Vietnam. I know you want to see my projects and technical depth, so I&apos;ll let you know more{' '}
            <a
              href="#about"
              className="text-[#2d76c0] underline-on-hover font-medium"
              data-cursor="Read<br>Bio"
            >
              about me
            </a>{' '}
            below.
          </p>

          <p className="text-white font-medium">
            Have a great <span className="text-accent-sky capitalize">{dayName}</span>,{' '}
            <span className="text-accent-sky capitalize">{timeGreeting}</span>!
          </p>
        </div>

        {/* Stylized Digital Signature */}
        <div className="pt-6">
          <div className="inline-block p-3 rounded-lg border border-white/10 bg-white/5">
            <svg
              className="w-48 sm:w-56 h-14 text-white/90"
              viewBox="0 0 240 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 20 40 Q 35 10 50 35 T 80 20 T 110 38 Q 130 15 150 35 T 180 25 T 220 30" />
              <text x="140" y="52" fill="currentColor" stroke="none" className="font-mono text-[10px] tracking-widest uppercase opacity-60">
                Kyle Dam
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
