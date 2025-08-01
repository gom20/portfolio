import { useEffect, useState } from 'react';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  className?: string;
}

export default function ScrollProgress({ 
  color = '#8B5CF6', 
  height = 4, 
  className = '' 
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // 초기값 설정

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 ${className}`}
      style={{ height: `${height}px` }}
    >
      <div 
        className="h-full transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${color}, ${color}dd)`,
          boxShadow: `0 0 10px ${color}40`,
          transform: `scaleX(${progress > 0 ? 1 : 0})`,
          transformOrigin: 'left',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </div>
  );
} 