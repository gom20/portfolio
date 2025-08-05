import { useState } from 'react';
import MenuItem from './components/menus/SideMenuItem';
import YearPage from './pages/YearPage';
import MouseLight from './components/common/CursurLight';
import SideMenu from './components/menus/FooterMenu';
import { useNameAnimation } from './hooks/useNameAnimation';
import { menuItems } from './data/menuData';

export default function App() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [backgroundWhite, setBackgroundWhite] = useState(false);
  // const [isYearPageScrolled, setIsYearPageScrolled] = useState(false);
  const nameAnimation = useNameAnimation();

  const handleMenuClick = (index: number) => {
    const year = menuItems[index];
    // Menu3D 내부 애니메이션이 완료된 후 화면 전환
    setTimeout(() => {
      setIsMenuVisible(false);
      setBackgroundWhite(true);
      setTimeout(() => {
        setSelectedYear(year);
      }, 800); // 메뉴 사라지는 애니메이션 완료 후 페이지 전환
    }, 2400); // Menu3D 내부 사라지는 애니메이션 완료 후
  };

  const handleBackToMenu = () => {
    setBackgroundWhite(false); // 배경을 다시 검은색으로
    setSelectedYear(null);
    // setIsYearPageScrolled(false); // 스크롤 상태 초기화
    setTimeout(() => {
      setIsMenuVisible(true);
    }, 100);
  };

  // const handleYearPageScroll = (scrollTop: number) => {
  //   setIsYearPageScrolled(scrollTop > 0);
  // };

  return (
    <div
      className={`flex h-screen w-full relative ${
        selectedYear ? 'overflow-hidden' : 'overflow-x-hidden'
      }`}
      style={{
        background: backgroundWhite ? 'white' : '#0f0f0f',
        transition:
          'background-color 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <MouseLight />

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
            // onScroll={handleYearPageScroll}
          />
        </div>
      )}

      <SideMenu
        nameAnimation={nameAnimation}
        backgroundWhite={backgroundWhite}
        // isYearPageScrolled={isYearPageScrolled}
        selectedYear={selectedYear}
      />
    </div>
  );
}
