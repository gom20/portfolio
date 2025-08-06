import React, { useEffect, useRef, useState } from 'react';

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
            <h3 className="text-3xl font-medium text-[#B700FF] mb-6 tracking-wide">
              Smart TV Application 개발
            </h3>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-[#B700FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#B700FF]/30 transition-colors duration-200">
                앱 개발
              </span>
              <span className="px-4 py-2 bg-[#B700FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#B700FF]/30 transition-colors duration-200">
                프레임워크 적용
              </span>
              <span className="px-4 py-2 bg-[#B700FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#B700FF]/30 transition-colors duration-200">
                GUI 리뉴얼
              </span>
              <span className="px-4 py-2 bg-[#B700FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#B700FF]/30 transition-colors duration-200">
                VOC 대응
              </span>
              <span className="px-4 py-2 bg-[#B700FF]/20 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-[#B700FF]/30 transition-colors duration-200">
                테스트 대응
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
              삼성전자 Smart TV Facebook, Twitter 앱 담당자로 근무하였습니다.
              하이브리드 웹앱으로 미디어(사진, 동영상) 플레이는 TV 플랫폼
              라이브러리가 사용되었고 이 외의 화면은 표준 웹 기술로
              구현되었습니다. Backbone.js 프레임워크를 적용하여 MVC 패턴으로
              재개발을 진행하였으며, 양산 테스트 Defect 대응 및 고객 VOC 대응을
              담당하였습니다.
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
                <div className="w-1 h-6 bg-[#B700FF] rounded-full"></div>
                <h3 className="text-xl font-medium text-gray-800 tracking-wide">
                  주요 업무 및 성과
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Facebook & Twitter 앱 개발
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 하이브리드 웹앱 구조 설계 및 구현</p>
                  <p>• TV 플랫폼 라이브러리 연동</p>
                  <p>• 미디어(사진, 동영상) 플레이 기능 개발</p>
                  <p>• 표준 웹 기술 기반 UI/UX 구현</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
                <div className="w-1 h-6 bg-[#B700FF] rounded-full"></div>
                <h3 className="text-xl font-medium text-gray-800 tracking-wide">
                  사용 기술 및 환경
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  Frontend
                </h5>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    JavaScript
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    HTML
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    CSS
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  Framework
                </h5>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    Backbone.js
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    jQuery
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  Platform
                </h5>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    Smart TV
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    하이브리드 앱
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                  Tools
                </h5>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    SublimeText
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    Redmine
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
