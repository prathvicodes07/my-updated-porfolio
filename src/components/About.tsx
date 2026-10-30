import React from 'react';
import { Compass, BookOpen, Cpu, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#101521] border-y border-[#263044] relative">
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
            {portfolioData.about.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA]">
            {portfolioData.about.title}
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-[#A5ADBA] text-base sm:text-lg leading-relaxed"
          >
            {portfolioData.about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={idx === 0 ? 'text-[#F5F7FA] font-medium text-lg sm:text-xl leading-relaxed' : ''}
              >
                {p}
              </p>
            ))}

            {/* Core Commitments List */}
            <div className="pt-6 border-t border-[#263044] space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#48D9D0] shrink-0 mt-1" />
                <span className="text-sm text-[#F5F7FA]">
                  Translating theoretical foundations of machine learning into working software concepts.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8B7CFF] shrink-0 mt-1" />
                <span className="text-sm text-[#F5F7FA]">
                  Active engagement in academic engineering studios, technical exhibitions, and self-directed coding.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#48D9D0] shrink-0 mt-1" />
                <span className="text-sm text-[#F5F7FA]">
                  Continuous exploration of emerging developer tools, language models, and clean frontend design.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Academic & Personal Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-lg bg-[#141C2A] border border-[#263044] space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#101521] border border-[#263044] flex items-center justify-center text-[#8B7CFF]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F5F7FA]">REVA University</h3>
                  <p className="text-xs font-mono text-[#A5ADBA]">School of Computing &amp; Information Technology</p>
                </div>
              </div>
              <p className="text-sm text-[#A5ADBA] leading-relaxed">
                Currently pursuing B.Tech in Artificial Intelligence and Machine Learning through KCET admission, actively engaging in studio courses, projects, and collaborative initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-lg bg-[#141C2A] border border-[#263044] space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#101521] border border-[#263044] flex items-center justify-center text-[#48D9D0]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F5F7FA]">Core Technical Interests</h3>
                  <p className="text-xs font-mono text-[#A5ADBA]">AI/ML &bull; Web Systems &bull; Prototyping</p>
                </div>
              </div>
              <p className="text-sm text-[#A5ADBA] leading-relaxed">
                Fascinated by intelligent conversational agents, predictive modeling, clean modern user interfaces, and IoT sensor applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-lg bg-[#141C2A] border border-[#263044] space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#101521] border border-[#263044] flex items-center justify-center text-[#8B7CFF]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F5F7FA]">Growth Philosophy</h3>
                  <p className="text-xs font-mono text-[#A5ADBA]">Iterative Craftsmanship</p>
                </div>
              </div>
              <p className="text-sm text-[#A5ADBA] leading-relaxed">
                &ldquo;Learning becomes more meaningful when theoretical knowledge is transformed into practical applications.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
