import { useState, useEffect } from 'react';
import Menu3D from './components/Menu3D';
import YearPage from './components/YearPage';

const menuItems = [
  '2025', '2024', '2023', '2021', '2017', '2014', '2013'
];

export default function App() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [nameAnimation, setNameAnimation] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // 이름 애니메이션 시작
  useEffect(() => {
    const timer = setTimeout(() => {
      setNameAnimation(true);
    }, 300); // 0.3초 후 애니메이션 시작
    return () => clearTimeout(timer);
  }, []);

  // 마우스 조명 효과
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex h-screen w-full relative overflow-x-hidden bouncy-scroll" style={{ background: 'rgb(15 23 42)' }}>
      {/* 마우스 조명 효과 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`
        }}
      />
      {isMenuVisible && (
        <div 
          className="absolute inset-0 z-10"
          style={{
            opacity: isMenuVisible ? 1 : 0,
            transform: isMenuVisible ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
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
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <YearPage year={selectedYear} onBack={handleBackToMenu} />
        </div>
      )}

      {/* 좌측 고정 이름 */}
      <div className="fixed bottom-8 left-16 z-50" style={{ maxWidth: '300px' }}>
        <div 
          className="font-bold text-4xl"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: '900',
            color: 'rgb(226 232 240)'
          }}
        >
          <div 
            className="cursor-pointer"
            onMouseEnter={(e) => {
              const goElement = e.currentTarget.querySelector('.go-text') as HTMLElement;
              const miyoungElement = e.currentTarget.querySelector('.miyoung-text') as HTMLElement;
              if (goElement) {
                goElement.style.color = 'transparent';
                (goElement.style as any).webkitTextStroke = '0.8px white';
                goElement.style.transition = 'color 0.3s ease, webkit-text-stroke 0.3s ease';
              }
              if (miyoungElement) {
                miyoungElement.style.color = 'transparent';
                (miyoungElement.style as any).webkitTextStroke = '0.8px white';
                miyoungElement.style.transition = 'color 0.3s ease, webkit-text-stroke 0.3s ease';
              }
            }}
            onMouseLeave={(e) => {
              const goElement = e.currentTarget.querySelector('.go-text') as HTMLElement;
              const miyoungElement = e.currentTarget.querySelector('.miyoung-text') as HTMLElement;
              if (goElement) {
                goElement.style.color = 'white';
                (goElement.style as any).webkitTextStroke = '0.5px white';
                goElement.style.transition = 'color 0.3s ease, webkit-text-stroke 0.3s ease';
              }
              if (miyoungElement) {
                miyoungElement.style.color = 'white';
                (miyoungElement.style as any).webkitTextStroke = '0.5px white';
                miyoungElement.style.transition = 'color 0.3s ease, webkit-text-stroke 0.3s ease';
              }
            }}
          >
            <div
              style={{
                overflow: 'hidden'
              }}
            >
              <div
                className="go-text"
                style={{
                  transform: nameAnimation ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 0.8s ease-out 0.2s',
                  color: 'white',
                  WebkitTextStroke: '0.5px white'
                }}
              >
                GO.
              </div>
            </div>
            <div
              style={{
                overflow: 'hidden'
              }}
            >
              <div
                className="miyoung-text"
                style={{
                  transform: nameAnimation ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 0.8s ease-out 0.4s',
                  color: 'white',
                  WebkitTextStroke: '0.5px white'
                }}
              >
                MIYOUNG
              </div>
            </div>
          </div>
          <div 
            style={{
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                fontSize: '1rem',
                fontWeight: '400',
                marginTop: '8px',
                opacity: nameAnimation ? 1 : 0,
                transform: nameAnimation ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s',
                color: 'rgba(255, 255, 255, 0.7)',
                whiteSpace: 'nowrap'
              }}
            >
              Full Stack Developer
            </div>
          </div>

          {/* 메뉴 아이템들 */}
          <div style={{ marginTop: '24px', display: 'flex', gap: '32px' }}>
            <div 
              className="menu-item"
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '700', 
                marginBottom: '8px', 
                color: 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                opacity: nameAnimation ? 1 : 0,
                transform: nameAnimation ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out 1.0s, transform 0.8s ease-out 1.0s'
              }}
              onMouseEnter={(e) => {
                const line = e.currentTarget.querySelector('.line') as HTMLElement;
                if (line) {
                  line.style.width = '40px';
                  line.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                  line.style.transition = 'width 0.3s ease, background-color 0.3s ease';
                }
                e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
                e.currentTarget.style.transition = 'color 0.3s ease';
              }}
              onMouseLeave={(e) => {
                const line = e.currentTarget.querySelector('.line') as HTMLElement;
                if (line) {
                  line.style.width = '20px';
                  line.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                  line.style.transition = 'width 0.3s ease, background-color 0.3s ease';
              }
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.transition = 'color 0.3s ease';
              }}
            >
              <div 
                className="line"
                style={{
                  width: '20px',
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  marginRight: '8px',
                  transition: 'width 0.3s ease, background-color 0.3s ease'
                }}
              ></div>
              <span style={{ fontWeight: '400', marginRight: '8px' }}>01</span>About
            </div>
            <div 
              className="menu-item"
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '700', 
                marginBottom: '8px', 
                color: 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                opacity: nameAnimation ? 1 : 0,
                transform: nameAnimation ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out 1.2s, transform 0.8s ease-out 1.2s'
              }}
              onMouseEnter={(e) => {
                const line = e.currentTarget.querySelector('.line') as HTMLElement;
                if (line) {
                  line.style.width = '40px';
                  line.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                  line.style.transition = 'width 0.3s ease, background-color 0.3s ease';
                }
                e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
                e.currentTarget.style.transition = 'color 0.3s ease';
              }}
              onMouseLeave={(e) => {
                const line = e.currentTarget.querySelector('.line') as HTMLElement;
                if (line) {
                  line.style.width = '20px';
                  line.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                  line.style.transition = 'width 0.3s ease, background-color 0.3s ease';
              }
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.transition = 'color 0.3s ease';
              }}
            >
              <div 
                className="line"
                style={{
                  width: '20px',
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  marginRight: '8px',
                  transition: 'width 0.3s ease, background-color 0.3s ease'
                }}
              ></div>
              <span style={{ fontWeight: '400', marginRight: '8px' }}>02</span>Skills
            </div>
            <div 
              className="menu-item"
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '700', 
                color: 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                opacity: nameAnimation ? 1 : 0,
                transform: nameAnimation ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out 1.4s, transform 0.8s ease-out 1.4s'
              }}
              onMouseEnter={(e) => {
                const line = e.currentTarget.querySelector('.line') as HTMLElement;
                if (line) {
                  line.style.width = '40px';
                  line.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                  line.style.transition = 'width 0.3s ease, background-color 0.3s ease';
                }
                e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
                e.currentTarget.style.transition = 'color 0.3s ease';
              }}
              onMouseLeave={(e) => {
                const line = e.currentTarget.querySelector('.line') as HTMLElement;
                if (line) {
                  line.style.width = '20px';
                  line.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                  line.style.transition = 'width 0.3s ease, background-color 0.3s ease';
              }
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.transition = 'color 0.3s ease';
              }}
            >
              <div 
                className="line"
                style={{
                  width: '20px',
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  marginRight: '8px',
                  transition: 'width 0.3s ease, background-color 0.3s ease'
                }}
              ></div>
              <span style={{ fontWeight: '400', marginRight: '8px' }}>03</span>Github
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}
