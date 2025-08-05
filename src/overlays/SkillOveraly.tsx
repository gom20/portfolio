import { useEffect, useState } from 'react';

interface SkillsContentProps {
  isActive: boolean;
  onClose: () => void;
}

export default function SkillsContent({
  isActive,
  onClose,
}: SkillsContentProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    if (isActive) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 반응형 패딩 계산
  const getResponsivePadding = () => {
    if (windowWidth < 768) {
      // 모바일
      return '16px';
    } else if (windowWidth < 1024) {
      // 태블릿
      return '32px';
    } else {
      // 데스크톱
      return '65px';
    }
  };

  const responsivePadding = getResponsivePadding();
  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 75 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 75 },
      { name: 'Jest', level: 80 },
    ],
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm md:text-base font-medium">{name}</span>
        <span className="text-xs md:text-sm text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-1.5">
        <div
          className="bg-white h-1.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-45 flex items-start justify-center"
      style={{
        paddingTop: '190px',
      }}
    >
      {/* X 버튼 - 스크롤 영역 밖에 고정 */}
      <button
        onClick={onClose}
        className="fixed w-14 h-14 flex items-center justify-center text-white hover:text-gray-300 transition-all duration-500 z-50 group"
        style={{
          top: '32px',
          right:
            windowWidth < 768 ? '16px' : windowWidth < 1024 ? '32px' : '65px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        title="닫기"
        onMouseEnter={e => {
          const circle = e.currentTarget.querySelector(
            '.draw-circle'
          ) as SVGCircleElement;
          if (circle) {
            circle.style.strokeDashoffset = '0';
          }
        }}
        onMouseLeave={e => {
          const circle = e.currentTarget.querySelector(
            '.draw-circle'
          ) as SVGCircleElement;
          if (circle) {
            circle.style.strokeDashoffset = '163.36';
          }
        }}
      >
        {/* 동그라미 애니메이션 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 56 56"
          style={{
            transform: 'rotate(-90deg)',
          }}
        >
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="163.36"
            strokeDashoffset="163.36"
            className="draw-circle"
            style={{
              transition:
                'stroke-dashoffset 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />
        </svg>

        {/* X 아이콘 - 크기 증가 */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="max-w-7xl text-white overflow-y-auto w-full custom-scrollbar"
        style={{
          paddingLeft: responsivePadding,
          paddingRight: responsivePadding,
          fontFamily: "'Noto Sans KR', sans-serif",
          maxHeight:
            windowWidth < 768
              ? 'calc(100vh - 140px - 50px)'
              : 'calc(100vh - 190px - 50px)',
          paddingBottom: '50px',
          transform: shouldAnimate ? 'translateY(0)' : 'translateY(80px)',
          opacity: shouldAnimate ? 1 : 0,
          transition: shouldAnimate
            ? 'transform 0.5s ease-out 0.5s, opacity 0.5s ease-out 0.6s'
            : 'none',
          visibility: isActive ? 'visible' : 'hidden',
        }}
      >
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.3);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(226, 232, 240, 0.3);
            border-radius: 10px;
            transition: all 0.3s ease;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(226, 232, 240, 0.6);
            transform: scale(1.1);
          }
        `}</style>
        <h2 className="text-lg md:text-xl lg:text-xl font-semibold mb-6">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2">
              Frontend
            </h3>
            <div className="space-y-3">
              {skills.frontend.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <SkillBar name={skill.name} level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2">
              Backend
            </h3>
            <div className="space-y-3">
              {skills.backend.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <SkillBar name={skill.name} level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2">
              Tools & Others
            </h3>
            <div className="space-y-3">
              {skills.tools.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <SkillBar name={skill.name} level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-base md:text-lg font-semibold mb-4">
            Learning Philosophy
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            기술은 끊임없이 발전하고 있습니다. 저는 항상 새로운 기술을 배우고
            기존 지식을 업데이트하며, 더 나은 개발자가 되기 위해 노력하고
            있습니다. 각 기술 스택에서 실무 경험을 바탕으로 지속적인 성장을
            추구하며, 팀과 프로젝트에 최적화된 솔루션을 제공하기 위해 끊임없이
            학습하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
