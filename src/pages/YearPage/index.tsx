import { useState, useEffect } from 'react';
import { useWindowWidth } from '../../hooks/useResponsive';
import { menuItems } from '../../data/menuData';

// 년도별 컨텐츠 컴포넌트들
import Year2013 from './content/Year2013';
import Year2014 from './content/Year2014';
import Year2017 from './content/Year2017';
import Year2021 from './content/Year2021';
import Year2023 from './content/Year2023';
import Year2024 from './content/Year2024';
import Year2025 from './content/Year2025';

// 애니메이션 상수
const ANIMATION_DELAYS = {
  VISIBILITY: 100,
  BACK_BUTTON: 400,
  YEAR_HEADER: 600,
  CONTENT: 1200,
} as const;

const TRANSITION_DURATIONS = {
  FAST: '0.2s',
  NORMAL: '0.3s',
  SLOW: '0.8s',
  SLOWER: '1.2s',
} as const;

interface YearPageProps {
  year: string;
  onBack: () => void;
  onChangeYear: (year: string) => void;
}

export default function YearPage({
  year,
  onBack,
  onChangeYear,
}: YearPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isYearTransitioning, setIsYearTransitioning] = useState(false);

  const windowWidth = useWindowWidth();

  // 년도에 따른 컨텐츠 컴포넌트 렌더링
  const renderYearContent = () => {
    switch (year) {
      case '2013':
        return <Year2013 />;
      case '2014':
        return <Year2014 />;
      case '2017':
        return <Year2017 />;
      case '2021':
        return <Year2021 />;
      case '2023':
        return <Year2023 />;
      case '2024':
        return <Year2024 />;
      case '2025':
        return <Year2025 />;
      default:
        return (
          <div className="text-lg text-gray-500 mb-12">
            <div className="text-left py-8 rounded-lg">
              <div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {year}년 프로젝트
                  </h2>
                  <p className="text-gray-600 mb-2">업데이트 예정</p>
                  <p className="text-gray-700">
                    {year}년에 진행한 프로젝트들의 상세 내용이 곧 업데이트될
                    예정입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  // 페이지 전환 애니메이션 트리거
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, ANIMATION_DELAYS.VISIBILITY);

    return () => clearTimeout(timer);
  }, []);

  // 스크롤 이벤트 리스너 - 연도 텍스트 크기 조정용
  useEffect(() => {
    const scrollContainer = document.querySelector(
      '.year-page-scroll-container'
    );

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;
      setScrollY(scrollTop);
      if (scrollTop > 0) {
        setHasScrolled(true);
      }
      const threshold = 8; // px
      const atBottom =
        Math.ceil(target.scrollTop + target.clientHeight) >=
        target.scrollHeight - threshold;

      // 전환 중이 아닐 때만 바닥 상태 업데이트
      if (!isYearTransitioning) {
        setIsAtBottom(atBottom);
      }
    };

    if (scrollContainer) {
      // 초기 상태에서도 바닥 여부 계산 (전환 중이 아닐 때만)
      if (!isYearTransitioning) {
        const target = scrollContainer as HTMLElement;
        const threshold = 8;
        const initialAtBottom =
          Math.ceil(target.scrollTop + target.clientHeight) >=
          target.scrollHeight - threshold;
        setIsAtBottom(initialAtBottom);
      }

      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // 연도 변경 시 스크롤 위치 초기화 및 상태 리셋
  useEffect(() => {
    setIsYearTransitioning(true);
    setIsAtBottom(false);
    setHasScrolled(false);
    setScrollY(0);

    const scrollContainer = document.querySelector(
      '.year-page-scroll-container'
    ) as HTMLElement | null;
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'auto' });
    }

    // 스크롤 초기화 완료 후 전환 상태 해제 (더 긴 지연시간)
    const timer = setTimeout(() => {
      setIsYearTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [year]);

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  return (
    <div
      className="w-full h-full relative"
      style={{
        background: 'transparent',
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${TRANSITION_DURATIONS.FAST} ease-in-out`,
      }}
    >
      {/* 뒤로가기 버튼 - 원형 테두리 + 호버 시 선 채움 애니메이션 복원 */}
      <button
        onClick={handleBack}
        className={`fixed flex items-center justify-center text-white hover:text-gray-200 transition-all duration-500 z-50 ${
          windowWidth < 768 ? 'w-10 h-10' : 'w-14 h-14 group'
        }`}
        style={{
          top: '32px',
          left:
            windowWidth < 768 ? '16px' : windowWidth < 1024 ? '32px' : '65px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
          transition: `opacity ${TRANSITION_DURATIONS.SLOW} ease-out ${ANIMATION_DELAYS.BACK_BUTTON}ms, transform ${TRANSITION_DURATIONS.SLOW} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${ANIMATION_DELAYS.BACK_BUTTON}ms`,
        }}
        title="뒤로가기"
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
            stroke={
              windowWidth < 768
                ? 'rgba(0, 0, 0, 0.2)'
                : 'rgba(255, 255, 255, 0.3)'
            }
            strokeWidth="1"
          />
          {windowWidth >= 768 && (
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="163.36"
              strokeDashoffset="163.36"
              className="draw-circle"
              style={{
                transition: `stroke-dashoffset ${TRANSITION_DURATIONS.NORMAL} cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
              }}
            />
          )}
        </svg>

        {/* 화살표 아이콘 - 반응형 크기 */}
        <svg
          width={windowWidth < 768 ? '20' : '24'}
          height={windowWidth < 768 ? '20' : '24'}
          viewBox="0 0 24 24"
          fill="none"
          stroke={
            windowWidth < 768
              ? 'rgba(0, 0, 0, 0.8)'
              : 'rgba(255, 255, 255, 0.9)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${
            windowWidth < 768
              ? ''
              : 'relative z-10 transition-transform duration-300 group-hover:scale-110'
          }`}
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* 좌측 영역 남색 배경 - 좌측에서 우측으로 슬라이드 애니메이션 */}
      <div
        className="fixed z-41"
        style={{
          top: 0,
          left: 0,
          width: windowWidth < 768 ? '0' : '415px',
          height: '100vh',
          background: '#1A1A1A',
          opacity: windowWidth >= 768 ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
          transition: `transform ${TRANSITION_DURATIONS.SLOWER} cubic-bezier(0.4, 0.0, 0.2, 1) ${ANIMATION_DELAYS.BACK_BUTTON}ms, opacity ${TRANSITION_DURATIONS.SLOW} ease-out`,
        }}
      />

      <div
        className="w-full h-full overflow-y-auto custom-scrollbar year-page-scroll-container relative"
        style={{
          background: 'transparent',
          paddingLeft: windowWidth < 768 ? '0%' : '415px',
          scrollBehavior: 'auto',
          overscrollBehavior: 'none',
          WebkitOverflowScrolling: 'auto',
          zIndex: 35,
        }}
      >
        <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>

        {/* 고정 연도 헤더 - FadeIn 애니메이션 */}
        <div
          className="fixed top-4 z-50"
          style={{
            right: windowWidth < 768 ? '8px' : '65px',
          }}
        >
          <div className="relative group">
            <div
              style={{
                fontSize: windowWidth < 768 ? '72px' : '128px',
                fontFamily: 'TheJamsil',
                fontWeight: '800',
                color: 'transparent',
                WebkitTextStroke: '1px #1A1A1A',
                opacity: isVisible ? (scrollY > 50 ? 0 : 0.5) : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  scrollY > 50
                    ? `opacity ${TRANSITION_DURATIONS.FAST} ease-out`
                    : hasScrolled
                    ? `opacity ${TRANSITION_DURATIONS.NORMAL} ease-out, transform ${TRANSITION_DURATIONS.NORMAL} ease-out`
                    : `opacity ${TRANSITION_DURATIONS.SLOW} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${ANIMATION_DELAYS.YEAR_HEADER}ms, transform ${TRANSITION_DURATIONS.SLOW} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${ANIMATION_DELAYS.YEAR_HEADER}ms`,
                lineHeight: '1',
                userSelect: 'none',
              }}
            >
              {year}
            </div>
          </div>
        </div>

        {/* 헤더 섹션 */}
        <div
          className={`min-h-screen flex items-start relative ${
            windowWidth < 768 ? 'justify-center' : 'justify-end'
          }`}
          style={{
            // transform: `translateY(${scrollY * 0.3}px)`,
            // transition: 'transform 0.1s ease-out',
            paddingRight: windowWidth < 768 ? '8px' : '65px',
            paddingLeft: windowWidth < 768 ? '8px' : '0px',
            paddingTop: windowWidth < 768 ? '120px' : '140px',
          }}
        >
          <div className={windowWidth < 768 ? 'text-center' : 'text-right'}>
            {/* 년도별 컨텐츠 렌더링 - 다른 애니메이션 완료 후 fade in */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity ${TRANSITION_DURATIONS.SLOW} ease-out ${ANIMATION_DELAYS.CONTENT}ms, transform ${TRANSITION_DURATIONS.SLOW} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${ANIMATION_DELAYS.CONTENT}ms`,
              }}
            >
              {renderYearContent()}
            </div>
          </div>
        </div>
      </div>

      {/* 하단 Prev / Next - 모든 년도 페이지에서 작동 (모바일 비표시) */}
      {windowWidth >= 768 && (
        <>
          {(() => {
            const currentIndex = menuItems.indexOf(year);
            const prevYear = menuItems[(currentIndex + 1) % menuItems.length]; // 순환
            const nextYear =
              menuItems[
                (currentIndex - 1 + menuItems.length) % menuItems.length
              ]; // 순환

            return (
              <>
                <button
                  onClick={() => onChangeYear(prevYear)}
                  className="fixed bottom-10 transition-opacity"
                  style={{
                    fontFamily: 'TheJamsil',
                    fontWeight: 800,
                    left: 415 + 44,
                    color: '#1A1A1A',
                    opacity: isAtBottom && !isYearTransitioning ? 1 : 0,
                    pointerEvents:
                      isAtBottom && !isYearTransitioning
                        ? ('auto' as const)
                        : ('none' as const),
                    transition:
                      'opacity 0.3s ease, color 0.3s ease, -webkit-text-stroke 0.3s ease',
                    backgroundColor: 'transparent',
                    fontSize: windowWidth < 768 ? '16px' : '20px',
                    lineHeight: 1,
                    cursor: 'pointer',
                    padding: 0,
                    border: 'none',
                    zIndex: 60,
                  }}
                  onMouseEnter={e => {
                    const target = e.currentTarget as HTMLButtonElement;
                    const icon = target.querySelector(
                      '.nav-arrow-icon'
                    ) as HTMLElement;
                    if (icon) icon.style.transform = 'translateX(-3px)';
                  }}
                  onMouseLeave={e => {
                    const target = e.currentTarget as HTMLButtonElement;
                    const icon = target.querySelector(
                      '.nav-arrow-icon'
                    ) as HTMLElement;
                    if (icon) icon.style.transform = 'translateX(0)';
                  }}
                  aria-label="이전 연도로 이동"
                  title="이전 연도"
                >
                  <span
                    className="nav-arrow-icon"
                    style={{
                      display: 'inline-block',
                      transition:
                        'transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    aria-hidden="true"
                  >
                    PREV
                  </span>
                </button>

                <button
                  onClick={() => onChangeYear(nextYear)}
                  className="fixed bottom-10 transition-opacity"
                  style={{
                    fontFamily: 'TheJamsil',
                    fontWeight: 800,
                    right: 72,
                    color: '#1A1A1A',
                    opacity: isAtBottom && !isYearTransitioning ? 1 : 0,
                    pointerEvents:
                      isAtBottom && !isYearTransitioning
                        ? ('auto' as const)
                        : ('none' as const),
                    transition:
                      'opacity 0.3s ease, color 0.3s ease, -webkit-text-stroke 0.3s ease',
                    backgroundColor: 'transparent',
                    fontSize: windowWidth < 768 ? '16px' : '20px',
                    lineHeight: 1,
                    cursor: 'pointer',
                    padding: 0,
                    border: 'none',
                    zIndex: 60,
                  }}
                  onMouseEnter={e => {
                    const target = e.currentTarget as HTMLButtonElement;
                    const icon = target.querySelector(
                      '.nav-arrow-icon'
                    ) as HTMLElement;
                    if (icon) icon.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={e => {
                    const target = e.currentTarget as HTMLButtonElement;
                    const icon = target.querySelector(
                      '.nav-arrow-icon'
                    ) as HTMLElement;
                    if (icon) icon.style.transform = 'translateX(0)';
                  }}
                  aria-label="다음 연도로 이동"
                  title="다음 연도"
                >
                  <span
                    className="nav-arrow-icon"
                    style={{
                      display: 'inline-block',
                      transition:
                        'transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    aria-hidden="true"
                  >
                    NEXT
                  </span>
                </button>
              </>
            );
          })()}
        </>
      )}
    </div>
  );
}
