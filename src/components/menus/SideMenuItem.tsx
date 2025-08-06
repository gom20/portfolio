// src/components/Menu3D.tsx
import { useState, useEffect } from 'react';
import { useBreakpoint } from '../../hooks/useResponsive';

interface MenuItemProps {
  items: string[];
  onItemClick?: (index: number) => void;
}

function MenuItem({
  text,
  index,
  totalItems,
  isHovered,
  isSelected,
  isAnySelected,
  onClick,
  onHover,
  onUnhover,
  responsiveStyles,
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
  responsiveStyles: { fontSize: string; padding: string; strokeWidth: string };
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
  const disappearDelay = 700; // 선택 후 700ms 대기
  const delay = disappearDelay + index * 100; // 순차 애니메이션 딜레이

  // 색상 설정 - 2013으로 갈수록 투명도 감소
  const textOpacity = Math.max(0.3, 1 - (index / (totalItems - 1)) * 0.7); // 1.0 ~ 0.3 범위
  const textColor = `rgba(226, 232, 240, ${textOpacity})`;

  return (
    <div
      className="menu-item"
      style={{
        opacity: shouldDisappear ? 0 : isInitialAppearing ? 0 : opacity,
        transform: shouldDisappear
          ? 'perspective(1000px) rotateY(90deg) translateX(100px)'
          : `perspective(1000px) rotateX(${
              isInitialAppearing ? -30 : 0
            }deg) rotateY(${
              isInitialAppearing ? -90 : rotationDegrees
            }deg) scale(${scale}) translateZ(${
              isInitialAppearing ? '-200px' : '0px'
            }) translateX(${isInitialAppearing ? '-100px' : '0px'})`,
        transition: shouldDisappear
          ? 'opacity 600ms ease-out 400ms, transform 1000ms ease-out'
          : isInitialAppearing
          ? 'opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          : isHovered
          ? 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          : 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: shouldDisappear
          ? `${delay}ms`
          : isInitialAppearing
          ? `${initialDelay}ms`
          : '0ms',
        marginBottom: '-10px',
        margin: '0px',
        padding: '0px',
        lineHeight: '0.9',
        transformOrigin: 'right center',
        color: isHovered || isSelected ? 'transparent' : textColor,
        WebkitTextStroke: `${responsiveStyles.strokeWidth} rgba(226, 232, 240, ${textOpacity})`,
        fontSize: responsiveStyles.fontSize,
        fontWeight: '900',
        fontFamily: 'Arial, sans-serif',
        userSelect: 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onUnhover}
    >
      {text}
    </div>
  );
}

export default function Menu3D({ items, onItemClick }: MenuItemProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 리팩토링된 반응형 훅 사용
  const breakpoint = useBreakpoint();

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    onItemClick?.(index);
  };

  // 리팩토링된 반응형 스타일 계산
  const responsiveStyles = {
    mobile: { fontSize: '6rem', padding: '8px', strokeWidth: '1px' },
    tablet: { fontSize: '7rem', padding: '15px', strokeWidth: '1.2px' },
    desktop: { fontSize: '9rem', padding: '20px', strokeWidth: '1.5px' },
  }[breakpoint];

  return (
    <div
      className="w-full h-full flex items-start justify-end"
      style={{
        perspective: '1000px',
        paddingTop: responsiveStyles.padding,
        paddingLeft: responsiveStyles.padding,
        paddingRight: responsiveStyles.padding,
      }}
    >
      <div
        className="menu-container"
        style={{
          transformStyle: 'preserve-3d',
          padding: responsiveStyles.padding,
          paddingTop: responsiveStyles.padding,
        }}
      >
        {items.map((item, index) => (
          <MenuItem
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
            responsiveStyles={responsiveStyles}
          />
        ))}
      </div>
    </div>
  );
}
