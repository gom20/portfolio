import { useState } from 'react';
import Menu3D from './components/Menu3D';
import YearPage from './components/YearPage';
import NameComponent from './components/NameComponent';

const menuItems = [
  '2025', '2024', '2023', '2021', '2017', '2014', '2013'
];

export default function App() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

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
    <div className="flex h-screen w-full relative overflow-x-hidden" style={{ background: '#8B5CF6' }}>
      {isMenuVisible && (
        <div 
          className="absolute inset-0 z-10"
          style={{
            opacity: isMenuVisible ? 1 : 0,
            transform: isMenuVisible ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'all 0.8s ease-in-out'
          }}
        >
          <Menu3D items={menuItems} onItemClick={handleMenuClick} />
        </div>
      )}
      
      {selectedYear && (
        <div 
          className="absolute inset-0 z-20"
          style={{
            opacity: selectedYear ? 1 : 0,
            transform: selectedYear ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <YearPage year={selectedYear} onBack={handleBackToMenu} />
        </div>
      )}

      {/* 우측 하단 이름 */}
      <div className="absolute bottom-6 right-6 z-50">
        <NameComponent name="Your Name" />
      </div>
    </div>
  );
}
