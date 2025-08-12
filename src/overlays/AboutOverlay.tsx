import { useEffect, useState } from 'react';
import { FaGithub, FaBlog, FaEnvelope } from 'react-icons/fa';

interface AboutContentProps {
  isActive: boolean;
  onClose: () => void;
}

export default function AboutOverlay({ isActive, onClose }: AboutContentProps) {
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
        <div>
          <div className="space-y-8">
            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              안녕하세요, 고미영입니다. 저는 2013년부터 현재까지 다양한 환경에서
              풀스택 개발자로서 성장해온 개발자입니다. 삼성SDS에서 시작하여 넥슨
              등에서 Java/Spring Boot 기반의 백엔드 개발과 React, Vue.js를
              활용한 프론트엔드 개발을 모두 담당하며 풀스택 개발 역량을
              쌓아왔습니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              삼성SDS에서는 PeakPerformance Framework를 활용한 대규모
              엔터프라이즈 시스템 구축 경험을 통해 안정성과 확장성의 중요성을
              깊이 이해했습니다. 특히 OracleDB와 SQL을 활용한 데이터베이스 설계
              및 최적화, 그리고 Eclipse, SVN, JIRA, Confluence 등을 통한
              체계적인 개발 프로세스 관리 경험을 쌓았습니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              넥슨에서는 사내 설문 시스템 신규 기능 개발과 백오피스 대시보드
              구축을 담당했습니다. Spring Boot와 Vue.js를 활용한 NPTI 설문 유형
              기능 개발을 통해 풀스택 구현 능력을 입증했으며, 이는 실제 서비스에
              성공적으로 적용되어 비즈니스 가치를 창출했습니다. 또한 Parse,
              Node.js, Express 기반의 백오피스 시스템과 MongoDB, MySQL,
              QueryDSL을 활용한 데이터베이스 설계 경험도 보유하고 있습니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              개발자로서 지속적인 성장을 위해 새로운 기술 트렌드를 적극적으로
              학습하고 적용하고 있습니다. IntelliJ, WebStorm 등 현대적인 개발
              도구를 활용하며, Git을 통한 버전 관리와 체계적인 코드 리뷰
              프로세스를 통해 코드 품질 향상에 기여하고 있습니다. 특히 사용자
              중심의 개발 철학을 바탕으로 안정적이고 확장 가능한 시스템을
              구축하는 것이 목표입니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              프로젝트 관리와 협업에서는 단독 개발자로서 주도적으로 프로젝트를
              진행하는 능력을 보유하고 있으며, 팀 프로젝트에서도 효과적인 소통과
              협업을 통해 성과를 달성해왔습니다. 다양한 규모의 조직에서 근무하며
              폭넓은 시각을 갖춘 개발자로 성장했으며, 새로운 기술 도입 시에는
              항상 팀원들과 충분한 논의를 거쳐 최적의 기술 스택을 선택하고자
              노력합니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              앞으로도 클라우드 네이티브 아키텍처와 마이크로서비스, DevOps
              문화에 대한 학습을 통해 더욱 현대적이고 효율적인 개발 환경을
              구축하고 싶습니다. 또한 AI와 머신러닝 기술을 웹 개발에 접목시켜
              더욱 지능적이고 개인화된 사용자 경험을 제공하는 서비스를 만들어
              가겠습니다.
            </p>

            {/* 링크 섹션 */}
            <div className="pt-8 border-t border-gray-600">
              <h3
                className="text-lg md:text-xl font-semibold mb-6 text-white"
                style={{ fontFamily: 'TheJamsil' }}
              >
                Contact & Links
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://yourblog.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <FaBlog className="text-xl" />
                  <span>Blog</span>
                </a>

                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <FaEnvelope className="text-xl" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
