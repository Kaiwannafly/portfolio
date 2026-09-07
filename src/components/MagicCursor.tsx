'use client';

import React, { useEffect, useState } from 'react';

export default function MagicCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering an element with data-cursor
      const target = (e.target as HTMLElement).closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isClickable = (e.target as HTMLElement).closest('a, button, input, textarea, select');
        if (isClickable) {
          setCursorText(null);
          setIsHovered(true);
        } else {
          setCursorText(null);
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Small Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          display: cursorText ? 'none' : 'block',
        }}
      >
        <div className="size-2 bg-white rounded-full"></div>
      </div>

      {/* Trailing Interactive Ball */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99998] flex items-center justify-center rounded-full transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 ${
          cursorText
            ? 'size-24 bg-[#2d76c0]/95 backdrop-blur-sm text-white font-display text-xs font-semibold text-center leading-tight shadow-xl scale-100'
            : isHovered
            ? 'size-12 border border-white/60 bg-white/10 backdrop-blur-[1px] scale-100'
            : 'size-9 border border-white/40 bg-transparent scale-100'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span
            className="px-2"
            dangerouslySetInnerHTML={{ __html: cursorText }}
          />
        )}
      </div>
    </>
  );
}
