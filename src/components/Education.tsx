import React from 'react';
import { GraduationCap, Award, BookCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#080B12] relative overflow-hidden">
      {/* Decorative subtle ambient back-glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#48D9D0]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 space-y-3"
        >
          <p className="text-xs font-mono tracking-widest uppercase text-[#48D9D0]">
            MY ACADEMIC JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA]">
            Education &amp; Foundations
          </h2>
          <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
            Consistent academic progression from secondary schooling to specialized engineering studies in Artificial Intelligence and Machine Learning.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#263044] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {portfolioData.education.map((item, index) => {
            const isLatest = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative group"
              >
                {/* Timeline Node Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-colors ${
                    isLatest
                      ? 'bg-[#141C2A] border-[#8B7CFF] text-[#8B7CFF] shadow-[0_0_16px_rgba(139,124,255,0.4)]'
                      : 'bg-[#101521] border-[#263044] text-[#A5ADBA] group-hover:border-[#48D9D0]/60 group-hover:text-[#48D9D0]'
                  }`}
                >
                  {index === 0 && <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {index === 1 && <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {index === 2 && <BookCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-7 rounded-lg bg-[#141C2A] border border-[#263044] group-hover:border-[#8B7CFF]/40 transition-all duration-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[#F5F7FA]">
                        {item.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8B7CFF] mt-1">
                        <span>{item.institution}</span>
                        {item.location && (
                          <>
                            <span aria-hidden="true">&bull;</span>
                            <span className="text-[#A5ADBA] inline-flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Academic Stat Pill/Datum */}
                    <div className="shrink-0 flex items-center gap-2">
                      {item.status && (
                        <div className="px-3 py-1 bg-[#101521] border border-[#8B7CFF]/40 rounded text-xs font-mono text-[#8B7CFF]">
                          {item.status}
                        </div>
                      )}
                      {item.admission && (
                        <div className="px-3 py-1 bg-[#101521] border border-[#48D9D0]/40 rounded text-xs font-mono text-[#48D9D0]">
                          Admission: {item.admission}
                        </div>
                      )}
                      {item.percentage && (
                        <div className="px-3 py-1 bg-[#101521] border border-[#48D9D0]/40 rounded text-xs font-mono text-[#48D9D0] tabular-nums font-semibold">
                          Score: {item.percentage}
                        </div>
                      )}
                    </div>
                  </div>

                  {item.details && (
                    <p className="text-sm text-[#A5ADBA] leading-relaxed">
                      {item.details}
                    </p>
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
