import { useEffect, useRef, useState } from 'react';

interface Year2013Props {
  // 필요한 props가 있다면 여기에 추가
}

export default function Year2013({}: Year2013Props) {
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
                삼성전자
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500 font-medium tracking-wide">
                  2013.02 - 2014.11
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              Smart TV Application 개발
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                유지보수 · 리팩토링
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                GUI 리뉴얼
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                VOC 대응
              </span>
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                }}
              >
                양산 테스트 대응
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
              삼성전자 Smart TV 웹 애플리케이션 개발 업무를 담당하였습니다.
              JavaScript, jQuery, HTML/CSS 등의 웹 기술을 활용하여 Facebook,
              Twitter, 대우 증권 앱의 유지보수 및 개선 작업을 수행했습니다. 주요
              성과로는 기존 애플리케이션에 BackboneJS 프레임워크를 도입하여 MVC
              패턴 기반의 구조적이고 유지보수성이 높은 코드로 재개발하였고,
              대우증권 애플리케이션의 GUI를 전면 리뉴얼하여 사용자 경험을
              개선하였습니다. 또한 양산 환경에서 발생하는 다양한 이슈들에 대한
              신속한 대응을 통해 서비스 품질 향상에 기여했습니다.
            </p>
            <img
              src="/images/years/2013.png"
              alt="삼성전자 Smart TV Application"
              className="hidden md:block w-full max-h-64 object-cover shadow-lg object-center"
              style={{ objectPosition: 'center 44%' }}
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
                    Smart TV WebApp 유지보수 · 리팩토링
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 양산 테스트 Defect, VOC, 로직 변경 요청 대응</p>
                  <p>• 기존 코드 리팩토링 및 안정성/성능 개선</p>
                  <p>• 대우증권 App GUI 리뉴얼</p>
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
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    Backbone.js 프레임워크 적용
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• MVC 패턴 기반 재개발</p>
                  <p>• 코드 구조 개선 및 유지보수성 향상</p>
                  <p>• 컴포넌트 기반 아키텍처 설계</p>
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
                      fill="var(--primary)"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    품질 관리 및 고객 대응
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 양산 테스트 Defect 대응</p>
                  <p>• 고객 VOC 분석 및 해결</p>
                  <p>• 로직 변경 및 신규 기능 추가</p>
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
                  Frontend
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>jQuery</li>
                  <li>BackboneJS</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">
                  Tools
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Sublime Text</li>
                  <li>Redmine</li>
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
