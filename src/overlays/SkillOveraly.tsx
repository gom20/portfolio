import React, { useEffect, useState } from 'react';

interface SkillsContentProps {
  isActive: boolean;
}

export default function SkillsContent({ isActive }: SkillsContentProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isActive]);
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
        paddingTop: '170px',
      }}
    >
      <div
        className="max-w-7xl text-white overflow-y-auto w-full"
        style={{
          paddingLeft: '65px',
          paddingRight: '65px',
          fontFamily: "'Noto Sans KR', sans-serif",
          maxHeight: 'calc(100vh - 170px - 50px)',
          paddingBottom: '50px',
          transform: shouldAnimate ? 'translateY(0)' : 'translateY(80px)',
          opacity: shouldAnimate ? 1 : 0,
          transition: shouldAnimate
            ? 'transform 0.5s ease-out 0.5s, opacity 0.5s ease-out 0.6s'
            : 'none',
          visibility: isActive ? 'visible' : 'hidden',
        }}
      >
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
