// src/components/AnimatedWords.tsx
import { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

const words = [
  'PUSH',
  'ONYX',
  'MARS',
  'BRIGADE',
  'STUDIO MEGA'
];

function AnimatedText3D({ text, index }: { text: string; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // 부드러운 회전 애니메이션
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      
      // 호버 시 더 빠른 회전
      if (hovered) {
        meshRef.current.rotation.y += 0.02;
      }
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <Center>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={2}
            height={0.5}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.05}
            bevelOffset={0}
            bevelSegments={5}
          >
            {text}
            <meshStandardMaterial
              color={hovered ? "#ff6b6b" : "#ffffff"}
              metalness={0.8}
              roughness={0.2}
              emissive={hovered ? "#ff6b6b" : "#333333"}
              emissiveIntensity={hovered ? 0.3 : 0.1}
            />
          </Text3D>
        </mesh>
      </Center>
    </Float>
  );
}

function Scene() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(i => (i + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 조명 설정 */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
      <pointLight position={[10, -10, -5]} intensity={0.5} color="#4ecdc4" />

      {/* 3D 텍스트 */}
      <AnimatedText3D text={words[currentIndex]} index={currentIndex} />
    </>
  );
}

export default function AnimatedWords() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-black via-gray-900 to-black">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
