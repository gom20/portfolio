import { useEffect, useState } from 'react';

interface CareerProps {
  isActive: boolean;
  onClose: () => void;
}

export default function Career({ isActive, onClose }: CareerProps) {
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

  // 경력 데이터
  const experiences = [
    {
      id: 0,
      company: 'Open to opportunities',
      period: '2025.08 - Present',
      position: 'Full-Stack Developer',
      description:
        '개인 프로젝트를 진행하며 다양한 분야의 기회를 탐색 중입니다',
      technologies: ['QofRP'],
      year: '2025-Present',
    },
    {
      id: 1,
      company: '현대오토에버',
      period: '2023.12 - 2025.08',
      position: 'Backend Developer',
      description:
        '글로비스 차량 위치 관리 시스템 구축, KIA 광명공장 스마트 태그 시스템 구축',
      technologies: ['React', 'TypeScript', 'Spring Boot', 'Java', 'Oracle'],
      year: '2023-2025',
    },
    {
      id: 2,
      company: '미띵스',
      period: '2023.04 - 2023.12',
      position: 'Full-Stack Developer',
      description:
        '넥슨 퍼스트 설문 대시보드 개발, 넥슨 설문 시스템 NPTI 유형 신규 개발',
      technologies: ['React', 'TypeScript', 'Spring Boot', 'Java', 'Oracle'],
      year: '2023',
    },
    {
      id: 3,
      company: '삼성SDS',
      period: '2013.02 - 2020.07',
      position: 'Software Engineer',
      description:
        '삼성전자 반도체 제조 시스템 운영 및 모니터링 (2017.11 - 2020.07)\n삼성SDS Nexshop Sales 리테일 솔루션 개발 (2014.12 - 2017.10)\n삼성전자 Smart TV 웹앱 개발 및 유지보수 (2013.02 - 2014.11)',
      technologies: [
        'Java',
        'Spring Framework',
        'Oracle',
        'MySQL',
        'JavaScript',
        'HTML/CSS',
        'Smart TV SDK',
      ],
      year: '2013-2020',
    },
  ];

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
          
          .timeline-line {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 1px;
            background: rgba(255, 255, 255, 0.4);
            transform: translateX(-50%);
          }
          
          .timeline-content {
            position: relative;
            background: rgba(255, 255, 255, 0.03);
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 0px;
            padding: 20px;
            transition: all 0.3s ease;
          }
          
          .timeline-content:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.2);
          }
        `}</style>

        {/* 타임라인 컨테이너 */}
        <div className="relative">
          {/* 중앙 세로선 */}
          <div className="timeline-line hidden lg:block"></div>

          {/* 경력 아이템들 */}
          <div className="space-y-12" style={{ paddingTop: '5px' }}>
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`timeline-item relative ${
                  index % 2 === 0
                    ? 'lg:pr-[50%] lg:pl-0'
                    : 'lg:pl-[50%] lg:pr-0'
                }`}
              >
                {/* 타임라인 점 */}
                <div
                  className={`absolute w-2.5 h-2.5 bg-white border-2 border-white/30 rounded-full hidden lg:block ${
                    index % 2 === 0
                      ? 'lg:right-[calc(50%-5px)]'
                      : 'lg:left-[calc(50%-5px)]'
                  }`}
                  style={{ top: '-4px' }}
                ></div>

                {/* 경력 내용 */}
                <div
                  className="timeline-content"
                  style={{
                    padding:
                      experience.id === 4
                        ? '28px'
                        : experience.id === 1
                        ? '24px'
                        : experience.id === 0
                        ? '20px'
                        : '22px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                  }}
                >
                  {/* 연도 표시 */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-2 py-1 rounded-md text-xs font-normal"
                      style={{
                        fontFamily: "'TheJamsil', sans-serif",
                        backgroundColor: 'var(--primary)',
                        color: 'var(--secondary)',
                      }}
                    >
                      {experience.year}
                    </span>
                  </div>

                  {/* 회사명 */}
                  <h3
                    className="text-lg md:text-xl font-medium mb-2"
                    style={{
                      fontFamily: "'TheJamsil', sans-serif",
                      color: 'rgb(209, 213, 219)',
                    }}
                  >
                    {experience.company}
                  </h3>

                  {/* 기간과 포지션 */}
                  <p
                    className="text-gray-300 text-sm font-light mb-3"
                    style={{ fontFamily: "'TheJamsil', sans-serif" }}
                  >
                    {experience.period} | {experience.position}
                  </p>

                  {/* 설명 */}
                  {experience.id === 4 ? (
                    <div className="mb-6">
                      {/* 세로줄 */}
                      <div className="relative">
                        <div className="absolute left-2 top-2 bottom-0 w-px bg-white/20"></div>
                        <div className="ml-6 space-y-3">
                          <div className="text-xs text-gray-400 mb-0.5 font-medium">
                            2017.11 - 2020.07
                          </div>
                          <div className="text-gray-300 text-sm">
                            반도체 제조 시스템 운영 및 모니터링
                          </div>

                          <div className="text-xs text-gray-400 mb-0.5 font-medium">
                            2014.12 - 2017.10
                          </div>
                          <div className="text-gray-300 text-sm">
                            Nexshop Sales 리테일 솔루션 개발
                          </div>

                          <div className="text-xs text-gray-400 mb-0.5 font-medium">
                            2013.05 - 2014.11
                          </div>
                          <div className="text-gray-300 text-sm">
                            Smart TV 웹앱 개발 및 유지보수
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : experience.id === 1 ? (
                    <div className="mb-6">
                      {/* 세로줄 */}
                      <div className="relative">
                        <div
                          className="absolute left-2 top-0 bottom-0 w-px bg-white/20"
                          style={{ width: '1px', maxWidth: '1px' }}
                        ></div>
                        <div className="ml-6 space-y-4">
                          <div>
                            <div className="text-xs text-gray-400 mb-1 font-medium">
                              2024.09 - 2025.08
                            </div>
                            <div className="text-gray-300 text-sm">
                              글로비스 차량 위치 관리 시스템 구축
                            </div>
                          </div>

                          <div>
                            <div className="text-xs text-gray-400 mb-1 font-medium">
                              2023.12 - 2024.08
                            </div>
                            <div className="text-gray-300 text-sm">
                              KIA 광명공장 스마트 태그 시스템 구축
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : experience.id === 2 ? (
                    <div className="mb-6">
                      {/* 세로줄 */}
                      <div className="relative">
                        <div
                          className="absolute left-2 top-0 bottom-0 w-px bg-white/20"
                          style={{ width: '1px', maxWidth: '1px' }}
                        ></div>
                        <div className="ml-6 space-y-4">
                          <div>
                            <div className="text-xs text-gray-400 mb-1 font-medium">
                              2023.09 - 2023.12
                            </div>
                            <div className="text-gray-300 text-sm">
                              넥슨 퍼스트 설문 대시보드 개발
                            </div>
                          </div>

                          <div>
                            <div className="text-xs text-gray-400 mb-1 font-medium">
                              2023.04 - 2023.08
                            </div>
                            <div className="text-gray-300 text-sm">
                              넥슨 설문 시스템 NPTI 유형 신규 개발
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : experience.id === 3 ? (
                    <div className="mb-6">
                      {/* 세로줄 */}
                      <div className="relative">
                        <div
                          className="absolute left-2 top-0 bottom-0 w-px bg-white/20"
                          style={{ width: '1px', maxWidth: '1px' }}
                        ></div>
                        <div className="ml-6 space-y-4">
                          <div>
                            <div className="text-xs text-gray-400 mb-1 font-medium">
                              2017.11 - 2020.07
                            </div>
                            <div className="text-gray-300 text-sm">
                              반도체 제조 시스템 운영 및 모니터링
                            </div>
                          </div>

                          <div>
                            <div className="text-xs text-gray-400 mb-1 font-medium">
                              2014.12 - 2017.10
                            </div>
                            <div className="text-gray-300 text-sm">
                              Nexshop Sales 리테일 솔루션 개발
                            </div>
                          </div>

                          <div>
                            <div className="text-xs text-gray-400 mb-1 font-medium">
                              2013.02 - 2014.11
                            </div>
                            <div className="text-gray-300 text-sm">
                              Smart TV 웹앱 개발 및 유지보수
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : experience.id === 0 ? (
                    <p className="text-gray-300 text-sm leading-relaxed mb-2">
                      {experience.description}
                    </p>
                  ) : (
                    <p
                      className={`text-gray-300 text-sm leading-relaxed ${
                        experience.id === 1
                          ? 'mb-4'
                          : experience.id === 0
                          ? 'mb-2'
                          : 'mb-3'
                      }`}
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {experience.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
