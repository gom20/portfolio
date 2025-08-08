import { useEffect, useState } from 'react';

interface ExperienceContentProps {
  isActive: boolean;
  onClose: () => void;
}

export default function ExperienceOverlay({
  isActive,
  onClose,
}: ExperienceContentProps) {
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
          <h2 className="text-lg md:text-xl lg:text-xl font-semibold mb-6">
            Experience
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-white pl-6">
              <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2">
                현대오토에버
              </h3>
              <p className="text-sm md:text-base lg:text-base text-gray-300 italic mb-3">
                2023.12 - 2025.08 | Full-Stack Developer
              </p>
              <ul className="text-sm md:text-base lg:text-base text-gray-300 space-y-2">
                <li>• 차량 위치 관리 시스템 구축 및 운영</li>
                <li>• 의장 차량 트래킹 시스템 I/F 개발</li>
                <li>• React, TypeScript 기반 프론트엔드 개발</li>
                <li>• Spring Boot, Java 기반 백엔드 API 개발</li>
                <li>• Oracle Database 연동 및 최적화</li>
              </ul>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2">
                미띵스
              </h3>
              <p className="text-sm md:text-base lg:text-base text-gray-300 italic mb-3">
                2023.04 - 2023.12 | Frontend Developer
              </p>
              <ul className="text-sm md:text-base lg:text-base text-gray-300 space-y-2">
                <li>• 리서치 서비스 유지보수 및 신규 기능 개발</li>
                <li>• Vue.js, JavaScript 기반 SPA 개발</li>
                <li>• RESTful API 연동 및 상태 관리</li>
                <li>• 사용자 경험 개선을 위한 UI/UX 최적화</li>
                <li>• 반응형 웹 디자인 구현</li>
              </ul>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2">
                프리랜서
              </h3>
              <p className="text-sm md:text-base lg:text-base text-gray-300 italic mb-3">
                2021.04 - 2021.07 | Full-Stack Developer
              </p>
              <ul className="text-sm md:text-base lg:text-base text-gray-300 space-y-2">
                <li>• 반도체 자재 사용량 분석 시스템 개발</li>
                <li>• Python, Django를 활용한 데이터 분석 시스템 구축</li>
                <li>• PostgreSQL 데이터베이스 설계 및 구현</li>
                <li>• 데이터 시각화 대시보드 개발</li>
                <li>• 클라이언트 요구사항 분석 및 솔루션 제안</li>
              </ul>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2">
                삼성SDS
              </h3>
              <p className="text-sm md:text-base lg:text-base text-gray-300 italic mb-3">
                2013.02 - 2020.07 | Software Engineer
              </p>
              <ul className="text-sm md:text-base lg:text-base text-gray-300 space-y-2">
                <li>• 반도체 자재 사용량 분석 시스템 운영 및 개선</li>
                <li>• 리테일 솔루션 Admin 모듈 개발</li>
                <li>• SMART TV 앱 유지보수 및 신규 기능 개발</li>
                <li>• Java, Spring Framework 기반 엔터프라이즈 시스템 개발</li>
                <li>• Oracle, MySQL 데이터베이스 관리 및 성능 튜닝</li>
                <li>• 대규모 트래픽 처리를 위한 시스템 아키텍처 설계</li>
                <li>• 레거시 시스템 마이그레이션 프로젝트 참여</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
