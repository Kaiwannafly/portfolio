'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUpRight, Menu, X, FileDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-4 py-4 md:py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Monogram / Brand Logo */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 bg-canvas-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-pill border border-mist shadow-subtle transition-all hover:border-graphite/40"
        >
          <span className="size-2 rounded-full bg-ember animate-pulse"></span>
          <span className="font-display font-medium text-sm tracking-display text-graphite">
            Kyle Dam
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-slate">
            / Software Engineer
          </span>
        </Link>

        {/* Desktop Floating Pill Navigation */}
        <nav className="hidden md:flex nav-pill-container">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-steel rounded-pill transition-colors hover:text-graphite hover:bg-canvas-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Resume Download & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.resumePath}
            download="Kyle_Dam_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 bg-graphite text-canvas-white px-4 py-2 text-xs font-medium tracking-display rounded-button transition-all hover:bg-black active:scale-[0.98]"
          >
            <FileDown className="size-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden size-9 flex items-center justify-center rounded-pill bg-ash border border-mist text-graphite"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-canvas-white/95 backdrop-blur-lg border border-mist rounded-card shadow-card flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-steel hover:text-graphite hover:bg-fog rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-mist flex gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Kyle_Dam_Resume.pdf"
              className="flex-1 btn-primary py-2.5 text-xs justify-center"
            >
              <FileDown className="size-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
