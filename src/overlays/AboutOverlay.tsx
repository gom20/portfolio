import { useEffect, useState } from 'react';

interface AboutContentProps {
  isActive: boolean;
}

export default function AboutOverlay({ isActive }: AboutContentProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isActive]);

  return (
    <div
      className="fixed inset-0 z-45 flex items-start justify-center"
      style={{
        paddingTop: '170px',
      }}
    >
      <div
        className="max-w-7xl text-white overflow-y-auto w-full px-5 md:px-10 lg:px-16"
        style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          maxHeight: 'calc(100vh - 170px - 50px)',
          paddingBottom: '50px',
          transform: shouldAnimate ? 'translateY(0)' : 'translateY(80px)',
          opacity: shouldAnimate ? 1 : 0,
          transition: shouldAnimate
            ? 'transform 0.5s ease-out 0.5s, opacity 0.5s ease-out 0.6s'
            : 'none',
          visibility: isActive ? 'visible' : 'hidden',
        }}
      >
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <div className="lg:flex-[6] lg:pr-4">
            <h2 className="text-lg md:text-xl lg:text-xl font-semibold mb-4">
              Who I Am
            </h2>
            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300 mb-6">
              안녕하세요! 저는 열정적인 Full-Stack Developer입니다. 사용자
              경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는 것을
              좋아합니다.
            </p>
            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300 mb-6">
              새로운 기술을 배우는 것에 대한 열정이 있으며, 항상 최신 트렌드와
              베스트 프랙티스를 따라가려고 노력합니다.
            </p>
            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300 mb-6">
              React, TypeScript, Node.js를 주력 기술로 사용하며, 클라우드
              서비스와 DevOps에도 관심이 많습니다. 팀 협업을 중요시하며, 코드
              리뷰와 지식 공유를 통해 함께 성장하는 것을 즐깁니다.
            </p>
            <p className="text-sm md:text-base lg:text-base leading-relaxed text-gray-300">
              현재는 사용자 중심의 웹 애플리케이션 개발에 집중하고 있으며, 성능
              최적화와 접근성 개선에 대한 지속적인 연구를 하고 있습니다.
            </p>
            <br />
          </div>

          <div className="lg:flex-[2] lg:pr-3">
            <h2 className="text-lg md:text-xl lg:text-xl font-semibold mb-4">
              Experience
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-sm md:text-base lg:text-base font-medium">
                  현대오토에버
                </h3>
                <p className="text-xs md:text-sm lg:text-sm text-gray-300 italic">
                  2023.12 - 2025.08
                </p>
                <ul className="text-xs md:text-sm lg:text-sm text-gray-300 mt-2 space-y-1">
                  <li>차량 위치 관리 시스템 구축</li>
                  <li>의장 차량 트래킹 시스템 I/F 개발</li>
                </ul>
              </div>
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-sm md:text-base lg:text-base font-medium">
                  미띵스
                </h3>
                <p className="text-xs md:text-sm lg:text-sm text-gray-300 italic">
                  2023.04 - 2023.12
                </p>
                <ul className="text-xs md:text-sm lg:text-sm text-gray-300 mt-2 space-y-1">
                  <li>리서치 서비스 유지보수 및 개발</li>
                </ul>
              </div>
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-sm md:text-base lg:text-base font-medium">
                  프리랜서
                </h3>
                <p className="text-xs md:text-sm lg:text-sm text-gray-300 italic">
                  2021.04 - 2021.07
                </p>
                <ul className="text-xs md:text-sm lg:text-sm text-gray-300 mt-2 space-y-1">
                  <li>반도체 자재 사용량 분석 시스템 개발</li>
                </ul>
              </div>
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-sm md:text-base lg:text-base font-medium">
                  삼성SDS
                </h3>
                <p className="text-xs md:text-sm lg:text-sm text-gray-300 italic">
                  2013.02 - 2020.07
                </p>
                <ul className="text-xs md:text-sm lg:text-sm text-gray-300 mt-2 space-y-1">
                  <li>반도체 자재 사용량 분석 시스템 운영</li>
                  <li>리테일 솔루션 Admin 모듈 개발</li>
                  <li>SMART TV 앱 유지보수 및 개발</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:flex-[1]">
            <h2 className="text-lg md:text-xl lg:text-xl font-semibold mb-4">
              Contact
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-sm md:text-base lg:text-base font-medium mb-2">
                  Email
                </h3>
                <p className="text-xs md:text-sm lg:text-sm text-gray-300">
                  miyoung.go@example.com
                </p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-sm md:text-base lg:text-base font-medium mb-2">
                  GitHub
                </h3>
                <p className="text-xs md:text-sm lg:text-sm text-gray-300">
                  github.com/miyounggo
                </p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-sm md:text-base lg:text-base font-medium mb-2">
                  LinkedIn
                </h3>
                <p className="text-xs md:text-sm lg:text-sm text-gray-300">
                  linkedin.com/in/miyounggo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
