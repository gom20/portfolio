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
                  2013.05 - 2014.11
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              Smart TV Application 개발
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                유지보수 · 리팩토링
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                프레임워크 적용
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                 GUI 리뉴얼
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                 VOC 대응
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                테스트 대응
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                12명
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
              삼성전자 Smart TV Application 개발 프로젝트에 참여하여 Facebook,
              Twitter, 대우증권 WebApp의 유지보수 및 리팩토링을 담당했습니다.
              양산 테스트 Defect 및 VOC 대응, 로직 변경 요청에 신속히
              대응했으며, BackboneJS 프레임워크 적용을 통해 MVC 패턴으로
              재개발을 수행했습니다. 또한 대우증권 App GUI 리뉴얼을 통해 사용자
              경험을 개선했습니다.
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
                <h3 className="text-xl font-bold text-gray-800 tracking-wide" style={{ fontFamily: 'Pretendard', fontWeight: '700' }}>
                  주요 업무 및 성과
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Smart TV WebApp 유지보수 · 리팩토링
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 양산 테스트 Defect, VOC, 로직 변경 요청 대응</p>
                  <p>• 기존 코드 리팩토링 및 안정성/성능 개선</p>
                  <p>• 대우증권 App GUI 리뉴얼 지원</p>
                  <p>• 표준 웹 기술 기반 구조 정리</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Backbone.js 프레임워크 적용
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• MVC 패턴 기반 재개발</p>
                  <p>• 코드 구조 개선 및 유지보수성 향상</p>
                  <p>• 컴포넌트 기반 아키텍처 설계</p>
                  <p>• 데이터 바인딩 및 이벤트 처리 최적화</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  품질 관리 및 고객 대응
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 양산 테스트 Defect 대응</p>
                  <p>• 고객 VOC 분석 및 해결</p>
                  <p>• 로직 변경 및 신규 기능 추가</p>
                  <p>• 안정성 및 성능 최적화</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  대우증권 App GUI 리뉴얼
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 사용자 인터페이스 개선</p>
                  <p>• 사용자 경험(UX) 최적화</p>
                  <p>• 반응형 디자인 적용</p>
                  <p>• 시각적 일관성 확보</p>
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
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">Frontend</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">Framework</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>BackboneJS</li>
                  <li>jQuery</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">Platform</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Smart TV</li>
                  <li>Hybrid App</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 tracking-wider mb-3 border-b border-gray-200 pb-2">Tools</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Sublime Text</li>
                  <li>SVN</li>
                  <li>Redmine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
