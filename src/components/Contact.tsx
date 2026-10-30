import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, Copy, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [githubNoticeOpen, setGithubNoticeOpen] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const stored = localStorage.getItem('pg_contact_inquiries') || '[]';
        const parsed = JSON.parse(stored);
        parsed.push({
          ...formData,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('pg_contact_inquiries', JSON.stringify(parsed));
      } catch (err) {
        console.warn('LocalStorage save skipped', err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#080B12] relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#8B7CFF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <p className="text-xs font-mono tracking-widest uppercase text-[#48D9D0]">
            LET&apos;S CONNECT
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA]">
            Have an Idea? Let&apos;s Connect.
          </h2>
          <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
            &ldquo;I&apos;m always interested in learning, exploring technology and connecting with people who share an interest in building meaningful projects.&rdquo;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card with Copy Affordance */}
            <div className="p-6 rounded-lg bg-[#141C2A] border border-[#263044] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#8B7CFF] hover:text-[#9d90ff] bg-[#101521] border border-[#263044] rounded transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#48D9D0]" />
                      <span className="text-[#48D9D0]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#101521] border border-[#263044] flex items-center justify-center text-[#8B7CFF] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-[#F5F7FA] hover:text-[#8B7CFF] transition-colors break-all"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg bg-[#141C2A] border border-[#263044] hover:border-[#8B7CFF]/50 transition-all duration-200 block space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#101521] border border-[#263044] flex items-center justify-center text-[#48D9D0] group-hover:border-[#48D9D0]/50 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#F5F7FA] group-hover:text-[#8B7CFF] transition-colors">
                      LinkedIn Profile
                    </h3>
                    <p className="text-xs font-mono text-[#A5ADBA]">Professional Network &amp; Updates</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A5ADBA] group-hover:text-[#48D9D0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* GitHub Placeholder Card */}
            <div className="p-6 rounded-lg bg-[#141C2A] border border-[#263044] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#101521] border border-[#263044] flex items-center justify-center text-[#A5ADBA]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#F5F7FA]">
                      GitHub Repositories
                    </h3>
                    <p className="text-xs font-mono text-[#A5ADBA]">Open Source &amp; Code Showcase</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setGithubNoticeOpen(!githubNoticeOpen)}
                  className="px-2.5 py-1 text-xs font-mono text-[#A5ADBA] hover:text-[#F5F7FA] bg-[#101521] border border-[#263044] rounded transition-colors cursor-pointer"
                >
                  Status
                </button>
              </div>

              {githubNoticeOpen ? (
                <div className="pt-2 text-xs font-mono text-[#48D9D0] border-t border-[#263044]/60">
                  Placeholder active. Verified GitHub repository URL will be connected following semester portfolio publication.
                </div>
              ) : (
                <p className="text-xs text-[#A5ADBA] leading-relaxed">
                  Academic code repositories are organized and will be linked directly upon formal public release.
                </p>
              )}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-lg bg-[#141C2A] border border-[#263044] shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#101521] border border-[#48D9D0] text-[#48D9D0] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-[#F5F7FA]">
                      Message Staged Successfully
                    </h3>
                    <p className="text-sm text-[#A5ADBA] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out! Your inquiry has been validated and recorded locally. Since this is an active developer portfolio without a custom email server, you can also email directly at{' '}
                      <span className="text-[#8B7CFF] font-mono">{portfolioData.personal.email}</span>.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium text-[#080B12] bg-[#8B7CFF] hover:bg-[#9d90ff] rounded transition-colors cursor-pointer"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tight text-[#F5F7FA]">
                      Send a Direct Note
                    </h3>
                    <p className="text-xs text-[#A5ADBA]">
                      Fill out the form below. Ready for backend integration.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
                        Your Name <span className="text-[#8B7CFF]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Sharma"
                        className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#080B12] text-[#F5F7FA] border transition-colors placeholder-[#A5ADBA]/40 focus:outline-none ${
                          errors.name
                            ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                            : 'border-[#263044] focus:border-[#8B7CFF]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
                        Email Address <span className="text-[#8B7CFF]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#080B12] text-[#F5F7FA] border transition-colors placeholder-[#A5ADBA]/40 focus:outline-none ${
                          errors.email
                            ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                            : 'border-[#263044] focus:border-[#8B7CFF]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
                      Subject <span className="text-[#8B7CFF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Project Collaboration / Question"
                      className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#080B12] text-[#F5F7FA] border transition-colors placeholder-[#A5ADBA]/40 focus:outline-none ${
                        errors.subject
                          ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-[#263044] focus:border-[#8B7CFF]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
                      Message <span className="text-[#8B7CFF]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding your idea, feedback, or inquiry..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#080B12] text-[#F5F7FA] border transition-colors placeholder-[#A5ADBA]/40 focus:outline-none resize-y ${
                        errors.message
                          ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-[#263044] focus:border-[#8B7CFF]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-medium text-[#080B12] bg-[#8B7CFF] hover:bg-[#9d90ff] disabled:opacity-50 rounded transition-all duration-200 hover:shadow-[0_0_24px_rgba(139,124,255,0.35)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Validating &amp; Recording...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
