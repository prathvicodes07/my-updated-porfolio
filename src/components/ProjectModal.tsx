import React, { useEffect } from 'react';
import { X, Layers, AlertCircle, CheckCircle, ExternalLink, GitBranch } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-[#141C2A] border border-[#263044] p-6 sm:p-8 shadow-2xl text-[#F5F7FA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded text-[#A5ADBA] hover:text-[#F5F7FA] hover:bg-[#101521] border border-[#263044] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7CFF] cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8B7CFF]">
            <span>PROJECT {project.number}</span>
            <span aria-hidden="true">&bull;</span>
            <span className="text-[#48D9D0]">{project.category}</span>
          </div>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F7FA]">
            {project.title}
          </h3>
        </div>

        {/* Educational Disclaimer Banner if applicable */}
        {project.isEducationalDisclaimer && (
          <div className="mb-6 p-4 rounded bg-[#101521] border border-[#ffbd2e]/40 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#ffbd2e] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <span className="font-semibold text-[#ffbd2e] block">Educational Project Notice</span>
              <p className="text-[#A5ADBA] leading-relaxed">
                This project is developed solely as an educational software prototype exploring natural language processing and supportive conversations. It is not intended for medical diagnosis, treatment, or validated healthcare advisory purposes.
              </p>
            </div>
          </div>
        )}

        {/* Description / Summary */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
              Overview &amp; Concept
            </h4>
            <p className="text-sm sm:text-base text-[#F5F7FA] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Technology Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
              Technology Stack
            </h4>
            {project.technologies.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2">
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
                Technologies not specified in design specification. Maintained as pure conceptual architecture.
              </p>
            )}
          </div>

          {/* Architecture Note */}
          {project.architectureNote && (
            <div className="space-y-2 p-4 bg-[#101521] rounded border border-[#263044]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8B7CFF]">
                <Layers className="w-4 h-4" />
                <span>Architecture Specification</span>
              </div>
              <p className="text-xs text-[#A5ADBA] leading-relaxed">
                {project.architectureNote}
              </p>
            </div>
          )}

          {/* Key Feature Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
              Key Features &amp; Implementation Focus
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A5ADBA]">
                  <CheckCircle className="w-4 h-4 text-[#48D9D0] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Repository & Release Notice */}
          <div className="pt-4 border-t border-[#263044] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#A5ADBA]">
              <GitBranch className="w-4 h-4 text-[#8B7CFF]" />
              <span>Source code hosted in academic &amp; student repositories</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#101521] hover:bg-[#182030] text-[#F5F7FA] border border-[#263044] rounded transition-colors cursor-pointer"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
