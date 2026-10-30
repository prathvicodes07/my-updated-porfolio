import React, { useState } from 'react';
import { Eye, Github, Code, Database, Compass, HeartPulse, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [repoNotice, setRepoNotice] = useState<string | null>(null);

  const handleGithubClick = (project: Project) => {
    setRepoNotice(`The repository for "${project.title}" is currently maintained in academic evaluation archives and will be linked upon public release.`);
    setTimeout(() => {
      setRepoNotice(null);
    }, 6000);
  };

  return (
    <section id="projects" className="py-24 bg-[#101521] border-y border-[#263044] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-3"
          >
            <p className="text-xs font-mono tracking-widest uppercase text-[#8B7CFF]">
              SELECTED PROJECTS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA]">
              Featured Work &amp; Concepts
            </h2>
            <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
              Explorations spanning web architecture, academic management systems, guidance platforms, and supportive conversational AI.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs font-mono text-[#A5ADBA]"
          >
            4 Selected Academic Projects
          </motion.div>
        </div>

        {/* Global Repository Notice Toast */}
        {repoNotice && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded bg-[#141C2A] border border-[#8B7CFF] text-xs text-[#F5F7FA] flex items-center justify-between shadow-xl"
          >
            <div className="flex items-center gap-3">
              <Info className="w-4 h-4 text-[#8B7CFF] shrink-0" />
              <span>{repoNotice}</span>
            </div>
            <button
              type="button"
              onClick={() => setRepoNotice(null)}
              className="text-[#A5ADBA] hover:text-[#F5F7FA] text-xs underline ml-4 cursor-pointer"
            >
              Dismiss
            </button>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group flex flex-col justify-between rounded-lg bg-[#141C2A] border border-[#263044] hover:border-[#8B7CFF]/50 transition-all duration-300 overflow-hidden shadow-lg hover:-translate-y-1"
              >
                {/* Visual Preview / Mockup Area */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-48 sm:h-56 bg-[#080B12] border-b border-[#263044] overflow-hidden p-6 flex flex-col justify-between cursor-pointer group/preview"
                >
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 cyber-grid opacity-20" />

                  {/* Top Bar of Preview */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#A5ADBA]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#8B7CFF]" />
                      <span>PROJECT {project.number}</span>
                    </div>
                    <span className="text-[#48D9D0]">{project.category}</span>
                  </div>

                  {/* Center Symbolic Visual Mockup */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center space-y-2">
                    <div className="w-14 h-14 rounded-lg bg-[#141C2A] border border-[#263044] flex items-center justify-center text-[#8B7CFF] group-hover/preview:scale-110 group-hover/preview:text-[#48D9D0] transition-all duration-300">
                      {project.id === 'proj-1' && <Code className="w-7 h-7" />}
                      {project.id === 'proj-2' && <Database className="w-7 h-7" />}
                      {project.id === 'proj-3' && <Compass className="w-7 h-7" />}
                      {project.id === 'proj-4' && <HeartPulse className="w-7 h-7" />}
                    </div>
                    <span className="text-xs font-mono text-[#A5ADBA] group-hover/preview:text-[#F5F7FA] transition-colors">
                      Click to inspect concept
                    </span>
                  </div>

                  {/* Bottom Preview Indicator */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A5ADBA]">
                    <span>REVA University Curriculum</span>
                    <span className="text-[#8B7CFF] flex items-center gap-1 group-hover/preview:translate-x-1 transition-transform">
                      Architecture &bull; Details
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-bold tracking-tight text-[#F5F7FA] group-hover:text-[#8B7CFF] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-[#8B7CFF]">
                        #{project.number}
                      </span>
                    </div>

                    <p className="text-sm text-[#A5ADBA] leading-relaxed">
                      &ldquo;{project.description}&rdquo;
                    </p>
                  </div>

                  {/* Technologies Stack */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5ADBA]">
                      Technology Stack
                    </span>
                    {project.technologies.length > 0 ? (
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded bg-[#101521] border border-[#263044] text-[#48D9D0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs font-mono text-[#A5ADBA] italic">
                        Not provided. Concept design.
                      </p>
                    )}
                  </div>

                  {/* Actions: View Project & GitHub */}
                  <div className="pt-4 border-t border-[#263044] flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-[#080B12] bg-[#8B7CFF] hover:bg-[#9d90ff] rounded transition-all duration-200 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleGithubClick(project)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono text-[#F5F7FA] bg-[#101521] hover:bg-[#182335] border border-[#263044] hover:border-[#48D9D0]/50 rounded transition-colors cursor-pointer"
                      title="View GitHub repository details"
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">GitHub</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
