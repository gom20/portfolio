import React, { useEffect, useRef, useState } from 'react';

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
                  2024.08 - 2025.08
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#0f172a] mb-6 tracking-wide">
              차량 위치 관리 시스템 구축
            </h3>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-[#0090FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#0090FF]/30 transition-colors duration-200">
                기능 정의
              </span>
              <span className="px-4 py-2 bg-[#0090FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#0090FF]/30 transition-colors duration-200">
                테이블 설계
              </span>
              <span className="px-4 py-2 bg-[#0090FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#0090FF]/30 transition-colors duration-200">
                화면 설계
              </span>
              <span className="px-4 py-2 bg-[#0090FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#0090FF]/30 transition-colors duration-200">
                I/F 설계 및 개발
              </span>
              <span className="px-4 py-2 bg-[#0090FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#0090FF]/30 transition-colors duration-200">
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
              글로비스 차량 위치 관리 시스템 구축 프로젝트에 참여했습니다. 이
              시스템은 GPS RTK 모듈이 탑재된 차량 태그를 차량에 거치하여, 주차
              시점의 위치 데이터를 수집하고 정확한 차량 위치를 관리하는 기능을
              제공합니다. 프로젝트에서 저는 인터페이스 설계 및 개발을
              담당하였으며, 차량 태그 MQTT 통신, 기준국 NTRIP Client 개발, SNMP
              기반 중계기 상태 수집, TCP 소켓·REST API 기반 타 시스템 연동
              인터페이스를 구현했습니다. 또한 ERD 설계, 화면 설계, 데이터 플로우
              및 단위 테스트 명세서 작성 등 설계부터 개발, 테스트까지 전과정을
              진행했습니다.
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
                <div className="w-1 h-6 bg-[#0090FF] rounded-full"></div>
                <h3 className="text-xl font-medium text-gray-800 tracking-wide">
                  주요 업무 및 성과
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  차량태그 ↔ 서버 간 MQTT 통신 설계·개발
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 차량 이벤트 및 제어 메시지 토픽 설계</p>
                  <p>• Paho Library 기반 MQTT 클라이언트 구현</p>
                  <p>• FOTA (Firmware Over The Air) 기능 개발</p>
                  <p>• 중앙 집중화된 인코딩/디코딩 로직으로 토픽 확장성 확보</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  DB 설계 및 데이터 모델링
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• ERD 모델링 및 테이블 설계</p>
                  <p>• 차량 기준 정보, 차량 태그 이벤트 테이블 등 정의</p>
                  <p>• 인터페이스 이력 관리 구조 설계</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  장비/시스템 인터페이스
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 기준국: NTRIP Client 개발</p>
                  <p>• 중계기: SNMP 기반 상태 정보 수집 인터페이스 개발</p>
                  <p>
                    • 타 시스템: TCP Socket, REST API 기반 차량 기준 정보
                    인터페이스 개발
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  문서화 및 품질관리
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 요구사항 정의서, 화면 설계서, 인터페이스 설계서 작성</p>
                  <p>• 요구사항 추적 매트릭스, 단위테스트 명세서 작성</p>
                  <p>• Fortify, AppScan 보안성 검토 수행</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack with modern design */}
          <div ref={techStackRef} style={fadeInStyle(techStackVisible)}>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-[#0090FF] rounded-full"></div>
                <h3
                  className="text-xl font-medium tracking-wide"
                  style={{ color: 'rgb(19 78 74)' }}
                >
                  사용 기술 및 환경
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  Backend
                </h5>
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    Java
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    Spring Boot
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  Frontend
                </h5>
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    HTML/CSS
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    JavaScript
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    jQuery
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  Database
                </h5>
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    MariaDB
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    SQL
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  통신/프로토콜
                </h5>
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    MQTT
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    SNMP
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    TCP Socket
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    REST API
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  IDE
                </h5>
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    IntelliJ IDEA
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    Eclipse
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  협업 도구
                </h5>
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    Jira
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    Confluence
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    Figma
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    WBS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
