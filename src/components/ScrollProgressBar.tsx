import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = Math.min(1, Math.max(0, scrollY / docHeight));
        setProgress(pct);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] pointer-events-none bg-transparent"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-[#8B7CFF] via-[#6e96ff] to-[#48D9D0] transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(72,217,208,0.7)]"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: 'left',
          willChange: 'transform'
        }}
      />
    </div>
  );
};
