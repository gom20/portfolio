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
            <p
              className="text-sm md:text-base lg:text-base leading-relaxed"
              style={{ color: 'rgb(209 213 219 / var(--tw-text-opacity, 1))' }}
            >
              완성도와 디테일을 중시하는 10년차 개발자 고미영입니다.
            </p>

            <p
              className="text-sm md:text-base lg:text-base leading-relaxed"
              style={{ color: 'rgb(209 213 219 / var(--tw-text-opacity, 1))' }}
            >
              복잡한 요구사항도 체계적으로 분석하고 단계별로 해결하며, 문제
              상황에서는 다양한 시도를 통해 최적의 해답을 찾아냅니다. 무엇보다
              주석 없이도 이해되는 명확하고 깔끔한 코드 작성을 개발의 핵심
              원칙으로 삼고 있습니다. 가독성과 유지보수성을 고려한 구조 설계를
              통해 확장 가능한 소프트웨어를 만들어내며, 사용자 경험과 기술적
              완성도를 모두 만족시키는 결과물을 추구합니다. 새로운 기술은 이론적
              학습보다는 직접 구현과 실험을 통해 빠르게 습득하며, 이 과정에서
              얻는 성취감이 지속적인 성장의 동력이 됩니다. 앞으로는 AI 프롬프트
              엔지니어링과 아키텍처 설계 역량을 강화해, 기술로 더 큰 가치를
              창출하는 개발자로 성장하고자 합니다.
            </p>

            {/* 우측 Github 아이콘과 Tistory 아이콘 */}
            <div className="pt-8 flex justify-end">
              <div className="flex flex-col items-end gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <FaEnvelope
                      className="text-sm text-white"
                      style={{ opacity: 0.85 }}
                    />
                    <p
                      className="text-sm font-light text-white"
                      style={{ fontFamily: 'TheJamsil' }}
                    >
                      rhaldud89@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/gom20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-105"
                    style={{ opacity: 0.85 }}
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://gom20.tistory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-105"
                    style={{ opacity: 0.85 }}
                  >
                    <img
                      src="/tistory.svg"
                      alt="Tistory"
                      className="w-6 h-6"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </a>
                  <a
                    href="https://open.kakao.com/o/swKFAh4e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-105"
                    style={{ opacity: 0.85 }}
                  >
                    <img
                      src="/kakao.svg"
                      alt="Kakao"
                      className="w-6 h-6"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
