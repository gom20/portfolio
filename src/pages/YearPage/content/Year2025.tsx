import { useEffect, useRef, useState } from 'react';

interface Year2025Props {
  // 필요한 props가 있다면 여기에 추가
}

export default function Year2025({}: Year2025Props) {
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
                현대글로비스
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500 font-medium tracking-wide">
                  2024.09 - 2025.08
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              차량 위치 관리 시스템 구축
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                기능 정의
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                테이블 설계
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                화면 설계
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                I/F 설계 및 개발
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                산출물 작성
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
              글로비스 차량 위치 관리 시스템 구축 프로젝트에 참여하여 GPS RTK
              모듈이 탑재된 차량 태그를 활용한 정밀 차량 위치 관리 시스템을
              개발했습니다. 이 시스템은 차량에 거치된 태그를 통해 주차 시점의
              위치 데이터를 실시간으로 수집하고 정확한 차량 위치 정보를 제공하는
              솔루션입니다. 프로젝트에서 인터페이스 설계 및 개발을 담당하여 차량
              태그 MQTT 통신 구현, 기준국 NTRIP Client 개발, SNMP 기반 중계기
              상태 수집 기능, TCP 소켓 및 REST API 기반의 외부 시스템 연동
              인터페이스를 구현했습니다. 또한 테이블 설계, 화면 설계, 데이터
              플로우 정의, 단위 테스트 명세서 작성 등 시스템 설계부터 개발,
              테스트까지 전체 개발 생명주기를 주도적으로 수행했습니다.
            </p>
            <img
              src="/2025.png"
              alt="주차장 차량 위치 관리 시스템"
              className="hidden md:block w-full max-h-64 object-cover shadow-lg object-bottom"
              style={{ objectPosition: 'center 40%' }}
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
                <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
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
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
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
                    차량태그 ↔ 서버 간 MQTT 통신 설계·개발
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 차량 이벤트 및 제어 메시지 토픽 체계 설계 및 구현</p>
                  <p>
                    • Paho Library 기반 MQTT 클라이언트 개발을 통한 안정적인
                    양방향 통신 구현
                  </p>
                  <p>
                    • FOTA(Firmware Over The Air) 기능 개발로 원격 펌웨어
                    업데이트 지원
                  </p>
                  <p>
                    • 공통 로직 중앙 집중화를 통한 시스템 확장성 및 유지보수성
                    향상
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    데이터베이스 설계 및 데이터 모델링
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    • 차량 기준 정보, 차량 태그 이벤트 등 핵심 엔티티 테이블
                    설계
                  </p>
                  <p>• 인터페이스 이력 관리를 위한 데이터 구조 설계</p>
                  <p>• 효율적인 데이터 처리를 고려한 테이블 설계 최적화</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-cyan-600 mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v4M15 3v4"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h10v4a5 5 0 01-5 5h0a5 5 0 01-5-5V7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    장비 및 외부 시스템 인터페이스 개발
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    • 기준국 연동: NTRIP Client 개발을 통한 RTK 보정 데이터 수신
                  </p>
                  <p>
                    • 중계기 연동: SNMP 기반 중계기 상태 정보 수집 인터페이스
                    개발
                  </p>
                  <p>
                    • 외부 시스템 연동: TCP Socket 및 REST API 기반 차량 기준
                    정보 연계 인터페이스 구현
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="none"
                      stroke="currentColor"
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
                    문서화 및 품질 관리
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    • 요구사항 정의서, 화면 설계서, 인터페이스 설계서 등 핵심
                    설계 문서 작성
                  </p>
                  <p>
                    • 요구사항 추적 매트릭스 및 단위 테스트 명세서 작성을 통한
                    품질 관리 체계 구축
                  </p>
                  <p>• Fortify, AppScan을 활용한 보안 취약점 분석</p>
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
                  <li>Java 17</li>
                  <li>Spring Boot</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Frontend
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>JavaScript</li>
                  <li>VueJS</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Database
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>MariaDB</li>
                  <li>SQL</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Communication/Protocol
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>MQTT</li>
                  <li>SNMP</li>
                  <li>TCP Socket</li>
                  <li>REST API</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  IDE
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>IntelliJ</li>
                  <li>VSCode</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Tools
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Git</li>
                  <li>Jira</li>
                  <li>Confluence</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
