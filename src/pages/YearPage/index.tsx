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
      className="w-full h-full bouncy-scroll overflow-y-auto"
      style={{
        background: 'white',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
        transition: 'all 0.2s ease-in-out',
      }}
    >
      {/* 스크롤 진행률 표시기 */}
      <ScrollProgress color="#8B5CF6" height={6} />

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
              transform: `scale(${1 + scrollY * 0.00005})`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {year}
          </h1>
          <p className="text-2xl text-gray-600 mb-8">{year}년의 포트폴리오</p>
          <div className="text-lg text-gray-500 mb-12">
            <p>여기에 {year}년의 프로젝트들이 표시됩니다.</p>
            <p>곧 업데이트 예정입니다.</p>
          </div>

          {/* 프로젝트 네비게이션 */}
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map(project => (
              <button
                key={project}
                onClick={() => handleProjectClick(project - 1)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                프로젝트 {project}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 프로젝트 섹션들 */}
      <div className="scroll-snap-container">
        {[1, 2, 3, 4, 5].map(project => (
          <div
            key={project}
            className="scroll-snap-item min-h-screen flex items-center justify-center bg-white relative"
            style={{
              background: `linear-gradient(135deg, rgba(139, 92, 246, 0.${
                project * 0.08
              }), rgba(168, 85, 247, 0.${project * 0.08}))`,
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

      {/* X 버튼 */}
      <button
        onClick={handleBack}
        className="fixed top-8 right-8 w-12 h-12 flex items-center justify-center text-4xl font-bold text-black hover:text-gray-600 transition-all duration-300 z-50"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          border: '2px solid #000000',
          borderRadius: '50%',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transform: `translateY(${scrollY * 0.05}px)`,
          transition: 'all 0.3s ease-out',
        }}
      >
        ×
      </button>
    </div>
  );
}
