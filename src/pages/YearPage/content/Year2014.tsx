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
                  2014.12 - 2017.10
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              Nexshop Sales 솔루션 개발
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                Customer 모듈 개발
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                Admin 모듈 유지보수
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                SOAP 클라이언트 개발
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
              삼성 SDS Nexshop Sales 리테일 솔루션의 웹 서버 및 UI 개발을
              담당했습니다. Spring Framework 기반의 API 서버와
              JSP/JavaScript/jQuery를 활용한 UI 구현을 통해 일반적인 웹 개발
              경험을 쌓았습니다. 주요 업무로는 고객 관리를 위한 Customer 모듈의
              RESTful API 설계 및 구현, 시스템 관리자를 위한 Admin 모듈의
              지속적인 유지보수 및 개선 작업을 수행했습니다. 또한 휴대폰 개통
              서비스와의 연동을 위해 통신사 웹서비스와의 SOAP 기반 통신
              클라이언트를 구현하여 외부 시스템 연동 경험을 확보했습니다. 약
              20명 규모의 개발팀에서 Git을 활용한 버전 관리와 JIRA/Confluence를
              통한 이슈 트래킹 및 문서화 경험을 통해 체계적인 기업용 솔루션 개발
              프로세스를 습득하였습니다.
            </p>
            <img
              src="/images/years/2014.png"
              alt="삼성 SDS Nexshop Sales 솔루션"
              className="hidden md:block w-full max-h-64 object-cover shadow-lg object-center"
              style={{ objectPosition: 'center 50%' }}
            />
          </div>

          {/* Key Achievements */}
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
              {/* Customer 모듈 API */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--primary)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    Customer 모듈 개발
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 고객 관련 데이터 처리를 위한 RESTful API 설계 및 구현</p>
                  <p>• Spring Framework 기반 서비스/DAO 계층 개발</p>
                  <p>• Javascript 기반 UI 개발 및 유지보수</p>
                </div>
              </div>

              {/* Admin 유지보수 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--primary)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    Admin(User, Login, Menu) 모듈 유지보수
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 사용자/로그인/메뉴 관리 기능 로직 개선 및 버그 수정</p>
                  <p>• UI 개선 및 사용성 향상을 위한 화면 개발</p>
                </div>
              </div>

              {/* 개통 연동(SOAP) */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--secondary)' }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--primary)' }}
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
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
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
                  <li>Spring Framework</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Frontend
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>JavaScript</li>
                  <li>jQuery</li>
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
                  Tool
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
