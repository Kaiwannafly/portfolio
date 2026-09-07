'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUpRight, Github, Linkedin, FileText, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Featured Projects', href: '#projects' },
    { label: 'Technical Skills', href: '#skills' },
    { label: 'Work History', href: '#timeline' },
    { label: 'My Capabilities', href: '#capabilities' },
    { label: 'Academic Honors', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 py-5 sm:py-7 flex items-center justify-between ${
          scrolled && !isOpen ? 'bg-dark/85 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'
        }`}
      >
        {/* Brand Logo / Monogram */}
        <Link
          href="#"
          className="group flex items-center gap-3 z-50"
          data-cursor="Kyle<br>Dam"
        >
          <div className="size-10 rounded-full border border-white/20 bg-dark-card flex items-center justify-center font-display font-bold text-sm tracking-wider text-white group-hover:border-accent-blue group-hover:text-accent-blue transition-all duration-300">
            KD
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-semibold text-sm tracking-wide text-white group-hover:text-accent-sky transition-colors">
              Kyle Dam
            </span>
            <span className="font-mono text-[10px] text-text-muted tracking-wider uppercase">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-3 py-2 px-3 rounded-full border border-white/15 bg-dark-card/90 hover:border-white/40 transition-all duration-300 z-50"
          aria-label="Toggle Navigation Menu"
          data-cursor={isOpen ? 'Close' : 'Menu'}
        >
          <span className="font-display text-xs uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">
            {isOpen ? 'Close' : 'Menu'}
          </span>
          <div className="relative size-5 flex flex-col justify-center items-center gap-1.5">
            <span
              className={`block h-0.5 w-4 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </div>
        </button>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-dark z-40 flex flex-col justify-center transition-all duration-500 overflow-y-auto ${
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Giant Ghost Watermark */}
        <div className="caption-title-ghost opacity-[0.04] text-[18vw]">
          EXPLORE
        </div>

        <div className="max-w-6xl w-full mx-auto px-6 sm:px-12 py-24 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Main Navigation Links */}
          <nav className="flex flex-col gap-3 sm:gap-4">
            <span className="font-mono text-xs uppercase tracking-caps text-text-dim mb-2">
              Navigation Menu
            </span>
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group font-display text-3xl sm:text-5xl md:text-6xl font-semibold text-white/80 hover:text-white transition-colors inline-flex items-center gap-4"
                data-cursor="Go →"
              >
                <span className="font-mono text-xs text-text-dim group-hover:text-accent-blue transition-colors">
                  0{idx + 1}
                </span>
                <span className="underline-on-hover">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Social Links & Meta */}
          <div className="flex flex-col gap-6 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-dark-border md:pl-12 w-full md:w-auto">
            <div>
              <span className="font-mono text-xs uppercase tracking-caps text-text-dim block mb-3">
                Connect Directly
              </span>
              <ul className="flex flex-col gap-3 font-display text-base sm:text-lg font-medium">
                <li>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#2d76c0] hover:text-[#4c86c0] transition-colors"
                  >
                    <Linkedin className="size-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="size-3.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#4c86c0] hover:text-white transition-colors"
                  >
                    <Github className="size-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="size-3.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.resumePath}
                    download="Kyle_Dam_Resume.pdf"
                    className="flex items-center gap-2 text-[#88a4c0] hover:text-white transition-colors"
                  >
                    <FileText className="size-4" />
                    <span>Resume (PDF)</span>
                    <ArrowUpRight className="size-3.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-2 text-ember hover:text-white transition-colors"
                  >
                    <Mail className="size-4" />
                    <span>{PERSONAL_INFO.email}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-4 text-xs font-mono text-text-dim space-y-1">
              <div>Based in Sydney, NSW, Australia</div>
              <div>University of Technology Sydney (BIT)</div>
              <div>WAM 80.06 • High Distinction Standing</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
