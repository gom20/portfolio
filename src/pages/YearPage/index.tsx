// src/components/YearPage.tsx
import { useState, useEffect } from 'react';
import ScrollProgress from '../../components/common/ScrollProgress';

interface YearPageProps {
  year: string;
  onBack: () => void;
}

export default function YearPage({ year, onBack }: YearPageProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  const handleProjectClick = (projectIndex: number) => {
    const targetY = (projectIndex + 1) * window.innerHeight;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
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
            'opacity 1s ease-out 1.2s, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s',
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
        className="w-full h-full bouncy-scroll overflow-y-auto custom-scrollbar"
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
            <div
              className="text-lg text-gray-500 mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition:
                  'opacity 0.8s ease-out 0.6s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s',
              }}
            >
              <p>여기에 {year}년의 프로젝트들이 표시됩니다.</p>
              <p>곧 업데이트 예정입니다.</p>
            </div>

            {/* 프로젝트 네비게이션 */}
            <div
              className="flex justify-center space-x-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition:
                  'opacity 0.8s ease-out 0.8s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s',
              }}
            >
              {[1, 2, 3, 4, 5].map((project, index) => (
                <button
                  key={project}
                  onClick={() => handleProjectClick(project - 1)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease-out ${
                      0.9 + index * 0.1
                    }s, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
                      0.9 + index * 0.1
                    }s`,
                  }}
                >
                  프로젝트 {project}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 프로젝트 섹션들 */}
        <div
          className="scroll-snap-container"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition:
              'opacity 1s ease-out 1s, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s',
          }}
        >
          {[1, 2, 3, 4, 5].map((project, index) => (
            <div
              key={project}
              className="scroll-snap-item min-h-screen flex items-center justify-center bg-white relative"
              style={{
                background: `linear-gradient(135deg, rgba(139, 92, 246, 0.${
                  project * 0.08
                }), rgba(168, 85, 247, 0.${project * 0.08}))`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.8s ease-out ${
                  1.2 + index * 0.15
                }s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
                  1.2 + index * 0.15
                }s`,
              }}
            >
              <div
                className="text-center p-8 transform transition-all duration-500"
                style={{
                  transform: `translateY(${
                    Math.max(0, scrollY - project * window.innerHeight) * 0.1
                  }px)`,
                  opacity: Math.max(
                    0.3,
                    1 - Math.abs(scrollY - project * window.innerHeight) * 0.001
                  ),
                }}
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-800">
                  프로젝트 {project}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {year}년에 진행한 프로젝트 {project}입니다.
                </p>
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto transform transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-3 text-purple-600">
                    프로젝트 제목
                  </h3>
                  <p className="text-gray-700 mb-4">
                    이 프로젝트는 혁신적인 기술을 활용하여 사용자 경험을
                    향상시키는 것을 목표로 합니다.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
