// src/components/Menu3D.tsx
import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface Menu3DProps {
  items: string[];
  onItemClick?: (index: number) => void;
}

function MenuItem3D({ 
  text, 
  index, 
  isHovered, 
  isSelected,
  onClick,
  onHover,
  onUnhover
}: { 
  text: string; 
  index: number; 
  isHovered: boolean; 
  isSelected: boolean;
  onClick: () => void;
  onHover: () => void;
  onUnhover: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [opacity, setOpacity] = useState(0);
  const [targetOpacity, setTargetOpacity] = useState(0);
  const [targetRotationY, setTargetRotationY] = useState(0); // 처음에는 기울어지지 않음

  // 페이드인 효과
  useEffect(() => {
    const timer = setTimeout(() => {
      setTargetOpacity(1);
      setTargetRotationY(0.6); // 모든 아이템이 동일한 기본 기울기
    }, index * 100); // 각 아이템마다 100ms씩 지연 (더 빠르게)

    return () => clearTimeout(timer);
  }, [index]);

                               useFrame((state) => {
          if (meshRef.current) {
            // 선택, 호버, 기본 기울기 조합
            let finalRotationY = 0.6; // 모든 아이템의 기본 기울기
            if (isSelected) {
              finalRotationY = 0; // 선택된 메뉴는 정면으로
            } else if (isHovered) {
              finalRotationY = 0.4; // 호버 시 살짝만 기울어짐 (0.6 -> 0.4)
            }
            
            const targetPositionZ = isHovered ? 0.5 : 0; // 살짝 앞으로
            const targetPositionX = isHovered ? 0.3 : 0; // 호버 시 오른쪽으로 살짝 이동
            
            meshRef.current.rotation.y += (finalRotationY - meshRef.current.rotation.y) * 0.1;
            meshRef.current.position.z += (targetPositionZ - meshRef.current.position.z) * 0.1;
            meshRef.current.position.x += (targetPositionX - meshRef.current.position.x) * 0.1;
          }

          // 부드러운 페이드인 애니메이션
          setOpacity(prev => prev + (targetOpacity - prev) * 0.05);
        });

                 return (
      <group position={[-0.5, 0, 0]}>
        <mesh
          ref={meshRef}
          onClick={onClick}
          onPointerOver={onHover}
          onPointerOut={onUnhover}
        >
          <Text3D
            font="/fonts/Anton_Regular.typeface.json"
            size={1.5}
            height={0.1}
            curveSegments={12}
            bevelEnabled={false}
          >
            {text}
            <meshBasicMaterial
              color={isHovered ? "#ff6b6b" : "#ffffff"}
              transparent={true}
              opacity={opacity}
            />
          </Text3D>
        </mesh>
      </group>
  );
}

function MenuScene({ items, onItemClick }: Menu3DProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    onItemClick?.(index);
  };

  return (
    <>
      

             {/* 메뉴 아이템들 */}
       {items.map((item, index) => (
         <group key={item} position={[-12, 3 - index * 2, 0]}>
          <MenuItem3D
            text={item}
            index={index}
            isHovered={hoveredIndex === index}
            isSelected={selectedIndex === index}
            onClick={() => handleItemClick(index)}
            onHover={() => setHoveredIndex(index)}
            onUnhover={() => setHoveredIndex(null)}
          />
        </group>
      ))}
    </>
  );
}

export default function Menu3D({ items, onItemClick }: Menu3DProps) {
  return (
    <div className="relative h-full w-full bg-black">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 35 }}
        gl={{ antialias: true }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <MenuScene items={items} onItemClick={onItemClick} />
      </Canvas>
    </div>
  );
} 