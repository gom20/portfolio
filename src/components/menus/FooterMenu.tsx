import { useState } from 'react';
import AboutOverlay from '../../overlays/AboutOverlay';
import ExperienceOverlay from '../../overlays/ExperienceOverlay';
import SkillsContent from '../../overlays/SkillOveraly';
import {
  useResponsivePadding,
  useIsMobile,
  useWindowWidth,
} from '../../hooks/useResponsive';
import { TRANSITIONS } from '../../constants/animations';

interface SideMenuProps {
  nameAnimation: boolean;
  backgroundWhite: boolean;
}

export default function SideMenu({
  nameAnimation,
  backgroundWhite,
}: SideMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isExperienceActive, setIsExperienceActive] = useState(false);
  const [isSkillsActive, setIsSkillsActive] = useState(false);

  // 리팩토링된 반응형 훅 사용
  const windowWidth = useWindowWidth();
  const responsiveMargin = useResponsivePadding();
  const isMobile = useIsMobile();
  const leftPanelWidth = windowWidth < 768 ? 0 : 415; // YearPage 좌측 배경 너비와 동일

  // YearPage에서 스크롤했을 때 fade out 여부 결정
  const shouldFadeOut = false; // 스크롤해도 메뉴 계속 표시

  const menuItems = [
    { id: 'about', number: '01', label: 'About', type: 'overlay' },
    { id: 'experience', number: '02', label: 'Experience', type: 'overlay' },
    { id: 'skills', number: '03', label: 'Skills', type: 'overlay' },
  ];

  // 반응형 메뉴 스타일 계산 (간소화됨)
  const menuStyles = isMobile
    ? { gap: '12px', bottom: '16px', showAllItems: false }
    : {
        gap: windowWidth < 1024 ? '18px' : '24px',
        bottom: '32px',
        showAllItems: true,
      };

  const handleNameHover = (
    e: React.MouseEvent<HTMLDivElement>,
    isEnter: boolean
  ) => {
    const goElement = e.currentTarget.querySelector('.go-text') as HTMLElement;
    const miyoungElement = e.currentTarget.querySelector(
      '.miyoung-text'
    ) as HTMLElement;

    // 항상 흰색으로 유지
    const strokeColor = 'rgb(255, 255, 255, 0.8)';
    const baseColor = 'rgb(255, 255, 255, 0.8)';

    if (goElement) {
      if (isEnter) {
        goElement.style.color = 'transparent';
        (goElement.style as any).webkitTextStroke = `0.8px ${strokeColor}`;
        goElement.style.transition = TRANSITIONS.textStroke;
      } else {
        // hover 해제 시 배경에 맞는 기본 색상으로 복원
        goElement.style.color = baseColor;
        (goElement.style as any).webkitTextStroke = `0.5px ${strokeColor}`;
        goElement.style.transition = TRANSITIONS.textStroke;
      }
    }
    if (miyoungElement) {
      if (isEnter) {
        miyoungElement.style.color = 'transparent';
        (miyoungElement.style as any).webkitTextStroke = `0.8px ${strokeColor}`;
        miyoungElement.style.transition = TRANSITIONS.textStroke;
      } else {
        // hover 해제 시 배경에 맞는 기본 색상으로 복원
        miyoungElement.style.color = baseColor;
        (miyoungElement.style as any).webkitTextStroke = `0.5px ${strokeColor}`;
        miyoungElement.style.transition = TRANSITIONS.textStroke;
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
          left: responsiveMargin as string,
          maxWidth: '300px',
          bottom: isMobile ? '95px' : '110px',
          opacity: shouldFadeOut ? 0 : isMobile && backgroundWhite ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <div
          className={`font-bold name-text ${
            isMobile ? 'text-3xl' : 'text-4xl'
          }`}
          style={{
            fontFamily: 'TheJamsil, sans-serif',
            fontWeight: '800',
            color: 'rgb(255, 255, 255, 0.8)',
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
                  color: 'rgb(255, 255, 255, 0.8)',
                  WebkitTextStroke: '0.5px rgb(255, 255, 255, 0.8)',
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
                  color: 'rgb(255, 255, 255, 0.8)',
                  WebkitTextStroke: '0.5px rgb(255, 255, 255, 0.8)',
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
          left: responsiveMargin as string,
          bottom: isMobile ? '65px' : '80px',
          maxWidth: '300px',
          opacity: shouldFadeOut ? 0 : isMobile && backgroundWhite ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <div style={{ overflow: 'hidden', bottom: '110px' }}>
          <div
            style={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontFamily: 'TheJamsil, sans-serif',
              fontWeight: '300',
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
              color: 'rgba(255, 255, 255, 0.6)',
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
          left: windowWidth < 768 ? (responsiveMargin as string) : '0px',
          right: windowWidth < 768 ? (responsiveMargin as string) : 'auto',
          width: windowWidth < 768 ? 'auto' : `${leftPanelWidth}px`,
          paddingLeft:
            windowWidth < 768 ? undefined : (responsiveMargin as string),
          bottom: menuStyles.bottom,
          marginTop: '180px',
          opacity: shouldFadeOut ? 0 : isMobile && backgroundWhite ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <div style={{ display: 'flex', gap: menuStyles.gap }}>
          {menuItems
            .filter(item => menuStyles.showAllItems || item.type === 'overlay')
            .map(item => (
              <div
                key={item.id}
                className="menu-item thejamsil-medium"
                style={{
                  fontSize: isMobile ? '0.75rem' : '0.82rem',
                  marginBottom: '8px',
                  color:
                    hoveredItem === item.id
                      ? 'rgb(94 234 212)'
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
                    ? 'opacity 0.15s ease-out, color 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.2s ease'
                    : 'opacity 0.15s ease-out, color 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.2s ease',
                  transform:
                    hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  if (item.id === 'about') handleAboutClick();
                  if (item.id === 'experience') handleExperienceClick();
                  if (item.id === 'skills') handleSkillsClick();
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
