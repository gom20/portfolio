// src/components/YearPage.tsx
import { useState, useEffect } from 'react';
import ScrollProgress from '../../components/common/ScrollProgress';

// 년도별 컨텐츠 컴포넌트들
import Year2013 from './content/Year2013';
import Year2014 from './content/Year2014';
import Year2017 from './content/Year2017';
import Year2021 from './content/Year2021';
import Year2023 from './content/Year2023';
import Year2024 from './content/Year2024';
import Year2025 from './content/Year2025';

interface YearPageProps {
  year: string;
  onBack: () => void;
  onScroll?: (scrollTop: number) => void;
}

export default function YearPage({ year, onBack, onScroll }: YearPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

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
            <div className="text-left bg-white py-8 rounded-lg shadow-sm">
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
    }, 100); // 짧은 지연으로 애니메이션 트리거

    return () => clearTimeout(timer);
  }, []);

  // 화면 크기 변화 감지
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector(
      '.year-page-scroll-container'
    );

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;
      setScrollY(scrollTop);

      // App.tsx로 스크롤 상태 전달
      if (onScroll) {
        onScroll(scrollTop);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [onScroll]);

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
        background: 'white',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      {/* 뒤로가기 버튼 - 스크롤 영역 완전 밖에 고정 */}
      <button
        onClick={handleBack}
        className="fixed top-8 left-8 w-14 h-14 flex items-center justify-center text-black hover:text-gray-500 transition-all duration-500 z-50 group"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
          transition:
            'opacity 0.8s ease-out 0.4s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s',
        }}
        title="뒤로가기"
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
            stroke="rgba(0, 0, 0, 0.1)"
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

        {/* 화살표 아이콘 - 크기 증가 */}
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
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* 좌측 하단 곡선 도형 - 물결 애니메이션 */}
      <div
        className="fixed z-40"
        style={{
          bottom: 0,
          left: 0,
          width: '600px',
          height: '450px',
          opacity: windowWidth >= 768 ? 1 : 0,
          transition: 'opacity 0.8s ease-out',
        }}
      >
        <svg
          width="600"
          height="450"
          viewBox="0 0 600 450"
          className="absolute bottom-0 left-0"
        >
          {/* 고정된 하단 직선 삼각형 베이스 */}
          <path
            d="M 0 450 L 0 200 L 600 450 Z"
            fill="rgba(156, 163, 175, 0.15)"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.4, 0.0, 0.2, 1) 0.6s',
            }}
          />

          {/* 물결치는 사선 삼각형 레이어 1 - 하단 고정 */}
          <g
            style={{
              transformOrigin: '300px 450px',
              animation: isVisible
                ? 'waveFloat 6s ease-in-out infinite'
                : 'none',
            }}
          >
            <path
              d="M 0 450 L 0 160 L 600 450 Z"
              fill="rgba(156, 163, 175, 0.25)"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) 0.8s',
              }}
            />
          </g>

          {/* 물결치는 사선 삼각형 레이어 2 - 하단 고정 */}
          <g
            style={{
              transformOrigin: '300px 450px',
              animation: isVisible
                ? 'waveFloat2 8s ease-in-out infinite'
                : 'none',
            }}
          >
            <path
              d="M 0 450 L 0 140 L 600 450 Z"
              fill="rgba(156, 163, 175, 0.2)"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1.8s cubic-bezier(0.4, 0.0, 0.2, 1) 1.2s',
              }}
            />
          </g>

          {/* 물결치는 사선 삼각형 레이어 3 - 가장 작은 곡선 */}
          <g
            style={{
              transformOrigin: '300px 450px',
              animation: isVisible
                ? 'waveFloat3 10s ease-in-out infinite'
                : 'none',
            }}
          >
            <path
              d="M 0 450 L 0 120 L 600 450 Z"
              fill="rgba(156, 163, 175, 0.18)"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 2.0s cubic-bezier(0.4, 0.0, 0.2, 1) 1.6s',
              }}
            />
          </g>
        </svg>

        {/* CSS 애니메이션 정의 */}
        <style>{`
          @keyframes waveFloat {
            0%, 100% {
              transform: scale(1) rotate(0deg);
            }
            25% {
              transform: scale(1.02) rotate(0.5deg);
            }
            50% {
              transform: scale(0.98) rotate(-0.3deg);
            }
            75% {
              transform: scale(1.01) rotate(0.2deg);
            }
          }
          
          @keyframes waveFloat2 {
            0%, 100% {
              transform: scale(1) rotate(0deg);
            }
            30% {
              transform: scale(1.01) rotate(-0.4deg);
            }
            60% {
              transform: scale(0.99) rotate(0.6deg);
            }
            80% {
              transform: scale(1.02) rotate(-0.2deg);
            }
          }
          
          @keyframes waveFloat3 {
            0%, 100% {
              transform: scale(1) rotate(0deg);
            }
            20% {
              transform: scale(0.99) rotate(0.3deg);
            }
            40% {
              transform: scale(1.01) rotate(-0.5deg);
            }
            70% {
              transform: scale(0.98) rotate(0.4deg);
            }
            90% {
              transform: scale(1.02) rotate(-0.1deg);
            }
          }
        `}</style>
      </div>

      <div
        className="w-full h-full overflow-y-auto custom-scrollbar year-page-scroll-container"
        style={{
          background: 'transparent',
          paddingLeft: windowWidth < 768 ? '0%' : '50%',
          scrollBehavior: 'auto',
          overscrollBehavior: 'none',
          WebkitOverflowScrolling: 'auto',
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
        {/* 스크롤 진행률 표시기 */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          <ScrollProgress color="#8B5CF6" height={6} />
        </div>

        {/* 고정 연도 헤더 - FadeIn 애니메이션 */}
        <div
          className="fixed top-4 z-50"
          style={{
            right: '40px',
          }}
        >
          <div className="relative cursor-pointer group">
            <div
              style={{
                fontSize: windowWidth < 768 ? '72px' : '128px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '900',
                color: 'transparent',
                WebkitTextStroke: '2px #000000',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease-out 0.6s, color 0.3s ease',
                lineHeight: '1',
                userSelect: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'transparent';
              }}
            >
              {year}
            </div>
          </div>
        </div>

        {/* 상단 마스킹 오버레이 */}
        <div
          className="fixed top-0 left-0 w-full z-40"
          style={{
            height: windowWidth < 768 ? '160px' : '170px',
            background:
              'linear-gradient(to bottom, white 0%, white 70%, rgba(255,255,255,0) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* 헤더 섹션 */}
        <div
          className={`min-h-screen flex items-start relative ${
            windowWidth < 768 ? 'justify-center' : 'justify-end'
          }`}
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
            paddingRight: windowWidth < 768 ? '20px' : '50px',
            paddingLeft: windowWidth < 768 ? '20px' : '0px',
            paddingTop: windowWidth < 768 ? '160px' : '170px',
          }}
        >
          <div className={windowWidth < 768 ? 'text-center' : 'text-right'}>
            {/* 년도별 컨텐츠 렌더링 - 다른 애니메이션 완료 후 fade in */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition:
                  'opacity 0.8s ease-out 1.2s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s',
              }}
            >
              {renderYearContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
