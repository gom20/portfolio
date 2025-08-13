import { useEffect, useRef, useState } from 'react';

interface Year2023Props {
  // 필요한 props가 있다면 여기에 추가
}

export default function Year2023({}: Year2023Props) {
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
                NEXON
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500 font-medium tracking-wide">
                  2023.04 - 2023.12
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              사내 설문 시스템 신규 기능 및 백오피스 대시보드 개발
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                NPTI 설문 유형
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                백오피스 대시보드
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                풀스택 개발
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
              넥슨 사내 설문 시스템 신규 기능 개발 및 유지보수 업무를
              수행했습니다. 먼저 기존 넥슨 사내 설문 시스템에 NPTI 설문 유형을
              시스템에 등록하고 배포할 수 있는 새로운 기능을 Spring Boot와
              Vue.js를 활용한 개발을 통해 구현했습니다. 개발 완료 후 넥슨
              빌딩앤파이터의 '나의 리더십 유형' 이벤트에 성공적으로 적용되어
              실제 서비스에 활용되는 성과를 달성했습니다. 이후 넥슨퍼스트
              백오피스 설문 대시보드 개발을 진행하여 Parse, Node.js, Express
              기반의 서버 개발과 JavaScript, jQuery를 활용한 프론트엔드 개발을
              담당했으며, 설문 데이터의 효율적인 관리와 시각화 기능을 제공하는
              대시보드를 구축했습니다. 두 개발 업무 모두 단독 개발자로 참여하여
              주도적으로 개발을 수행했습니다.
            </p>
            <img
              src="/images/years/2023.jpg"
              alt="넥슨 사내 설문 시스템"
              className="hidden md:block w-full max-h-64 object-cover shadow-lg object-bottom"
              style={{ objectPosition: 'center 65%' }}
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
                  style={{
                    background: 'var(--primary)',
                  }}
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
              {/* NPTI 신규 기능 */}
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
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    사내 설문 시스템 NPTI 설문 유형 기능 개발
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    • NPTI 설문 유형 등록/배포 기능 풀스택 구현 (Spring Boot +
                    Vue.js)
                  </p>
                  <p>
                    • 이벤트 적용: ‘나의 리더십 유형’(넥슨 빌딩앤파이터)
                    실서비스 적용
                  </p>
                  <p>
                    • 백오피스/API 서버, 프론트 연계 개발 및 배포 파이프라인
                    반영
                  </p>
                </div>
              </div>

              {/* 백오피스 대시보드 */}
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    넥슨퍼스트 백오피스 설문 대시보드 개발
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Parse, Node.js, Express 기반 서버 개발</p>
                  <p>• JavaScript, jQuery 기반 화면 구현 및 데이터 시각화</p>
                  <p>• 설문 데이터 관리/조회 편의성 향상 및 운영 효율 증대</p>
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
                  style={{
                    background: 'var(--primary)',
                  }}
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
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Frontend
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Vue.js</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Database
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>MongoDB</li>
                  <li>ParseQuery</li>
                  <li>MySQL</li>
                  <li>QueryDSL</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  IDE
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>IntelliJ</li>
                  <li>WebStorm</li>
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
