import { useState, useEffect } from 'react';
import AboutOverlay from '../../overlays/AboutOverlay';
import ExperienceOverlay from '../../overlays/ExperienceOverlay';
import SkillsContent from '../../overlays/SkillOveraly';

interface SideMenuProps {
  nameAnimation: boolean;
  backgroundWhite: boolean;
  isYearPageScrolled?: boolean;
  selectedYear?: string | null;
}

export default function SideMenu({
  nameAnimation,
  backgroundWhite,
  isYearPageScrolled = false,
  selectedYear,
}: SideMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isExperienceActive, setIsExperienceActive] = useState(false);
  const [isSkillsActive, setIsSkillsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // YearPage에서 스크롤했을 때 fade out 여부 결정
  const shouldFadeOut = false; // 스크롤해도 메뉴 계속 표시

  const menuItems = [
    { id: 'about', number: '01', label: 'About', type: 'overlay' },
    { id: 'experience', number: '02', label: 'Experience', type: 'overlay' },
    { id: 'skills', number: '03', label: 'Skills', type: 'overlay' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 반응형 여백 계산
  const getResponsiveMargin = () => {
    if (windowWidth < 768) {
      // 모바일
      return '16px';
    } else if (windowWidth < 1024) {
      // 태블릿
      return '32px';
    } else {
      // 데스크톱
      return '64px';
    }
  };

  // 반응형 메뉴 스타일 계산
  const getResponsiveMenuStyles = () => {
    if (windowWidth < 768) {
      // 모바일
      return {
        gap: '16px',
        bottom: '16px',
        showAllItems: false,
      };
    } else if (windowWidth < 1024) {
      // 태블릿
      return {
        gap: '24px',
        bottom: '32px',
        showAllItems: true,
      };
    } else {
      // 데스크톱
      return {
        gap: '32px',
        bottom: '32px',
        showAllItems: true,
      };
    }
  };

  const responsiveMargin = getResponsiveMargin();
  const menuStyles = getResponsiveMenuStyles();

  const handleNameHover = (
    e: React.MouseEvent<HTMLDivElement>,
    isEnter: boolean
  ) => {
    const goElement = e.currentTarget.querySelector('.go-text') as HTMLElement;
    const miyoungElement = e.currentTarget.querySelector(
      '.miyoung-text'
    ) as HTMLElement;

    // 오버레이 활성화 상태 확인
    const isOverlayActive =
      isAboutActive || isExperienceActive || isSkillsActive;

    // 오버레이가 활성화되어 있으면 흰색, 그렇지 않으면 배경에 따라 결정
    const strokeColor = isOverlayActive
      ? 'white'
      : backgroundWhite
      ? 'black'
      : 'white';
    const baseColor = isOverlayActive
      ? 'white'
      : backgroundWhite
      ? 'black'
      : 'white';

    if (goElement) {
      if (isEnter) {
        goElement.style.color = 'transparent';
        (goElement.style as any).webkitTextStroke = `0.8px ${strokeColor}`;
        goElement.style.transition =
          'color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), webkit-text-stroke 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      } else {
        // hover 해제 시 배경에 맞는 기본 색상으로 복원
        goElement.style.color = baseColor;
        (goElement.style as any).webkitTextStroke = `0.5px ${strokeColor}`;
        goElement.style.transition =
          'color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), webkit-text-stroke 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }
    }
    if (miyoungElement) {
      if (isEnter) {
        miyoungElement.style.color = 'transparent';
        (miyoungElement.style as any).webkitTextStroke = `0.8px ${strokeColor}`;
        miyoungElement.style.transition =
          'color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), webkit-text-stroke 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      } else {
        // hover 해제 시 배경에 맞는 기본 색상으로 복원
        miyoungElement.style.color = baseColor;
        (miyoungElement.style as any).webkitTextStroke = `0.5px ${strokeColor}`;
        miyoungElement.style.transition =
          'color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), webkit-text-stroke 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }
    }
  };

  const handleAboutClick = () => {
    setIsAboutActive(true);
  };

  const handleExperienceClick = () => {
    setIsExperienceActive(true);
  };

  const handleSkillsClick = () => {
    setIsSkillsActive(true);
  };

  return (
    <>
      {/* About 레이어 */}
      {isAboutActive && (
        <div
          className="fixed inset-0 z-40"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <AboutOverlay
            isActive={isAboutActive}
            onClose={() => setIsAboutActive(false)}
          />
        </div>
      )}

      {/* Experience 레이어 */}
      {isExperienceActive && (
        <div
          className="fixed inset-0 z-40"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <ExperienceOverlay
            isActive={isExperienceActive}
            onClose={() => setIsExperienceActive(false)}
          />
        </div>
      )}

      {/* Skills 레이어 */}
      {isSkillsActive && (
        <div
          className="fixed inset-0 z-40"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <SkillsContent
            isActive={isSkillsActive}
            onClose={() => setIsSkillsActive(false)}
          />
        </div>
      )}

      {/* 이름 부분 - 이동하는 애니메이션 */}
      <div
        className="fixed z-50"
        style={{
          left: responsiveMargin,
          maxWidth: '300px',
          bottom: windowWidth < 768 ? '95px' : '110px',
          opacity: shouldFadeOut
            ? 0
            : windowWidth < 768 && backgroundWhite
            ? 0
            : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <div
          className={`font-bold ${windowWidth < 768 ? 'text-3xl' : 'text-4xl'}`}
          style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: '900',
            color: 'white',
            transform:
              isAboutActive || isExperienceActive || isSkillsActive
                ? `translateY(-${window.innerHeight - 250}px)`
                : 'translateY(0)',
            transition: 'transform 1.2s cubic-bezier(0.175, 0.885, 0.1, 1.0)',
          }}
        >
          <div
            className="cursor-pointer"
            onMouseEnter={e => handleNameHover(e, true)}
            onMouseLeave={e => handleNameHover(e, false)}
          >
            <div style={{ overflow: 'hidden' }}>
              <div
                className="go-text"
                style={{
                  transform: nameAnimation
                    ? 'translateY(0)'
                    : 'translateY(100%)',
                  transition:
                    'transform 0.8s ease-out 0.2s, color 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), -webkit-text-stroke 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  color:
                    isAboutActive || isExperienceActive || isSkillsActive
                      ? 'white'
                      : backgroundWhite
                      ? 'black'
                      : 'white',
                  WebkitTextStroke:
                    isAboutActive || isExperienceActive || isSkillsActive
                      ? '0.5px white'
                      : backgroundWhite
                      ? '0.5px black'
                      : '0.5px white',
                }}
              >
                GO.
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div
                className="miyoung-text"
                style={{
                  transform: nameAnimation
                    ? 'translateY(0)'
                    : 'translateY(100%)',
                  transition:
                    'transform 0.8s ease-out 0.4s, color 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), -webkit-text-stroke 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  color:
                    isAboutActive || isExperienceActive || isSkillsActive
                      ? 'white'
                      : backgroundWhite
                      ? 'black'
                      : 'white',
                  WebkitTextStroke:
                    isAboutActive || isExperienceActive || isSkillsActive
                      ? '0.5px white'
                      : backgroundWhite
                      ? '0.5px black'
                      : '0.5px white',
                }}
              >
                MIYOUNG
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Stack Developer - 고정 위치 */}
      <div
        className="fixed z-50"
        style={{
          left: responsiveMargin,
          bottom: windowWidth < 768 ? '65px' : '80px',
          maxWidth: '300px',
          opacity: shouldFadeOut
            ? 0
            : windowWidth < 768 && backgroundWhite
            ? 0
            : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <div style={{ overflow: 'hidden', bottom: '110px' }}>
          <div
            style={{
              fontSize: windowWidth < 768 ? '0.9rem' : '1rem',
              fontWeight: '400',
              opacity:
                nameAnimation &&
                !isAboutActive &&
                !isExperienceActive &&
                !isSkillsActive
                  ? 1
                  : 0,
              transform: nameAnimation ? 'translateY(0)' : 'translateY(20px)',
              transition:
                'opacity 0.3s ease-out, transform 0.8s ease-out 1.2s, color 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              color: backgroundWhite
                ? 'rgba(0, 0, 0, 0.7)'
                : 'rgba(255, 255, 255, 0.7)',
              whiteSpace: 'nowrap',
            }}
          >
            Full-Stack Developer
          </div>
        </div>
      </div>

      {/* 메뉴 아이템들 - 고정 위치 */}
      <div
        className="fixed z-50"
        style={{
          left: responsiveMargin,
          bottom: menuStyles.bottom,
          maxWidth: '300px',
          marginTop: '180px',
          opacity: shouldFadeOut
            ? 0
            : windowWidth < 768 && backgroundWhite
            ? 0
            : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <div style={{ display: 'flex', gap: menuStyles.gap }}>
          {menuItems
            .filter(item => menuStyles.showAllItems || item.type === 'overlay')
            .map(item => (
              <div
                key={item.id}
                className="menu-item"
                style={{
                  fontSize: windowWidth < 768 ? '0.8rem' : '0.9rem',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color:
                    hoveredItem === item.id
                      ? backgroundWhite
                        ? 'rgba(0, 0, 0, 1)'
                        : 'rgba(255, 255, 255, 1)'
                      : backgroundWhite
                      ? 'rgba(0, 0, 0, 0.7)'
                      : 'rgba(255, 255, 255, 0.7)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  opacity:
                    nameAnimation &&
                    !isAboutActive &&
                    !isExperienceActive &&
                    !isSkillsActive
                      ? 1
                      : 0,
                  transition: nameAnimation
                    ? 'opacity 0.2s ease-out 0.2s, color 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s ease'
                    : 'opacity 0.2s ease-out, color 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s ease',
                  transform:
                    hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  if (item.type === 'overlay') {
                    if (item.id === 'about') handleAboutClick();
                    if (item.id === 'experience') handleExperienceClick();
                    if (item.id === 'skills') handleSkillsClick();
                  } else if (item.type === 'link') {
                    window.open(item.url, '_blank');
                  }
                }}
              >
                <span style={{ fontWeight: '400', marginRight: '8px' }}>
                  {item.number}
                </span>
                {item.label}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
