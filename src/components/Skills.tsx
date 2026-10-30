import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Terminal,
  Coffee,
  Braces,
  Layout,
  Palette,
  Layers,
  Database,
  HardDrive,
  Server,
  Cpu,
  Brain,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

// Map icon name to Lucide component
const iconMap: Record<string, React.ElementType> = {
  Code2,
  FileCode,
  Terminal,
  Coffee,
  Braces,
  Layout,
  Palette,
  Layers,
  Database,
  HardDrive,
  Server,
  Cpu,
  Brain
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    ...portfolioData.skills.categories.map((c) => ({ id: c.id, label: c.title }))
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? portfolioData.skills.categories
      : portfolioData.skills.categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#080B12] relative overflow-hidden">
      {/* Decorative accent glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#8B7CFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-3"
          >
            <p className="text-xs font-mono tracking-widest uppercase text-[#48D9D0]">
              {portfolioData.skills.kicker}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA]">
              Technical Toolkit
            </h2>
            <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
              {portfolioData.skills.description}
            </p>
          </motion.div>

          {/* Category Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#101521] border border-[#263044] rounded-lg"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#141C2A] text-[#8B7CFF] border border-[#263044] shadow-sm font-medium'
                    : 'text-[#A5ADBA] hover:text-[#F5F7FA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Categories & Cards */}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8B7CFF]">
                  // {cat.title}
                </span>
                <div className="h-[1px] flex-1 bg-[#263044]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, skillIdx) => {
                  const Icon = iconMap[skill.icon] || Sparkles;
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        duration: 0.5,
                        delay: 0.05 * skillIdx,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`group p-5 rounded-lg bg-[#141C2A] border transition-all duration-200 relative overflow-hidden ${
                        isHovered
                          ? 'border-[#8B7CFF]/50 bg-[#172233] shadow-lg shadow-[#8B7CFF]/5 -translate-y-0.5'
                          : 'border-[#263044] hover:border-[#263044]/80'
                      }`}
                    >
                      {/* Top Row: Icon + Name */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-[#101521] border border-[#263044] flex items-center justify-center text-[#8B7CFF] group-hover:text-[#48D9D0] group-hover:border-[#48D9D0]/40 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-[#F5F7FA] tracking-tight group-hover:text-[#8B7CFF] transition-colors">
                              {skill.name}
                            </h3>
                            <span className="text-[11px] font-mono text-[#A5ADBA]">
                              {cat.title}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Descriptive Scope Note */}
                      <p className="text-xs text-[#A5ADBA] leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Interactive Subtle Bottom Indicator */}
                      <div className="mt-4 pt-3 border-t border-[#263044]/60 flex items-center justify-between text-[11px] font-mono text-[#A5ADBA]">
                        <span className="text-[#48D9D0] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Academic &amp; Project Track
                        </span>
                        <span className="text-[#8B7CFF] text-[10px] uppercase">
                          Verified Skill
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
