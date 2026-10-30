import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('home');
      const heroThreshold = heroElement ? heroElement.offsetHeight * 0.75 : 450;
      const currentScrollY = window.scrollY;

      // Show after scrolling past hero section
      setIsVisible(currentScrollY > heroThreshold);

      // Calculate precision scroll percentage (0 - 100)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset launch visual effect after smooth scroll starts
    setTimeout(() => {
      setIsLaunching(false);
    }, 800);
  };

  // SVG Circle calculations
  const size = 56;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-end transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Telemetry Monospace Badge on Hover */}
      <div
        className={`hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 mr-3 rounded bg-[#101521]/95 backdrop-blur-md border border-[#263044] shadow-xl text-xs font-mono transition-all duration-300 pointer-events-none origin-right ${
          isHovered
            ? 'opacity-100 scale-100 translate-x-0'
            : 'opacity-0 scale-95 translate-x-2'
        }`}
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#48D9D0] animate-pulse" />
        <span className="text-[#A5ADBA] uppercase tracking-wider">RETURN TO ORBIT</span>
        <span className="text-[#8B7CFF] tabular-nums font-semibold">
          {Math.round(scrollProgress)}%
        </span>
      </div>

      {/* Main Interactive Orb Button */}
      <button
        type="button"
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center bg-[#101521] border border-[#263044] shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12] group cursor-pointer ${
          isHovered
            ? 'scale-110 border-[#8B7CFF]/60 shadow-[0_0_30px_rgba(139,124,255,0.45)]'
            : 'hover:border-[#8B7CFF]/40'
        } ${isLaunching ? 'scale-90 shadow-[0_0_40px_rgba(72,217,208,0.7)] border-[#48D9D0]' : ''}`}
        aria-label={`Scroll back to top of page (currently at ${Math.round(scrollProgress)}%)`}
        title="Scroll to top"
      >
        {/* Ambient Backlight Glow Ring */}
        <div
          className={`absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#8B7CFF] via-transparent to-[#48D9D0] opacity-0 blur-md transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-70' : ''
          }`}
        />

        {/* SVG Circular Scroll Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B7CFF" />
              <stop offset="100%" stopColor="#48D9D0" />
            </linearGradient>
            <linearGradient id="scrollTrackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#263044" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#263044" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Background Track Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#scrollTrackGradient)"
            strokeWidth={strokeWidth}
          />

          {/* Active Dynamic Progress Stroke */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#scrollProgressGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Micro Radar Crosshair Ticks (0, 90, 180, 270 degrees) */}
        <div className="absolute inset-2.5 rounded-full pointer-events-none border border-[#263044]/40" />
        <span className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#263044]" />
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#263044]" />
        <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-[#263044]" />
        <span className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-[#263044]" />

        {/* Center Floating Core with Dynamic Arrow / Launch Elevation */}
        <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden h-7 w-7">
          <div
            className={`transition-all duration-300 flex flex-col items-center justify-center ${
              isLaunching
                ? '-translate-y-8 opacity-0 scale-75'
                : isHovered
                ? '-translate-y-0.5 text-[#48D9D0]'
                : 'text-[#F5F7FA]'
            }`}
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Micro propulsion pulse on launch */}
          {isLaunching && (
            <div className="absolute inset-0 flex items-center justify-center animate-ping pointer-events-none">
              <span className="w-3 h-3 rounded-full bg-[#48D9D0]" />
            </div>
          )}
        </div>

        {/* Mobile Percentage Readout (subtle under the arrow) */}
        <span className="sm:hidden absolute -bottom-5 text-[9px] font-mono text-[#48D9D0] bg-[#101521] px-1 rounded border border-[#263044] tabular-nums">
          {Math.round(scrollProgress)}%
        </span>
      </button>
    </div>
  );
};
