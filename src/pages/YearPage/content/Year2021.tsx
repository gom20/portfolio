import { useEffect, useRef, useState } from 'react';

interface Year2021Props {
  // 필요한 props가 있다면 여기에 추가
}

export default function Year2021({}: Year2021Props) {
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
                삼성전자
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500 font-medium tracking-wide">
                  2021
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              반도체 자재 사용량 분석 시스템 개발 프로젝트
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                영향도 분석
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                환경 셋업
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                테스트 지원
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                로직 문의 대응
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                개발 지원
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
              삼성전자 반도체 자재 사용량 분석 시스템 개발 프로젝트에 참여하여,
              재직 중 운영하던 시스템 내 실측 사용량 생성 Application 재개발을
              지원했습니다. 개발 인원 4명으로 구성된 팀에서 영향도 분석 및 수정,
              개발 환경 셋팅과 테스트 지원, 비즈니스 로직 문의 대응 등을
              수행하며 프로젝트 품질과 개발 효율을 높이는 데 기여했습니다.
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
              {/* 영향도 분석 및 수정 */}
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
                    영향도 분석 및 수정
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    • 실측 사용량 생성 Application 재개발에 따른 타 Application
                    영향도 분석
                  </p>
                  <p>• 연계 모듈 수정 및 호환성 검토로 안정적인 배포 지원</p>
                </div>
              </div>

              {/* 개발 환경 셋업 및 테스트 지원 */}
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
                    개발 환경 셋업 및 테스트 지원
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    • 개발자 환경 셋팅 가이드 제공 및 빌드/실행 환경 구성 지원
                  </p>
                  <p>• 기능/통합 테스트 수행 및 이슈 리포팅으로 품질 확보</p>
                </div>
              </div>

              {/* 비즈니스 로직 문의 대응 */}
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
                    비즈니스 로직 문의 대응
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 로직 이해도 기반 질의응답 대응 및 연동 이슈 컨설팅</p>
                  <p>• 업무 요구사항 정제 및 개발 반영 커뮤니케이션 지원</p>
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
                  <li>PeakPerformance Framework</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Database
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Oracle SQL</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  IDE
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Eclipse</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Tools
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>SVN</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
