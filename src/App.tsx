import { useState } from 'react';
import MenuItem from './components/menus/SideMenuItem';
import YearPage from './pages/YearPage';
import MouseLight from './components/common/CursurLight';
import SideMenu from './components/menus/FooterMenu';
import { useNameAnimation } from './hooks/useNameAnimation';
import { menuItems } from './data/menuData';

// Chrome 브라우저 감지 함수
const isChrome = () => {
  if (typeof window === 'undefined') return false;
  const userAgent = navigator.userAgent;
  return (
    /Chrome/.test(userAgent) &&
    /Google Inc/.test(navigator.vendor) &&
    !/Edg/.test(userAgent)
  );
};

// 애니메이션 상수
const ANIMATION_DELAYS = {
  MENU_DISAPPEAR: 2400,
  BACKGROUND_CHANGE: 800,
  MENU_REAPPEAR: 100,
} as const;

export default function App() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [backgroundWhite, setBackgroundWhite] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nameAnimation = useNameAnimation();

  const handleMenuClick = (index: number) => {
    const year = menuItems[index];
    setIsTransitioning(true); // 화면 전환 시작 시 커서 라이트 fade out 시작
    // Menu3D 내부 애니메이션이 완료된 후 화면 전환
    setTimeout(() => {
      setIsMenuVisible(false);
      setBackgroundWhite(true);
      setTimeout(() => {
        setSelectedYear(year);
      }, ANIMATION_DELAYS.BACKGROUND_CHANGE);
    }, ANIMATION_DELAYS.MENU_DISAPPEAR);
  };

  const handleBackToMenu = () => {
    setBackgroundWhite(false); // 배경을 다시 검은색으로
    setSelectedYear(null);
    setIsTransitioning(false); // 메뉴로 돌아갈 때 커서 라이트 다시 표시
    setTimeout(() => {
      setIsMenuVisible(true);
    }, ANIMATION_DELAYS.MENU_REAPPEAR);
  };

  return (
    <div
      className={`flex h-screen w-full relative ${
        selectedYear ? 'overflow-hidden' : 'overflow-x-hidden'
      }`}
      style={{
        background: backgroundWhite ? 'white' : '#1A1A1A',
        transition:
          'background-color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Chrome이 아닌 브라우저에서만 표시되는 최적화 안내 문구 */}
      {!isChrome() && (
        <div
          style={{
            position: 'fixed',
            top: '16px',
            left: '16px',
            zIndex: 9999,
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: '400',
            lineHeight: '1.4',
            maxWidth: '200px',
            textAlign: 'left',
            pointerEvents: 'none',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            transform: 'none',
          }}
        >
          This site is optimized for Chrome browser
        </div>
      )}

      {!selectedYear && <MouseLight isTransitioning={isTransitioning} />}

      {isMenuVisible && (
        <div
          className="absolute inset-0 z-10"
          style={{
            opacity: isMenuVisible ? 1 : 0,
            transform: isMenuVisible ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <MenuItem items={menuItems} onItemClick={handleMenuClick} />
        </div>
      )}

      {selectedYear && (
        <div
          className="absolute inset-0 z-20"
          style={{
            opacity: selectedYear ? 1 : 0,
            transform: selectedYear ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <YearPage
            year={selectedYear}
            onBack={handleBackToMenu}
            onChangeYear={(y: string) => {
              setBackgroundWhite(true);
              setSelectedYear(y);
            }}
          />
        </div>
      )}

      <SideMenu
        nameAnimation={nameAnimation}
        backgroundWhite={backgroundWhite}
      />
    </div>
  );
}
