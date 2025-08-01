import { useState } from 'react';
import MenuItem from './components/MenuItem';
import YearPage from './components/YearPage';
import MouseLight from './components/MouseLight';
import SideMenu from './components/SideMenu';
import { useNameAnimation } from './hooks/useNameAnimation';
import { menuItems } from './data/menuData';

export default function App() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const nameAnimation = useNameAnimation();

  const handleMenuClick = (index: number) => {
    const year = menuItems[index];
    // Menu3D 내부 애니메이션이 완료된 후 화면 전환
    setTimeout(() => {
      setIsMenuVisible(false);
      setTimeout(() => {
        setSelectedYear(year);
      }, 800); // 메뉴 사라지는 애니메이션 완료 후 페이지 전환
    }, 2400); // Menu3D 내부 사라지는 애니메이션 완료 후
  };

  const handleBackToMenu = () => {
    setSelectedYear(null);
    setTimeout(() => {
      setIsMenuVisible(true);
    }, 100);
  };

  return (
    <div className="flex h-screen w-full relative overflow-x-hidden bouncy-scroll" style={{ background: 'black' }}>
      <MouseLight />
      
      {isMenuVisible && (
        <div 
          className="absolute inset-0 z-10"
          style={{
            opacity: isMenuVisible ? 1 : 0,
            transform: isMenuVisible ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
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
            transform: selectedYear ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <YearPage year={selectedYear} onBack={handleBackToMenu} />
        </div>
      )}

      <SideMenu nameAnimation={nameAnimation} />
    </div>
  );
}
