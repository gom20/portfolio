import { useEffect, useState } from 'react';

interface ExperienceContentProps {
  isActive: boolean;
}

export default function ExperienceOverlay({
  isActive,
}: ExperienceContentProps) {
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
        className="max-w-7xl text-white overflow-y-auto w-full"
        style={{
          paddingLeft: '65px',
          paddingRight: '65px',
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
        <div>
          <h2 className="text-lg md:text-xl lg:text-xl font-semibold mb-6">
            Experience
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-white pl-6">
              <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2">
                현대오토에버
              </h3>
              <p className="text-sm md:text-base lg:text-base text-gray-300 italic mb-3">
                2023.12 - 2025.08 | Full-Stack Developer
              </p>
              <ul className="text-sm md:text-base lg:text-base text-gray-300 space-y-2">
                <li>• 차량 위치 관리 시스템 구축 및 운영</li>
                <li>• 의장 차량 트래킹 시스템 I/F 개발</li>
                <li>• React, TypeScript 기반 프론트엔드 개발</li>
                <li>• Spring Boot, Java 기반 백엔드 API 개발</li>
                <li>• Oracle Database 연동 및 최적화</li>
              </ul>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2">
                미띵스
              </h3>
              <p className="text-sm md:text-base lg:text-base text-gray-300 italic mb-3">
                2023.04 - 2023.12 | Frontend Developer
              </p>
              <ul className="text-sm md:text-base lg:text-base text-gray-300 space-y-2">
                <li>• 리서치 서비스 유지보수 및 신규 기능 개발</li>
                <li>• Vue.js, JavaScript 기반 SPA 개발</li>
                <li>• RESTful API 연동 및 상태 관리</li>
                <li>• 사용자 경험 개선을 위한 UI/UX 최적화</li>
                <li>• 반응형 웹 디자인 구현</li>
              </ul>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2">
                프리랜서
              </h3>
              <p className="text-sm md:text-base lg:text-base text-gray-300 italic mb-3">
                2021.04 - 2021.07 | Full-Stack Developer
              </p>
              <ul className="text-sm md:text-base lg:text-base text-gray-300 space-y-2">
                <li>• 반도체 자재 사용량 분석 시스템 개발</li>
                <li>• Python, Django를 활용한 데이터 분석 시스템 구축</li>
                <li>• PostgreSQL 데이터베이스 설계 및 구현</li>
                <li>• 데이터 시각화 대시보드 개발</li>
                <li>• 클라이언트 요구사항 분석 및 솔루션 제안</li>
              </ul>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2">
                삼성SDS
              </h3>
              <p className="text-sm md:text-base lg:text-base text-gray-300 italic mb-3">
                2013.02 - 2020.07 | Software Engineer
              </p>
              <ul className="text-sm md:text-base lg:text-base text-gray-300 space-y-2">
                <li>• 반도체 자재 사용량 분석 시스템 운영 및 개선</li>
                <li>• 리테일 솔루션 Admin 모듈 개발</li>
                <li>• SMART TV 앱 유지보수 및 신규 기능 개발</li>
                <li>• Java, Spring Framework 기반 엔터프라이즈 시스템 개발</li>
                <li>• Oracle, MySQL 데이터베이스 관리 및 성능 튜닝</li>
                <li>• 대규모 트래픽 처리를 위한 시스템 아키텍처 설계</li>
                <li>• 레거시 시스템 마이그레이션 프로젝트 참여</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
