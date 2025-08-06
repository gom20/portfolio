// src/components/YearPage.tsx
import { useState, useEffect } from 'react';
// import ScrollProgress from '../../components/common/ScrollProgress';

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
  // onScroll?: (scrollTop: number) => void;
}

export default function YearPage({ year, onBack }: YearPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isYearHovered, setIsYearHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

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
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      {/* 뒤로가기 버튼 - 스크롤 영역 완전 밖에 고정 */}
      <button
        onClick={handleBack}
        className="fixed w-14 h-14 flex items-center justify-center text-black hover:text-gray-500 transition-all duration-500 z-50 group"
        style={{
          top: '32px',
          left:
            windowWidth < 768 ? '16px' : windowWidth < 1024 ? '32px' : '65px',
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

      {/* 좌측 영역 남색 배경 - 좌측에서 우측으로 슬라이드 애니메이션 */}
      <div
        className="fixed z-41"
        style={{
          top: 0,
          left: 0,
          width: windowWidth < 768 ? '0' : '415px',
          height: '100vh',
          background: 'rgb(15 23 42)',
          opacity: windowWidth >= 768 ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
          transition:
            'transform 1.2s cubic-bezier(0.4, 0.0, 0.2, 1) 0.8s, opacity 0.8s ease-out',
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
        {/* 스크롤 진행률 표시기 제거 */}
        {/* <div
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          <ScrollProgress color="#8B5CF6" height={6} />
        </div> */}

        {/* 고정 연도 헤더 - FadeIn 애니메이션 */}
        <div
          className="fixed top-4 z-50"
          style={{
            right: windowWidth < 768 ? '8px' : '65px',
          }}
        >
          <div className="relative cursor-pointer group">
            <div
              style={{
                fontSize: windowWidth < 768 ? '72px' : '128px',
                fontFamily: 'TheJamsil5Bold',
                fontWeight: '900',
                color: isYearHovered ? '#000000' : 'transparent',
                WebkitTextStroke: isYearHovered ? '0px #000000' : '1px #000000',
                opacity: isVisible ? (scrollY > 50 ? 0 : 1) : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  scrollY > 50
                    ? 'opacity 0.2s ease-out, color 0.3s ease, -webkit-text-stroke 0.3s ease'
                    : hasScrolled
                    ? 'opacity 0.3s ease-out, transform 0.3s ease-out, color 0.3s ease, -webkit-text-stroke 0.3s ease'
                    : 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s, color 0.3s ease, -webkit-text-stroke 0.3s ease',
                lineHeight: '1',
                userSelect: 'none',
              }}
              onMouseEnter={() => setIsYearHovered(true)}
              onMouseLeave={() => setIsYearHovered(false)}
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
