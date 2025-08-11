import { useEffect, useState } from 'react';
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaDesktop,
  FaGitAlt,
  FaTools,
  FaFileAlt,
} from 'react-icons/fa';

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
      { name: 'NodeJS', category: 'Runtime', experience: '2+ years' },
      { name: 'Express', category: 'Framework', experience: '2+ years' },
    ],
    frontend: [
      { name: 'Javascript', category: 'Language', experience: '5+ years' },
      { name: 'TypeScript', category: 'Language', experience: '3+ years' },
      { name: 'React', category: 'Framework', experience: '3+ years' },
      { name: 'Vue', category: 'Framework', experience: '2+ years' },
      { name: 'HTML/CSS', category: 'Markup/Styling', experience: '5+ years' },
    ],
    database: [
      { name: 'OracleDB', category: 'RDBMS', experience: '3+ years' },
      { name: 'TiberoDB', category: 'RDBMS', experience: '2+ years' },
      { name: 'MariaDB', category: 'RDBMS', experience: '2+ years' },
      { name: 'MongoDB', category: 'NoSQL', experience: '1+ years' },
      { name: 'Redis', category: 'NoSQL', experience: '1+ years' },
    ],
    ide: [
      { name: 'Eclipse', category: 'Java IDE', experience: '3+ years' },
      { name: 'IntelliJ', category: 'Java IDE', experience: '2+ years' },
      { name: 'WebStorm', category: 'JavaScript IDE', experience: '2+ years' },
      { name: 'VSCode', category: 'Code Editor', experience: '3+ years' },
      { name: 'Cursor AI', category: 'AI Code Editor', experience: '1+ years' },
    ],
    versionControl: [
      { name: 'Git', category: 'Version Control', experience: '3+ years' },
      { name: 'SVN', category: 'Version Control', experience: '3+ years' },
    ],
    tools: [
      { name: 'JIRA', category: 'Project Management', experience: '3+ years' },
      { name: 'Confluence', category: 'Documentation', experience: '3+ years' },
      { name: 'Figma', category: 'Design Tool', experience: '2+ years' },
    ],
    documentation: [
      {
        name: 'Technical Writing',
        category: 'Documentation',
        experience: '3+ years',
      },
      {
        name: 'API Documentation',
        category: 'Documentation',
        experience: '2+ years',
      },
      {
        name: 'User Manual',
        category: 'Documentation',
        experience: '2+ years',
      },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              <FaServer className="text-blue-400" />
              Backend
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.backend.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              삼성 SDS Nexshop Sales 솔루션에서 Spring Framework 기반 API 서버
              개발을 시작으로 백엔드 개발 경험을 쌓기 시작했습니다. 삼성전자
              반도체 자재 사용량 분석 시스템에서는 Java 기반 배치 프로그램
              운영을 담당했으며, 넥슨 사내 설문 시스템과 KIA 자동차 스마트태그
              시스템에서 Spring Boot를 활용한 백엔드 개발을 수행했습니다.
              넥슨퍼스트 유지보수 업무로 NodeJS와 Express를 활용한 경험도
              있으며, 최근에는 현대글로비스 차량 위치 관리 시스템에서 Java 17과
              Spring Boot 환경에서 MQTT, SNMP, TCP Socket 등 다양한 통신
              프로토콜을 활용한 인터페이스 개발을 진행하며 기술 역량을
              확장했습니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              <FaCode className="text-green-400" />
              Frontend
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.frontend.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              삼성전자 Smart TV 웹앱 개발자로 경력을 시작하여 JavaScript, HTML,
              CSS 등 웹 기술 기반의 UI 개발 경험을 쌓았습니다. 삼성 SDS Nexshop
              Sales 솔루션에서는 Javascript를 활용한 관리자 웹 화면을
              구현했으며, 넥슨 사내 설문 시스템에서는 Vue.js 환경에서 신규 기능
              개발을 담당했습니다. 또한 개인 프로젝트로 React Native를 활용하여
              간단한 애플리케이션을 개발하여 안드로이드 마켓에 출시한 경험도
              있습니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              <FaDatabase className="text-yellow-400" />
              Database
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.database.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              삼성 SDS Nexshop Sales 솔루션에서 MariaDB기반 담당 모듈의 테이블
              설계를 시작으로 데이터베이스 기술 역량을 쌓았습니다. 삼성전자
              반도체 자재 사용량 분석 시스템에서는 Oracle 환경에서 대용량 데이터
              처리와 쿼리 성능 최적화 작업을 수행했으며, 넥슨 퍼스트 유지보수
              업무를 통해 MongoDB를 접해보며 NoSQL 운영 경험을 쌓았습니다. KIA
              자동차 스마트태그 시스템에서는 Tibero DB 환경에서의 데이터 CRUD
              로직을 개발했으며, 최근 현대글로비스 차량 위치 관리 시스템에서는
              MariaDB 기반의 전체 테이블 설계를 주도적으로 수행했습니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              <FaDesktop className="text-purple-400" />
              IDE
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.ide.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Backend 개발의 경우 IntelliJ를 즐겨 사용하고 있습니다. Frontend
              개발은 Visual Studio Code를 주로 사용했으며, 최근에는 Cursor를
              활용한 AI 코딩 도구를 적극적으로 사용하고 있습니다. ChatGPT,
              Claude, Gemini 등 다양한 AI 모델을 활용하여 프롬프트 엔지니어링
              경험을 쌓고 있으며, AI와의 효과적인 협업을 통해 코드 품질과 개발
              속도를 개선하고 있습니다. 특히 Vibe Coding을 즐기며 개발하고 있어
              AI와 함께하는 창의적인 코딩 환경을 추구합니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              <FaGitAlt className="text-orange-400" />
              Version Control
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.versionControl.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Git을 주로 사용하고 있으며, Nexshop Sales와 넥슨 퍼스트 개발
              시에는 GitFlow를 경험해보았습니다. 오래 전에는 SVN을 사용했는데,
              제조업 쪽은 폐쇄망 환경이고 SI 프로젝트의 경우 SVN을 사용하는
              경우가 많았습니다. 최근에는 Git 기반의 현대적인 버전 관리
              시스템으로 전환하여 브랜치 전략과 협업 워크플로우를 체계적으로
              관리하고 있습니다.
            </p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              <FaTools className="text-red-400" />
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

          <div>
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{ fontFamily: 'TheJamsil' }}
            >
              <FaFileAlt className="text-green-400" />
              Documentation
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.documentation.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              인터페이스 설계서, 화면설계서, 요구사항 정의서, 요구사항 추적
              메트릭스, 단위테스트 명세서, 테이블 정의서, 시스템 데이터 플로우
              등 다양한 설계 문서를 작성한 경험이 있습니다. 이러한 문서화를 통해
              개발팀과 운영팀 간의 원활한 소통을 지원하며, 프로젝트의 일관성과
              품질을 보장하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
