// src/components/YearPage.tsx
import { useState } from 'react';

interface YearPageProps {
  year: string;
  onBack: () => void;
}

export default function YearPage({ year, onBack }: YearPageProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background: '#f3f4f6',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="text-center">
        <h1 
          className="text-8xl font-bold mb-8"
          style={{
            color: '#000000',
            WebkitTextStroke: '1px #000000',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          {year}
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          {year}년의 포트폴리오
        </p>
        <div className="text-lg text-gray-500">
          <p>여기에 {year}년의 프로젝트들이 표시됩니다.</p>
          <p>곧 업데이트 예정입니다.</p>
        </div>
      </div>
      
      {/* X 버튼 */}
      <button
        onClick={handleBack}
        className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-4xl font-bold text-black hover:text-gray-600 transition-colors"
        style={{
          background: 'transparent',
          border: '2px solid #000000',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
      >
        ×
      </button>
    </div>
  );
} 