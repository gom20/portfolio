// src/App.tsx
import { useEffect, useState } from 'react';
import AnimatedWords from './components/AnimatedWords';
import Menu3D from './components/Menu3D';

const menuItems = [
  'PUSH',
  'ONYX',
  'MARS',
  'BRIGADE',
  'STUDIO MEGA'
];

export default function App() {
  const handleMenuClick = (index: number) => {
    console.log(`Menu item ${index} clicked: ${menuItems[index]}`);
    // 여기에 메뉴 클릭 시 로직을 추가할 수 있습니다
  };

    return (
    <div className="flex h-screen bg-black w-full">
      <Menu3D items={menuItems} onItemClick={handleMenuClick} />
    </div>
  );
}
