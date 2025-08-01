import { useState, useEffect } from 'react';

interface SideMenuProps {
  nameAnimation: boolean;
}

export default function SideMenu({ nameAnimation }: SideMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { id: 'about', number: '01', label: 'About' },
    { id: 'skills', number: '02', label: 'Skills' },
    { id: 'github', number: '03', label: 'Github' }
  ];

  const handleNameHover = (e: React.MouseEvent<HTMLDivElement>, isEnter: boolean) => {
    const goElement = e.currentTarget.querySelector('.go-text') as HTMLElement;
    const miyoungElement = e.currentTarget.querySelector('.miyoung-text') as HTMLElement;
    
    if (goElement) {
      goElement.style.color = isEnter ? 'transparent' : 'white';
      (goElement.style as any).webkitTextStroke = isEnter ? '0.8px white' : '0.5px white';
      goElement.style.transition = 'color 0.3s ease, webkit-text-stroke 0.3s ease';
    }
    if (miyoungElement) {
      miyoungElement.style.color = isEnter ? 'transparent' : 'white';
      (miyoungElement.style as any).webkitTextStroke = isEnter ? '0.8px white' : '0.5px white';
      miyoungElement.style.transition = 'color 0.3s ease, webkit-text-stroke 0.3s ease';
    }
  };

  return (
    <div className="fixed bottom-8 left-16 z-50" style={{ maxWidth: '300px' }}>
      <div 
        className="font-bold text-4xl"
        style={{
          fontFamily: 'Arial, sans-serif',
          fontWeight: '900',
          color: 'white'
        }}
      >
        <div 
          className="cursor-pointer"
          onMouseEnter={(e) => handleNameHover(e, true)}
          onMouseLeave={(e) => handleNameHover(e, false)}
        >
          <div style={{ overflow: 'hidden' }}>
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
          <div style={{ overflow: 'hidden' }}>
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
        
        <div style={{ overflow: 'hidden' }}>
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
          {menuItems.map((item, index) => (
            <div 
              key={item.id}
              className="menu-item"
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '700', 
                marginBottom: '8px', 
                color: hoveredItem === item.id ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                opacity: nameAnimation ? 1 : 0,
                transform: nameAnimation ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s ease-out ${1.0 + index * 0.2}s, transform 0.8s ease-out ${1.0 + index * 0.2}s, color 0.3s ease`
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div 
                className="line"
                style={{
                  width: hoveredItem === item.id ? '40px' : '20px',
                  height: '1px',
                  backgroundColor: hoveredItem === item.id ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.7)',
                  marginRight: '8px',
                  transition: 'width 0.3s ease, background-color 0.3s ease'
                }}
              />
              <span style={{ fontWeight: '400', marginRight: '8px' }}>{item.number}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 