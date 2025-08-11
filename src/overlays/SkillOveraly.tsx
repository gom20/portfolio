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
    backend: [
      { name: 'Java', category: 'Language', experience: '5+ years' },
      { name: 'Spring Boot', category: 'Framework', experience: '3+ years' },
      { name: 'OracleSQL', category: 'Database', experience: '3+ years' },
    ],
    frontend: [
      { name: 'JavaScript', category: 'Language', experience: '5+ years' },
      { name: 'TypeScript', category: 'Language', experience: '3+ years' },
      { name: 'React', category: 'Framework', experience: '3+ years' },
      { name: 'Redux', category: 'State Management', experience: '2+ years' },
    ],
    database: [
      { name: 'Oracle', category: 'RDBMS', experience: '3+ years' },
      { name: 'MySQL', category: 'RDBMS', experience: '2+ years' },
      { name: 'Redis', category: 'NoSQL', experience: '1+ years' },
    ],
    ide: [
      { name: 'Eclipse', category: 'Java IDE', experience: '3+ years' },
      {
        name: 'Visual Studio Code',
        category: 'Code Editor',
        experience: '3+ years',
      },
      { name: 'IntelliJ', category: 'Java IDE', experience: '2+ years' },
    ],
    versionControl: [
      { name: 'GitHub', category: 'Version Control', experience: '3+ years' },
      { name: 'SVN', category: 'Version Control', experience: '3+ years' },
    ],
    tools: [
      { name: 'JIRA', category: 'Project Management', experience: '3+ years' },
      { name: 'Confluence', category: 'Documentation', experience: '3+ years' },
    ],
  };

  const SkillTag = ({ skill }: { skill: any }) => (
    <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 py-1 text-xs text-white hover:bg-white/15 transition-all duration-300 hover:scale-105 mr-2 mb-2">
      {skill.name}
    </span>
  );

  return (
    <div
      className="fixed inset-0 z-45 flex items-start justify-center"
      style={{
        paddingTop: '190px',
      }}
    >
      {/* X 버튼 - 반응형 스타일 */}
      <button
        onClick={onClose}
        className={`fixed flex items-center justify-center text-white hover:text-gray-300 transition-all duration-500 z-50 ${
          windowWidth < 768 ? 'w-10 h-10' : 'w-14 h-14 group'
        }`}
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
          if (windowWidth >= 768) {
            const circle = e.currentTarget.querySelector(
              '.draw-circle'
            ) as SVGCircleElement;
            if (circle) {
              circle.style.strokeDashoffset = '0';
            }
          }
        }}
        onMouseLeave={e => {
          if (windowWidth >= 768) {
            const circle = e.currentTarget.querySelector(
              '.draw-circle'
            ) as SVGCircleElement;
            if (circle) {
              circle.style.strokeDashoffset = '163.36';
            }
          }
        }}
      >
        {/* 동그라미 - 반응형 스타일 */}
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
            stroke={windowWidth < 768 ? '#d1d5db' : 'rgba(255, 255, 255, 0.1)'}
            strokeWidth="1"
          />
          {windowWidth >= 768 && (
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
          )}
        </svg>

        {/* X 아이콘 - 반응형 크기 */}
        <svg
          width={windowWidth < 768 ? '20' : '24'}
          height={windowWidth < 768 ? '20' : '24'}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${
            windowWidth < 768
              ? ''
              : 'relative z-10 transition-transform duration-300 group-hover:scale-110'
          }`}
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
            background: rgba(26, 26, 26, 0.3);
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
        <h2
          className="text-lg md:text-xl lg:text-xl font-semibold mb-6"
          style={{ fontFamily: 'TheJamsil' }}
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              Back-end
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.backend.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Retail 솔루션 개발 업무로 Spring 기반 웹서버를 개발한 경험이
              있습니다. MES 시스템 운영 업무로 Java 기반의 배치 프로그램을
              유지보수 하였습니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              Front-end
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.frontend.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Smart TV 웹앱 개발자로 경력을 시작했습니다. Javascript, HTML,
              CSS와 같은 기본적인 프론트엔드 기술에 익숙하며 최신 프론트엔드
              기술도 지속적으로 학습하고 있습니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              Database
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.database.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Oracle과 MySQL을 활용한 관계형 데이터베이스 설계 및 최적화 경험이
              있습니다. Redis를 통한 캐싱 시스템 구축 경험도 보유하고 있습니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              IDE
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.ide.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Java 로 개발하는 업무는 주로 Eclipse IDE를 사용하였습니다.
              프론트엔드 개발은 주로 Visual Studio Code를 사용합니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              Version Control
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.versionControl.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              실무에서 SVN과 Git 모두 사용한 경험이 있습니다. 현재는 Github를
              사용하여 형상 관리를 하고 있습니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              Tool
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.tools.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              솔루션 개발 업무에서 Jira로 이슈 관리를 하였습니다. 시스템 운영
              업무에서 Confluence를 사용하여 운영 정보를 공유하였습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
