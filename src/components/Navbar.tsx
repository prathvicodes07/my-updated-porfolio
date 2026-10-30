import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B12]/85 backdrop-blur-md border-b border-[#263044]/80 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
          >
            <div className="w-8 h-8 rounded bg-[#141C2A] border border-[#263044] flex items-center justify-center font-mono font-semibold text-xs text-[#8B7CFF] group-hover:border-[#8B7CFF]/50 transition-colors">
              {portfolioData.personal.initials}
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-[#F5F7FA] group-hover:text-[#8B7CFF] transition-colors">
              PRATHVIRAJ GODBOLE
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#8B7CFF] font-medium' : 'hover:text-[#F5F7FA]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B7CFF] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium text-[#080B12] bg-[#8B7CFF] hover:bg-[#9d90ff] rounded transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,124,255,0.4)] whitespace-nowrap shrink-0"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#A5ADBA] hover:text-[#F5F7FA] hover:bg-[#141C2A] border border-[#263044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7CFF]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101521] border-b border-[#263044] px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded text-sm font-mono tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#141C2A] text-[#8B7CFF] border-l-2 border-[#8B7CFF] font-medium'
                      : 'text-[#A5ADBA] hover:text-[#F5F7FA] hover:bg-[#141C2A]/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-[#263044]">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-mono font-medium text-[#080B12] bg-[#8B7CFF] hover:bg-[#9d90ff] rounded text-center"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
