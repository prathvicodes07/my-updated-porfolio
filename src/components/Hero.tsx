import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { HeroTerminal } from './HeroTerminal';

const TYPING_TITLES = [
  'B.Tech AI & ML Student',
  'Full Stack Developer',
  'AI Enthusiast',
  'Technology Explorer'
];

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'model' | 'profile'>('terminal');

  // Typing animation state
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetTitle = TYPING_TITLES[currentTitleIndex];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText === targetTitle) {
      // Pause after full title is typed
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1900);
    } else if (isDeleting && currentText === '') {
      // Move to next title after deletion
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? 38 : 75;
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? targetTitle.substring(0, currentText.length - 1)
          : targetTitle.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B7CFF]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-80 h-80 bg-[#48D9D0]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Supporting label kicker */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#141C2A] border border-[#263044] rounded text-xs font-mono text-[#48D9D0] tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#48D9D0]" />
              <span>{portfolioData.personal.badge}</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#A5ADBA]"
              >
                HELLO, I&apos;M
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F7FA] leading-[1.08]"
              >
                PRATHVIRAJ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#8B7CFF] to-[#48D9D0]">
                  GODBOLE
                </span>
              </motion.h1>
            </div>

            {/* Dynamic Typing Title */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1.5"
            >
              <div className="flex items-center flex-wrap gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight min-h-[38px]">
                <span className="text-[#A5ADBA] font-light text-base sm:text-xl">Focus:</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B7CFF] via-[#a397ff] to-[#48D9D0] font-mono">
                  {currentText}
                </span>
                <span className="w-2 h-6 sm:h-7 bg-[#48D9D0] inline-block animate-pulse -ml-1 rounded-[1px]" />
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#A5ADBA] tracking-wider uppercase">
                {portfolioData.personal.headline}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed max-w-2xl"
            >
              &ldquo;{portfolioData.personal.bioSnippet}&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-mono font-medium text-[#080B12] bg-[#8B7CFF] hover:bg-[#9d90ff] rounded transition-all duration-200 hover:shadow-[0_0_24px_rgba(139,124,255,0.4)] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-mono text-[#F5F7FA] bg-[#141C2A] hover:bg-[#182335] border border-[#263044] hover:border-[#48D9D0]/60 rounded transition-all duration-200 cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#48D9D0]" />
              </button>
            </motion.div>

            {/* Quick Micro-Metadata Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 border-t border-[#263044]/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#A5ADBA]"
            >
              <div>
                <span className="block text-[#48D9D0] text-[11px] mb-0.5">INSTITUTION</span>
                <span className="text-[#F5F7FA] font-sans font-medium text-xs sm:text-sm">REVA University</span>
              </div>
              <div>
                <span className="block text-[#8B7CFF] text-[11px] mb-0.5">DISCIPLINE</span>
                <span className="text-[#F5F7FA] font-sans font-medium text-xs sm:text-sm">B.Tech in AI &amp; ML</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[#A5ADBA] text-[11px] mb-0.5">LOCATION</span>
                <span className="text-[#F5F7FA] font-sans font-medium text-xs sm:text-sm">Bengaluru, India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-End Developer Studio Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle back ambient frame */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#8B7CFF]/20 via-[#263044]/40 to-[#48D9D0]/20 blur-md opacity-70" />

              <div className="relative rounded-lg bg-[#141C2A] border border-[#263044] overflow-hidden shadow-2xl">
                {/* Console Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#101521] border-b border-[#263044]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70" />
                    <span className="ml-2 text-[11px] font-mono text-[#A5ADBA]">developer-studio ~ prathviraj</span>
                  </div>

                  {/* Console Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab('terminal')}
                      className={`px-2 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                        activeTab === 'terminal'
                          ? 'bg-[#141C2A] text-[#8B7CFF] border border-[#263044]'
                          : 'text-[#A5ADBA] hover:text-[#F5F7FA]'
                      }`}
                    >
                      Terminal
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('model')}
                      className={`px-2 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                        activeTab === 'model'
                          ? 'bg-[#141C2A] text-[#48D9D0] border border-[#263044]'
                          : 'text-[#A5ADBA] hover:text-[#F5F7FA]'
                      }`}
                    >
                      Stack
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('profile')}
                      className={`px-2 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                        activeTab === 'profile'
                          ? 'bg-[#141C2A] text-[#F5F7FA] border border-[#263044]'
                          : 'text-[#A5ADBA] hover:text-[#F5F7FA]'
                      }`}
                    >
                      Card
                    </button>
                  </div>
                </div>

                {/* Console Tab 1: Terminal */}
                {activeTab === 'terminal' && (
                  <div className="p-5 font-mono text-xs space-y-3 min-h-[340px] flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-[#48D9D0]">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>developer.init()</span>
                      </div>
                      <div className="pl-4 border-l border-[#263044] space-y-1.5 text-[#A5ADBA]">
                        <p>
                          <span className="text-[#8B7CFF]">const</span> developer = &#123;
                        </p>
                        <p className="pl-4">
                          name: <span className="text-[#48D9D0]">&quot;Prathviraj Godbole&quot;</span>,
                        </p>
                        <p className="pl-4">
                          role: <span className="text-[#8B7CFF]">&quot;{currentText}&quot;</span>,
                        </p>
                        <p className="pl-4">
                          campus: <span className="text-[#48D9D0]">&quot;REVA University&quot;</span>,
                        </p>
                        <p className="pl-4">
                          mindset: <span className="text-[#8B7CFF]">&quot;Curious &amp; Practice-driven&quot;</span>,
                        </p>
                        <p className="pl-4">
                          activeFocus: [<span className="text-[#F5F7FA]">&quot;Python&quot;</span>, <span className="text-[#F5F7FA]">&quot;React.js&quot;</span>, <span className="text-[#F5F7FA]">&quot;Machine Learning&quot;</span>]
                        </p>
                        <p>&#125;;</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#263044]/60 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-[#A5ADBA]">
                        <span className="text-[#48D9D0]">$ current_objective:</span>
                        <span className="text-[#8B7CFF]">building &amp; mastering</span>
                      </div>
                      <p className="text-[11px] text-[#A5ADBA]">
                        &quot;Turning theoretical algorithms into real, human-centered applications.&quot;
                      </p>
                    </div>
                  </div>
                )}

                {/* Console Tab 2: Stack / Blueprint */}
                {activeTab === 'model' && (
                  <div className="p-5 text-xs space-y-4 min-h-[340px]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#48D9D0] uppercase tracking-wider">
                        Core Tech Matrix
                      </span>
                      <Cpu className="w-4 h-4 text-[#8B7CFF]" />
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-[#101521] rounded border border-[#263044]">
                        <div className="flex justify-between text-xs font-mono text-[#F5F7FA] mb-1">
                          <span>AI &amp; Data Science</span>
                          <span className="text-[#8B7CFF]">Python / Scikit-learn</span>
                        </div>
                        <p className="text-[11px] text-[#A5ADBA]">Model prototyping, preprocessing, local LLMs with Ollama</p>
                      </div>

                      <div className="p-3 bg-[#101521] rounded border border-[#263044]">
                        <div className="flex justify-between text-xs font-mono text-[#F5F7FA] mb-1">
                          <span>Modern Frontend</span>
                          <span className="text-[#48D9D0]">React.js / JavaScript</span>
                        </div>
                        <p className="text-[11px] text-[#A5ADBA]">Responsive SPAs, component systems, clean state flows</p>
                      </div>

                      <div className="p-3 bg-[#101521] rounded border border-[#263044]">
                        <div className="flex justify-between text-xs font-mono text-[#F5F7FA] mb-1">
                          <span>Data Persistence</span>
                          <span className="text-[#F5F7FA]">MySQL / MongoDB / Supabase</span>
                        </div>
                        <p className="text-[11px] text-[#A5ADBA]">Relational schema design and flexible document storage</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Console Tab 3: Studio Identity Card */}
                {activeTab === 'profile' && (
                  <div className="p-6 text-center space-y-4 min-h-[340px] flex flex-col justify-center items-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#8B7CFF]/20 to-[#48D9D0]/20 border border-[#8B7CFF]/40 flex items-center justify-center mx-auto shadow-inner">
                        <span className="font-mono text-3xl font-bold text-[#F5F7FA] tracking-tighter">
                          PG
                        </span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded bg-[#101521] border border-[#48D9D0] text-[10px] font-mono text-[#48D9D0]">
                        REVA UNIV
                      </div>
                    </div>

                    <div>
                      <h2 className="text-base font-semibold text-[#F5F7FA]">Prathviraj Godbole</h2>
                      <p className="text-xs font-mono text-[#8B7CFF] flex items-center justify-center gap-1.5 h-5">
                        <span>{currentText}</span>
                        <span className="w-1 h-3 bg-[#48D9D0] inline-block animate-pulse" />
                      </p>
                    </div>

                    <p className="text-xs text-[#A5ADBA] max-w-xs leading-relaxed">
                      Passionate about exploring modern developer tooling, artificial intelligence architectures, and building production-grade software.
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101521] border border-[#263044] text-[11px] font-mono text-[#48D9D0]">
                        <Sparkles className="w-3 h-3" />
                        KCET Admission
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101521] border border-[#263044] text-[11px] font-mono text-[#8B7CFF]">
                        <Layers className="w-3 h-3" />
                        AI &amp; ML Track
                      </span>
                    </div>
                  </div>
                )}

                {/* Console Footer */}
                <div className="px-4 py-2.5 bg-[#101521] border-t border-[#263044] flex items-center justify-between text-[11px] font-mono text-[#A5ADBA]">
                  <span className="text-[#48D9D0] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#48D9D0]" />
                    Studio Environment
                  </span>
                  <span>Obsidian Cybernetic Theme</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Collapsible AI/ML System Logs Terminal */}
        <HeroTerminal />
      </div>
    </section>
  );
};
