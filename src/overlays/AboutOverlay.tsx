import { useEffect, useState } from 'react';

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
        paddingTop: windowWidth < 768 ? '140px' : '190px',
      }}
    >
      {/* X 버튼 - 스크롤 영역 밖에 고정 */}
      <button
        onClick={onClose}
        className="fixed w-14 h-14 flex items-center justify-center text-white hover:text-gray-300 transition-all duration-500 z-50 group"
        style={{
          top: '32px',
          right: '65px',
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
        <div>
          <h2 className="text-lg md:text-xl lg:text-xl font-semibold mb-6">
            About Me
          </h2>

          <div className="space-y-8">
            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              안녕하세요, 고미영입니다. 저는 5년 이상의 경험을 보유한 풀스택
              개발자로서, 사용자 중심의 웹 애플리케이션 개발에 전념하고
              있습니다. 프론트엔드에서는 React, TypeScript, Vue.js를 주로
              사용하며, 백엔드에서는 Node.js, Spring Boot, Python을 활용한
              다양한 프로젝트를 성공적으로 완료했습니다. 특히 사용자 경험(UX)을
              최우선으로 고려한 인터페이스 설계와 성능 최적화에 강점을 가지고
              있으며, 복잡한 비즈니스 로직을 효율적으로 구현하는 것을 즐깁니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              현재까지 대기업부터 스타트업까지 다양한 규모의 조직에서 근무하며
              폭넓은 경험을 쌓아왔습니다. 삼성SDS에서 대규모 엔터프라이즈
              시스템을 구축하며 안정성과 확장성의 중요성을 깊이 이해했고,
              스타트업 환경에서는 빠른 프로토타이핑과 MVP 개발을 통해 민첩한
              개발 프로세스를 체득했습니다. 팀 협업에서는 코드 리뷰와 지식
              공유를 통해 팀 전체의 기술 역량 향상에 기여하는 것을 중요하게
              생각하며, 신기술 도입 시에는 항상 팀원들과 충분한 논의를 거쳐
              최적의 기술 스택을 선택하고자 노력합니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              개발자로서 지속적인 성장을 위해 새로운 기술 트렌드를 적극적으로
              학습하고 적용하고 있습니다. 최근에는 클라우드 네이티브 아키텍처와
              마이크로서비스, 그리고 DevOps 문화에 깊은 관심을 가지고 있으며,
              AWS와 Docker를 활용한 현대적인 배포 파이프라인 구축에 열정을 쏟고
              있습니다. 또한 사용자 접근성과 웹 표준을 준수하는 개발을 중시하며,
              모든 사용자가 불편함 없이 서비스를 이용할 수 있도록 하는 것이
              개발자의 사회적 책임이라고 생각합니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              개인적으로는 오픈소스 프로젝트 기여와 기술 블로그 작성을 통해 개발
              커뮤니티와 지식을 나누는 것을 좋아합니다. 또한 주니어 개발자들의
              멘토링에도 관심이 많아 개발자 모임이나 세미나에 적극적으로
              참여하고 있습니다. 업무 외에는 새로운 프로그래밍 언어를 학습하거나
              사이드 프로젝트를 통해 창의적인 아이디어를 구현해보는 시간을
              보내며, 이러한 경험들이 본업에서도 더 나은 개발자가 되는 데 큰
              도움이 되고 있다고 생각합니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              현재는 차세대 웹 기술인 WebAssembly와 Progressive Web App에 대한
              연구를 진행하고 있으며, 특히 모바일 웹 성능 최적화 분야에서
              혁신적인 솔루션을 개발하는 것이 목표입니다. 미래에는 AI와 머신러닝
              기술을 웹 개발에 접목시켜 더욱 지능적이고 개인화된 사용자 경험을
              제공하는 서비스를 만들고 싶습니다.
            </p>

            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              협업에서는 소통을 가장 중요하게 생각하며, 다양한 배경을 가진
              팀원들과 함께 일하는 것을 즐깁니다. 기획자, 디자이너, QA 엔지니어
              등 다른 직무의 동료들과 효과적으로 협업하기 위해 각 분야에 대한
              기본적인 이해를 넓히려고 노력하고 있습니다. 또한 글로벌 팀과의
              원활한 소통을 위해 영어 실력 향상에도 지속적으로 투자하고 있으며,
              문화적 다양성을 존중하는 포용적인 개발 문화 조성에 기여하고
              싶습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
