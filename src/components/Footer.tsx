import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#080B12] border-t border-[#263044] text-[#A5ADBA] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="space-y-1">
            <h3 className="text-lg font-bold tracking-tight text-[#F5F7FA]">
              PRATHVIRAJ GODBOLE
            </h3>
            <p className="text-xs sm:text-sm text-[#A5ADBA]">
              &ldquo;{portfolioData.personal.tagline}&rdquo;
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded bg-[#141C2A] border border-[#263044] flex items-center justify-center text-[#A5ADBA] hover:text-[#48D9D0] hover:border-[#48D9D0]/50 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="w-9 h-9 rounded bg-[#141C2A] border border-[#263044] flex items-center justify-center text-[#A5ADBA] hover:text-[#8B7CFF] hover:border-[#8B7CFF]/50 transition-colors"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => {
                alert('Academic GitHub repository URL will be connected upon semester portfolio publication.');
              }}
              className="w-9 h-9 rounded bg-[#141C2A] border border-[#263044] flex items-center justify-center text-[#A5ADBA] hover:text-[#F5F7FA] hover:border-[#8B7CFF]/50 transition-colors cursor-pointer"
              aria-label="GitHub repositories (placeholder)"
            >
              <Github className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded bg-[#141C2A] border border-[#263044] flex items-center justify-center text-[#A5ADBA] hover:text-[#8B7CFF] hover:border-[#8B7CFF]/50 transition-colors cursor-pointer ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="pt-6 border-t border-[#263044]/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#F5F7FA] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <p className="text-[#A5ADBA] text-xs font-mono">
            &copy; {portfolioData.personal.copyrightYear} Prathviraj Godbole. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
