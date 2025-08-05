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
            <div className="max-w-4xl mx-auto text-left bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
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
        transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
        transition: 'all 0.2s ease-in-out',
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

      <div
        className="w-full h-full bouncy-scroll overflow-y-auto custom-scrollbar year-page-scroll-container"
        style={{
          background: 'transparent',
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
        {/* 스크롤 진행률 표시기 */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          <ScrollProgress color="#8B5CF6" height={6} />
        </div>

        {/* 헤더 섹션 */}
        <div
          className="min-h-screen flex items-center justify-center relative"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="text-center">
            <h1
              className="text-8xl font-bold mb-8"
              style={{
                color: '#000000',
                WebkitTextStroke: '1px #000000',
                fontFamily: 'Arial, sans-serif',
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? `scale(${1 + scrollY * 0.00005}) translateY(0)`
                  : `scale(1) translateY(30px)`,
                transition:
                  'opacity 0.8s ease-out 0.2s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
              }}
            >
              {year}
            </h1>
            <p
              className="text-2xl text-gray-600 mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition:
                  'opacity 0.8s ease-out 0.4s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s',
              }}
            >
              {year}년의 포트폴리오
            </p>
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
