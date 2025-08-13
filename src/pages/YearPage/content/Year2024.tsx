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
                  2023.12 - 2024.08
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              의장 라인 스마트태그 시스템 구축
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                설비 체결 정보 I/F
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                시스템 I/F 개발
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                내재화 수행
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                로직 분석
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
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
              내재화하기 위해 직접 개발 업무를 담당했습니다. 주요 개발
              내용으로는 의장 라인 내 설비의 체결 정보 인터페이스와 MES로부터
              차량 서열정보를 수신하는 인터페이스를 구현했습니다. 또한 기존에
              개발된 공구 체결 로직, 차량 매핑 로직, 의장라인 트래킹 로직 등
              핵심 시스템의 소스코드 분석 및 문서화 작업을 수행하여, 향후
              유지보수 효율성을 높이고 기능 확장을 위한 기술적 기반을
              마련했습니다.
            </p>
            <img
              src="/images/years/2024.png"
              alt="의장 라인 스마트태그 시스템"
              className="hidden md:block w-full max-h-64 object-cover shadow-lg object-bottom"
              style={{ objectPosition: 'center 65%' }}
            />
          </div>

          {/* Key Achievements with modern cards */}
          <div
            ref={achievementsRef}
            style={fadeInStyle(achievementsVisible)}
            className="mb-16"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ background: 'var(--primary)' }}
                ></div>
                <h3
                  className="text-xl font-bold text-gray-800 tracking-wide"
                  style={{ fontFamily: 'Pretendard', fontWeight: '700' }}
                >
                  주요 업무 및 성과
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--secondary)' }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="var(--primary)"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    인터페이스 설계 및 개발
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    • 자사 솔루션 기반의 TCP Socket 통신을 통해 MES로부터 차량
                    서열 데이터 실시간 수신 구현
                  </p>
                  <p>• PLC 데이터 인터페이스 구현</p>
                  <p>• 안정적인 실시간 데이터 처리 및 통신 환경 구축</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--secondary)' }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="var(--primary)"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    핵심 로직 분석 및 기술 내재화
                  </h4>
                </div>
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
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--secondary)' }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="var(--primary)"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    기술문서화 및 운영 기반 구축
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 로직 분석 결과 및 인터페이스 설계서의 문서화</p>
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
          <div
            ref={techStackRef}
            style={fadeInStyle(techStackVisible)}
            className="mb-16"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ background: 'var(--primary)' }}
                ></div>
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
