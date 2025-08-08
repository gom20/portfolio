import { useEffect, useRef, useState } from 'react';

interface Year2024Props {
  // 필요한 props가 있다면 여기에 추가
}

export default function Year2024({}: Year2024Props) {
  const headerRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [achievementsVisible, setAchievementsVisible] = useState(false);
  const [techStackVisible, setTechStackVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setHeaderVisible(true);
            } else if (entry.target === overviewRef.current) {
              setOverviewVisible(true);
            } else if (entry.target === achievementsRef.current) {
              setAchievementsVisible(true);
            } else if (entry.target === techStackRef.current) {
              setTechStackVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (achievementsRef.current) observer.observe(achievementsRef.current);
    if (techStackRef.current) observer.observe(techStackRef.current);

    return () => observer.disconnect();
  }, []);

  const fadeInStyle = (isVisible: boolean) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  });

  return (
    <div className="text-lg text-gray-500 mb-12 ml-2 md:ml-12 year-page-content">
      <div className="text-left py-8 rounded-lg">
        <div>
          {/* Header Section with enhanced styling */}
          <div
            ref={headerRef}
            style={fadeInStyle(headerVisible)}
            className="mb-8"
          >
            <div className="flex items-center gap-6 mb-1">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">
                KIA 자동차 광명 공장
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500 font-medium tracking-wide">
                  2024.08 - 2025.08
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              의장 라인 스마트태그 시스템 구축
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                설비 체결 정보 I/F
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                시스템 I/F 개발
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                내재화 수행
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                로직 분석
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                문서화
              </span>
            </div>
          </div>

          {/* Project Overview with enhanced layout */}
          <div
            ref={overviewRef}
            style={fadeInStyle(overviewVisible)}
            className="mb-16"
          >
            <p className="text-gray-700 leading-relaxed text-base mb-8">
              KIA자동차 광명공장의 스마트태그 기반 차량 트래킹 시스템 구축
              프로젝트에 참여하여, 기존 협력사 주도로 운영되던 시스템을
              내재화하기 위한 직접 개발 업무를 담당했습니다. 주요 개발
              내용으로는 의장라인 내 체결설비의 체결정보 인터페이스와 MES로부터
              차량 서열정보를 수신하는 인터페이스를 구현했습니다. 또한 기존에
              개발된 공구 체결 로직, 차량 매핑 로직, 의장라인 트래킹 로직 등
              핵심 시스템의 소스코드 분석 및 문서화 작업을 수행하여, 향후
              유지보수 효율성을 높이고 기능 확장을 위한 기술적 기반을
              마련했습니다. 이를 통해 협력사 의존도를 줄이고 자체 기술력을
              확보하여 시스템 운영의 자립성을 강화하는 성과를 달성했습니다.
            </p>
          </div>

          {/* Key Achievements with modern cards */}
          <div
            ref={achievementsRef}
            style={fadeInStyle(achievementsVisible)}
            className="mb-16"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 tracking-wide">
                  Key Achievements & Contributions
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="text-base font-medium text-gray-800 mb-4">
                  1. 인터페이스 설계 및 개발
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    • MES 서열정보 TCP Socket 인터페이스: 자사 솔루션 기반의 TCP
                    Socket 통신을 통한 차량 서열 데이터 실시간 수신 구현
                  </p>
                  <p>
                    • 체결설비 PLC 인터페이스: 액 주입기, 타이어 장착기, 배터리
                    장착기 등 핵심 체결설비와의 PLC 데이터 연계 구현
                  </p>
                  <p>• 안정적인 실시간 데이터 처리 및 통신 환경 구축</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="text-base font-medium text-gray-800 mb-4">
                  2. 핵심 로직 분석 및 기술 내재화
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    • 기존 공구 체결 로직, 차량 매핑 로직, 의장라인 트래킹
                    로직의 심층 분석 수행
                  </p>
                  <p>
                    • 소스코드 구조 파악 및 비즈니스 로직 이해를 통한 기술력
                    확보
                  </p>
                  <p>
                    • 협력사 의존도 해소를 위한 핵심 기술의 자체 내재화 달성
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="text-base font-medium text-gray-800 mb-4">
                  3. 기술문서화 및 운영 기반 구축
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 로직 분석 결과 및 인터페이스 설계서의 체계적 문서화</p>
                  <p>
                    • 데이터 흐름도 및 처리 절차서 작성을 통한 시스템 운영
                    가이드 제공
                  </p>
                  <p>
                    • 향후 유지보수 및 기능 확장을 위한 기술문서 표준화 체계
                    확립
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack with modern design */}
          <div ref={techStackRef} style={fadeInStyle(techStackVisible)}>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 tracking-wide">
                  사용 기술 및 환경
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Backend
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Java</li>
                  <li>Spring Boot</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Database
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Tibero DB</li>
                  <li>SQL</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Communication/Protocol
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>TCP Socket</li>
                  <li>HTTP API</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  IDE
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>IntelliJ</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Tools
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>SVN</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
