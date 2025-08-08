import { useEffect, useRef, useState } from 'react';

interface Year2014Props {
  // 필요한 props가 있다면 여기에 추가
}

export default function Year2014({}: Year2014Props) {
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
          {/* Header Section */}
          <div
            ref={headerRef}
            style={fadeInStyle(headerVisible)}
            className="mb-8"
          >
            <div className="flex items-center gap-6 mb-1">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">
                삼성 SDS
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500 font-medium tracking-wide">
                  2014
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              Nexshop Sales 솔루션 개발
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                Web 서버
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                Web UI
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                약 20명
              </span>
            </div>
          </div>

          {/* Project Overview */}
          <div
            ref={overviewRef}
            style={fadeInStyle(overviewVisible)}
            className="mb-16"
          >
            <p className="text-gray-700 leading-relaxed text-base mb-8">
              삼성 SDS Nexshop Sales 솔루션 개발 프로젝트에 참여하여 Web 서버 및
              Web UI 개발을 담당했습니다. 약 20명 규모의 개발팀에서 고객 및
              관리자 기능을 중심으로 API 개발과 화면 구현을 수행하며, 안정적인
              서비스 운영을 위한 유지보수와 신규 기능 추가를 함께 진행했습니다.
            </p>
          </div>

          {/* Key Achievements */}
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
              {/* Customer 모듈 API */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    Customer 모듈 RESTful API 개발
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 고객 관련 데이터 처리를 위한 RESTful API 설계 및 구현</p>
                  <p>• Spring Framework 기반 서비스/DAO 계층 개발</p>
                </div>
              </div>

              {/* Admin 유지보수 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17V9m4 8v-4m4 4V7M4 19h16"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    Admin(User, Login, Menu) 모듈 유지보수
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 사용자/로그인/메뉴 관리 기능 로직 개선 및 버그 수정</p>
                  <p>• UI 개선 및 사용성 향상을 위한 jQuery 기반 화면 보완</p>
                </div>
              </div>

              {/* 개통 연동(SOAP) */}
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
                    휴대폰 개통 기능 연동 (SOAP 클라이언트)
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 통신사 웹서비스 연동을 위한 SOAP 기반 클라이언트 구현</p>
                  <p>• 연동 인터페이스 예외 처리 및 안정성 보강</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
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
                  <li>Spring Framework</li>
                  <li>ANSI SQL</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Frontend
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>JavaScript</li>
                  <li>jQuery</li>
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
                  <li>Git</li>
                  <li>JIRA</li>
                  <li>Confluence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
