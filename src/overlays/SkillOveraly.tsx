import { useEffect, useState, useRef, useCallback } from 'react';
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
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      // 약간의 지연을 두어 초기 렌더링 완료 후 애니메이션 시작
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
      setVisibleSections(new Set());
    }
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer를 사용한 스크롤 애니메이션
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (sectionId) {
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        }
      });
    },
    []
  );

  useEffect(() => {
    if (!isActive || !shouldAnimate) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    // 모든 섹션을 관찰
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [isActive, shouldAnimate, handleIntersection]);

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
        name: 'System Design Documentation',
        category: 'Documentation',
        experience: '2+ years',
      },
    ],
  };

  const SkillTag = ({ skill }: { skill: any }) => (
    <span
      className="inline-block border border-white/20 rounded-full px-2 py-1 text-xs text-white mr-2 mb-2"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      }}
    >
      {skill.name}
    </span>
  );

  // 애니메이션 지연 시간 계산
  const getAnimationDelay = (index: number) => {
    return `${index * 0.1}s`;
  };

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
        ref={containerRef}
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
            ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s, opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div
            ref={el => {
              sectionRefs.current.backend = el;
            }}
            data-section-id="backend"
            style={{
              transform: visibleSections.has('backend')
                ? 'translateY(0)'
                : 'translateY(30px)',
              opacity: visibleSections.has('backend') ? 1 : 0,
              transition:
                'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: getAnimationDelay(0),
            }}
          >
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{
                fontFamily: 'TheJamsil',
                fontWeight: '400',
                opacity: 0.85,
              }}
            >
              <FaServer className="text-gray-300" />
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
            <br />
          </div>

          <div
            ref={el => {
              sectionRefs.current.frontend = el;
            }}
            data-section-id="frontend"
            style={{
              transform: visibleSections.has('frontend')
                ? 'translateY(0)'
                : 'translateY(30px)',
              opacity: visibleSections.has('frontend') ? 1 : 0,
              transition:
                'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: getAnimationDelay(1),
            }}
          >
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{
                fontFamily: 'TheJamsil',
                fontWeight: '400',
                opacity: 0.85,
              }}
            >
              <FaCode className="text-gray-300" />
              Frontend
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.frontend.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              삼성전자 Smart TV 웹앱 개발자로 경력을 시작하여 JavaScript, HTML,
              CSS 등 웹 기술 기반의 Frontend 개발 경험을 쌓았습니다. 삼성 SDS
              Nexshop Sales 솔루션에서는 Javascript를 활용한 관리자 웹 화면을
              구현했으며, 넥슨 사내 설문 시스템에서는 Vue.js 환경에서 신규 기능
              개발을 담당했습니다. 또한 개인 프로젝트로 React Native를 활용하여
              간단한 애플리케이션을 개발하여 안드로이드 마켓에 출시한 경험도
              있습니다.
            </p>
            <br />
          </div>

          <div
            ref={el => {
              sectionRefs.current.database = el;
            }}
            data-section-id="database"
            style={{
              transform: visibleSections.has('database')
                ? 'translateY(0)'
                : 'translateY(30px)',
              opacity: visibleSections.has('database') ? 1 : 0,
              transition:
                'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: getAnimationDelay(2),
            }}
          >
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{
                fontFamily: 'TheJamsil',
                fontWeight: '400',
                opacity: 0.85,
              }}
            >
              <FaDatabase className="text-gray-300" />
              Database
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.database.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              삼성 SDS Nexshop Sales 솔루션에서 MariaDB 기반 담당 모듈의 테이블
              설계를 시작으로 데이터베이스 기술 역량을 쌓았습니다. 삼성전자
              반도체 자재 사용량 분석 시스템에서는 Oracle 환경에서 대용량 데이터
              처리와 쿼리 성능 최적화 작업을 수행했으며, 넥슨 퍼스트 유지보수
              업무를 통해 MongoDB를 접해보며 NoSQL 운영 경험을 해보았습니다. KIA
              자동차 스마트태그 시스템에서는 Tibero DB 환경에서의 데이터 CRUD
              로직을 개발했으며, 최근 현대글로비스 차량 위치 관리 시스템에서는
              MariaDB 기반의 전체 테이블 설계를 주도적으로 수행했습니다.
            </p>
            <br />
          </div>

          <div
            ref={el => {
              sectionRefs.current.ide = el;
            }}
            data-section-id="ide"
            style={{
              transform: visibleSections.has('ide')
                ? 'translateY(0)'
                : 'translateY(30px)',
              opacity: visibleSections.has('ide') ? 1 : 0,
              transition:
                'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: getAnimationDelay(3),
            }}
          >
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{
                fontFamily: 'TheJamsil',
                fontWeight: '400',
                opacity: 0.85,
              }}
            >
              <FaDesktop className="text-gray-300" />
              IDE
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.ide.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Backend 개발에서는 IntelliJ IDEA를 주력으로 사용하고 있으며,
              Frontend 개발은 Visual Studio Code를 기반으로 하되 최근에는
              Cursor를 통한 AI 코딩 환경으로 전환하여 개발 효율성을 높이고
              있습니다. ChatGPT, Claude, Gemini 등 다양한 AI 모델과의 협업을
              통해 프롬프트 엔지니어링 역량을 축적했으며, AI 페어 프로그래밍을
              활용하여 코드 품질 향상과 개발 속도 최적화를 실현하고 있습니다.
              AI와 함께하는 직관적인 개발 과정을 통해 아이디어를 빠르게
              프로토타이핑하고, 기술적 완성도와 개발 효율성을 동시에 추구하고
              있습니다.
            </p>
            <br />
          </div>

          <div
            ref={el => {
              sectionRefs.current.versionControl = el;
            }}
            data-section-id="versionControl"
            style={{
              transform: visibleSections.has('versionControl')
                ? 'translateY(0)'
                : 'translateY(30px)',
              opacity: visibleSections.has('versionControl') ? 1 : 0,
              transition:
                'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: getAnimationDelay(4),
            }}
          >
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{
                fontFamily: 'TheJamsil',
                fontWeight: '400',
                opacity: 0.85,
              }}
            >
              <FaGitAlt className="text-gray-300" />
              Version Control
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.versionControl.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              제조 분야 업무에서는 폐쇄망과 레거시 시스템 환경 특성상 SVN을
              활용한 버전 관리를 경험했습니다. 팀 협업 프로젝트에서는 주로 Git을
              사용하였으며, GitFlow 브랜치 전략을 적용하여 체계적인 코드 관리와
              배포 프로세스를 수행했습니다. 개인 프로젝트 및 일반적인 개발
              업무에서도 주로 Git을 사용하고 있습니다. 다양한 개발 환경과
              프로젝트 규모에 따른 적절한 버전 관리 전략을 선택하여 효율적인
              개발 워크플로우를 구축하고 있습니다.
            </p>
            <br />
          </div>

          <div
            ref={el => {
              sectionRefs.current.tools = el;
            }}
            data-section-id="tools"
            style={{
              transform: visibleSections.has('tools')
                ? 'translateY(0)'
                : 'translateY(30px)',
              opacity: visibleSections.has('tools') ? 1 : 0,
              transition:
                'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: getAnimationDelay(5),
            }}
          >
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{
                fontFamily: 'TheJamsil',
                fontWeight: '400',
                opacity: 0.85,
              }}
            >
              <FaTools className="text-gray-300" />
              Tool
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.tools.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              솔루션 개발 프로젝트에서 Jira를 활용하여 이슈 등록, 우선순위 지정,
              진행 상태 추적을 수행하였으며, 백로그와 칸반 보드를 통해 팀원 간
              작업 현황을 시각적으로 공유하고 업무 병목을 조기에 발견하였습니다.
              시스템 운영 업무에서는 Confluence를 사용하여 운영 매뉴얼, 장애
              대응 절차, 배포 이력 등 주요 문서를 작성·관리하고, 권한 설정을
              통해 보안성을 확보하며 운영 정보를 체계적으로 공유하였습니다.
              또한, 신규 시스템 구축 시 Figma를 활용하여 초기 와이어프레임을
              제작하고 기획 방향을 시각적으로 정리하였습니다.
            </p>
            <br />
          </div>

          <div
            ref={el => {
              sectionRefs.current.documentation = el;
            }}
            data-section-id="documentation"
            style={{
              transform: visibleSections.has('documentation')
                ? 'translateY(0)'
                : 'translateY(30px)',
              opacity: visibleSections.has('documentation') ? 1 : 0,
              transition:
                'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: getAnimationDelay(6),
            }}
          >
            <h3
              className="text-base md:text-lg font-semibold mb-4 border-b border-gray-400 pb-2 flex items-center gap-2"
              style={{
                fontFamily: 'TheJamsil',
                fontWeight: '400',
                opacity: 0.85,
              }}
            >
              <FaFileAlt className="text-gray-300" />
              Documentation
            </h3>
            <div className="flex flex-wrap mb-4">
              {skills.documentation.map(skill => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              인터페이스 설계서, 화면설계서, 요구사항 정의서, 요구사항 추적
              매트릭스, 단위테스트 명세서, 테이블 정의서, 시스템 데이터 플로우
              등 다양한 설계 문서를 작성하여 프로젝트의 핵심 산출물을 체계적으로
              관리하였습니다. 이러한 문서화 작업을 통해 요구사항을 명확히 하고
              구현 방향을 구체화하여, 프로젝트의 일관성과 품질을 유지하였습니다.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
