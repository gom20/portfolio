import { useEffect, useState } from 'react';

interface LabsProps {
  isActive: boolean;
  onClose: () => void;
}

interface ProjectCardProps {
  id: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  description: string;
  link: string;
}

// 기술 태그 컴포넌트
const TechnologyTag = ({ technology }: { technology: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="inline-block border border-white/20 rounded-full px-2 py-1 text-xs text-white mr-2 mb-2"
      style={{
        backgroundColor: isHovered
          ? 'rgba(255, 255, 255, 0.15)'
          : 'rgba(255, 255, 255, 0.1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {technology}
    </span>
  );
};

// 프로젝트 카드 컴포넌트
const ProjectCard = ({
  title,
  date,
  image,
  imageAlt,
  technologies,
  description,
  link,
}: ProjectCardProps) => (
  <div className="bg-black/30 rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 relative group">
    <div className="mb-4">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-64 object-cover rounded-lg mb-3"
      />
    </div>

    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <h3
            className="text-base md:text-lg font-normal text-gray-200"
            style={{ fontFamily: 'TheJamsil' }}
          >
            {title}
          </h3>
          <span
            className="text-sm text-gray-400 font-light"
            style={{ fontFamily: 'TheJamsil' }}
          >
            {date}
          </span>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"
          >
            <path d="M7 17l10-10M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>

    <div className="flex flex-wrap mb-4">
      {technologies.map((tech, index) => (
        <TechnologyTag key={index} technology={tech} />
      ))}
    </div>

    <p className="text-sm text-gray-300 mb-4 leading-relaxed">{description}</p>
  </div>
);

// 프로젝트 데이터
const PROJECTS_DATA = [
  {
    id: 'project1',
    title: '포트폴리오 ver 2.0',
    date: '2025.08',
    image: '/images/labs/portfolio2.png',
    imageAlt: '포트폴리오 사이트 스크린샷',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    description:
      'React와 TypeScript를 기반으로 제작한 개인 포트폴리오 웹사이트입니다. Vite를 사용하여 빠르고 효율적인 개발 환경을 구축했으며, Tailwind CSS로 모던하고 반응형 UI를 구현했습니다. 연도별 경력, 기술 스택, 프로젝트 경험을 체계적으로 정리하여 보여주는 화면 전환과 인터랙티브 오버레이 방식을 함께 적용해 부드러운 사용자 경험을 구현했습니다. 개발 과정 전반을 AI를 활용한 바이브 코딩 방식으로 진행하여, 세밀한 UI/UX 디테일과 복잡한 인터랙션을 구현했습니다.',
    link: 'https://gom20portfolio.vercel.app',
  },
  {
    id: 'project2',
    title: '글적글적 연구소',
    date: '2024.03',
    image: '/images/labs/gjgj.png',
    imageAlt: '글적글적 연구소 정적 마케팅 페이지 스크린샷',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    description:
      '서비스 소개와 신청 유도를 목적으로 제작한 마케팅 랜딩페이지로, 원페이지 스크롤 방식의 반응형 웹으로 구현되었습니다. 주요 섹션을 스크롤에 따라 순차적으로 노출되도록 구성하여 사용자가 자연스럽게 정보를 습득하고 행동(신청, 문의)으로 이어질 수 있도록 설계했습니다. 개발은 React기반으로 진행하였으며, 정적 페이지 형태로 빌드한 뒤 Vercel을 이용해 배포했습니다.',
    link: 'https://gjgj.vercel.app/',
  },
  {
    id: 'project3',
    title: '포트폴리오 ver 1.0',
    date: '2023.02',
    image: '/images/labs/portfolio1.png',
    imageAlt: '경력 기술서 웹 페이지 스크린샷',
    technologies: ['Next.js', 'React', 'TypeScript'],
    description:
      'Next.js로 제작한 정적 반응형 포트폴리오 웹 페이지로, Next.js의 라우팅 기능을 활용하여 화면 전환 시 전체 페이지를 새로고침하지 않고 부드럽게 이동할 수 있도록 구현했습니다. 모든 화면은 React 컴포넌트 구조로 구성되었으며, CSS 반응형 설계를 통해 PC, 태블릿, 모바일 등 다양한 디바이스 환경에서 최적화된 UI 제공하도록 구현했습니다. 최종 결과물은 Vercel을 통해 배포되었습니다.',
    link: 'https://gomi-eight.vercel.app/',
  },
  {
    id: 'project4',
    title: '마운틴고',
    date: '2023.12 - 2024.01',
    image: '/images/labs/mago.jpg',
    imageAlt: '마운틴고 앱 스크린샷',
    technologies: ['Java', 'Spring Boot', 'Expo', 'React', 'Redux'],
    description:
      '이 프로젝트는 Spring Boot, React Native를 기반으로 개발한 등산 기록 및 관리 모바일 애플리케이션입니다. 사용자는 회원 가입 및 로그인 절차를 거쳐 서비스를 이용할 수 있습니다. 등산 기능을 실행하면 실시간으로 등산 진행 상황을 기록할 수 있으며, 등산 종료 후에는 경로와 기록이 저장됩니다. 또한 목표 산행을 달성하면 스탬프를 획득하는 게임화 요소가 포함되어 있습니다. 기록 관리 화면에서는 과거 등산 데이터를 확인할 수 있고, 계정 설정 메뉴에서 개인 정보 변경 및 탈퇴가 가능합니다. 이 앱은 React 학습을 목적으로 진행한 프로젝트로, 실제 개발 과정을 통해 React의 컴포넌트 구조와 상태 관리에 대해 직접 경험하고 익힐 수 있었습니다.',
    link: 'https://github.com/gom20/mago-ui',
  },
];

export default function Labs({ isActive, onClose }: LabsProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
    }
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 반응형 패딩 계산
  const getResponsivePadding = () => {
    if (windowWidth < 768) return '16px';
    if (windowWidth < 1024) return '32px';
    return '65px';
  };

  const responsivePadding = getResponsivePadding();

  return (
    <div
      className="fixed inset-0 z-45 flex items-start justify-center"
      style={{ paddingTop: '190px' }}
    >
      {/* X 버튼 - 반응형 스타일 */}
      <button
        onClick={onClose}
        className={`fixed flex items-center justify-center text-white hover:text-gray-300 transition-all duration-500 z-50 ${
          windowWidth < 768 ? 'w-10 h-10' : 'w-14 h-14 group'
        }`}
        style={{
          top: '32px',
          right:
            windowWidth < 768 ? '16px' : windowWidth < 1024 ? '32px' : '65px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        title="닫기"
        onMouseEnter={e => {
          if (windowWidth >= 768) {
            const circle = e.currentTarget.querySelector(
              '.draw-circle'
            ) as SVGCircleElement;
            if (circle) {
              circle.style.strokeDashoffset = '0';
            }
          }
        }}
        onMouseLeave={e => {
          if (windowWidth >= 768) {
            const circle = e.currentTarget.querySelector(
              '.draw-circle'
            ) as SVGCircleElement;
            if (circle) {
              circle.style.strokeDashoffset = '163.36';
            }
          }
        }}
      >
        {/* 동그라미 - 반응형 스타일 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 56 56"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke={windowWidth < 768 ? '#d1d5db' : 'rgba(255, 255, 255, 0.1)'}
            strokeWidth="1"
          />
          {windowWidth >= 768 && (
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="163.36"
              strokeDashoffset="163.36"
              className="draw-circle"
              style={{
                transition:
                  'stroke-dashoffset 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
          )}
        </svg>

        {/* X 아이콘 - 반응형 크기 */}
        <svg
          width={windowWidth < 768 ? '20' : '24'}
          height={windowWidth < 768 ? '20' : '24'}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={
            windowWidth < 768
              ? ''
              : 'relative z-10 transition-transform duration-300 group-hover:scale-110'
          }
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="max-w-7xl text-white overflow-y-auto w-full custom-scrollbar"
        style={{
          paddingLeft: responsivePadding,
          paddingRight: responsivePadding,
          fontFamily: "'Noto Sans KR', sans-serif",
          maxHeight:
            windowWidth < 768
              ? 'calc(100vh - 140px - 50px)'
              : 'calc(100vh - 190px - 50px)',
          paddingBottom: '50px',
          transform: shouldAnimate ? 'translateY(0)' : 'translateY(80px)',
          opacity: shouldAnimate ? 1 : 0,
          transition: shouldAnimate
            ? 'transform 0.5s ease-out 0.5s, opacity 0.5s ease-out 0.6s'
            : 'none',
          visibility: isActive ? 'visible' : 'hidden',
        }}
      >
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(26, 26, 26, 0.3);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(226, 232, 240, 0.3);
            border-radius: 10px;
            transition: all 0.3s ease;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(226, 232, 240, 0.6);
            transform: scale(1.1);
          }
        `}</style>

        <div>
          <div className="space-y-8">
            {/* 프로젝트 카드 섹션 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {PROJECTS_DATA.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
