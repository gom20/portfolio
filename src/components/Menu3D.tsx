// src/components/Menu3D.tsx
import { useState, useEffect } from 'react';

interface Menu3DProps {
  items: string[];
  onItemClick?: (index: number) => void;
}

function MenuItem3D({ 
  text, 
  index, 
  totalItems,
  isHovered, 
  isSelected,
  isAnySelected,
  onClick,
  onHover,
  onUnhover
}: { 
  text: string; 
  index: number; 
  totalItems: number;
  isHovered: boolean; 
  isSelected: boolean;
  isAnySelected: boolean;
  onClick: () => void;
  onHover: () => void;
  onUnhover: () => void;
}) {
  const [opacity, setOpacity] = useState(0);

  // 초기 나타나는 애니메이션 상태
  const isInitialAppearing = opacity === 0;
  const initialDelay = (totalItems - 1 - index) * 80; // 위에서 아래로 순차적으로

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  // 애니메이션 계산
  let rotationY = -0.6; // 기본 기울기 (라디안) - 오른쪽으로 이동했으므로 반대 방향
  let scale = 1;

  if (isInitialAppearing) {
    rotationY = -1.0; // 초기에는 더 기울어진 상태 (반대 방향)
    scale = 0.8; // 초기에는 작게
  } else if (isSelected) {
    rotationY = 0; // 선택된 메뉴는 정면으로
  } else if (isHovered) {
    rotationY = -0.4; // 호버 시 살짝만 기울어짐 (반대 방향)
  } else {
    // 기본 상태 - 모든 아이템이 동일한 기울기 (반대 방향)
    rotationY = -0.6;
  }

  // 라디안을 도로 변환
  const rotationDegrees = (rotationY * 180) / Math.PI;

  // 사라지는 애니메이션 로직 (참고 코드 방식)
  const shouldDisappear = isAnySelected && !isSelected;
  const disappearDelay = 700; // 선택 후 800ms 대기
  const delay = disappearDelay + (index * 100); // 순차 애니메이션 딜레이

  // 색상 그라데이션 계산 (위로 갈수록 진해짐, 상단 진하기 증가)
  const colorIntensity = Math.floor(((totalItems - 1 - index) / (totalItems - 1)) * 140 + 80); // 80~220 범위로 조정
  const textColor = `rgb(${colorIntensity} ${colorIntensity + 20} ${colorIntensity + 40})`;

  return (
    <div
      className="menu-item"
      style={{
        opacity: shouldDisappear ? 0 : (isInitialAppearing ? 0 : opacity),
        transform: shouldDisappear
          ? 'perspective(1000px) rotateY(90deg) translateX(100px)'
          : `perspective(1000px) rotateX(${isInitialAppearing ? -30 : 0}deg) rotateY(${isInitialAppearing ? -90 : rotationDegrees}deg) scale(${scale}) translateZ(${isInitialAppearing ? '-200px' : '0px'}) translateX(${isInitialAppearing ? '-100px' : '0px'})`,
        transition: shouldDisappear 
          ? 'opacity 600ms ease-out 400ms, transform 1000ms ease-out'
          : isInitialAppearing
          ? 'opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          : isHovered
          ? 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          : 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: shouldDisappear ? `${delay}ms` : isInitialAppearing ? `${initialDelay}ms` : '0ms',
        marginBottom: '-10px',
        margin: '0px',
        padding: '0px',
        lineHeight: '0.9',
        transformOrigin: 'right center',
        color: (isHovered || isSelected) ? 'transparent' : textColor,
        WebkitTextStroke: `1px ${textColor}`,
        fontSize: '9rem',
        fontWeight: '900',
        fontFamily: 'Arial, sans-serif',
        userSelect: 'none',
        cursor: 'pointer'
      }}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onUnhover}
    >
      {text}
    </div>
  );
}

export default function Menu3D({ items, onItemClick }: Menu3DProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    onItemClick?.(index);
  };

  return (
    <div 
      className="w-full h-full flex items-start justify-end"
      style={{
        perspective: '1000px',
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}
    >
      <div 
        className="menu-container"
        style={{
          transformStyle: 'preserve-3d',
          padding: '40px',
          paddingTop: '40px'
        }}
      >
        {items.map((item, index) => (
          <MenuItem3D
            key={item}
            text={item}
            index={index}
            totalItems={items.length}
            isHovered={hoveredIndex === index}
            isSelected={selectedIndex === index}
            isAnySelected={selectedIndex !== null}
            onClick={() => handleItemClick(index)}
            onHover={() => setHoveredIndex(index)}
            onUnhover={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}
