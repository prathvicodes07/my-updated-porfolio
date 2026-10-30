import React from 'react';
import { Wind, Waves, Compass, Award, FileCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Wind,
  Waves,
  Compass,
  Award,
  FileCheck
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-[#101521] border-y border-[#263044] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <p className="text-xs font-mono tracking-widest uppercase text-[#8B7CFF]">
            LEARNING AND ACHIEVEMENTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA]">
            Milestones &amp; Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
            Hands-on hardware &amp; software projects, institutional exhibitions, studio training, and verified technical coursework.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.achievements.map((item, index) => {
            const Icon = iconMap[item.iconName] || Award;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group p-6 sm:p-7 rounded-lg bg-[#141C2A] border border-[#263044] hover:border-[#8B7CFF]/50 transition-all duration-200 flex flex-col justify-between space-y-5 shadow-sm hover:-translate-y-0.5"
              >
                <div className="space-y-4">
                  {/* Card Header with Icon & Category */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded bg-[#101521] border border-[#263044] flex items-center justify-center text-[#8B7CFF] group-hover:text-[#48D9D0] group-hover:border-[#48D9D0]/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#101521] border border-[#263044] text-[#48D9D0]">
                      {item.category}
                    </span>
                  </div>

                  {/* Title and Context */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold tracking-tight text-[#F5F7FA] group-hover:text-[#8B7CFF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-[#8B7CFF]">
                      {item.institutionOrContext}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A5ADBA] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Status Note or Academic Verification Tag */}
                <div className="pt-3 border-t border-[#263044]/60 text-xs font-mono">
                  {item.statusNote ? (
                    <span className="text-[#A5ADBA] italic block">
                      Note: {item.statusNote}
                    </span>
                  ) : (
                    <span className="text-[#48D9D0] inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Academic Milestone Verified
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
