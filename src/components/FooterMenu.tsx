import { useState } from 'react';

interface FooterMenuProps {
  name?: string;
}

export default function FooterMenu({ name = "Your Name" }: FooterMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const menuItems = [
    { id: 'about', label: 'about' },
    { id: 'journal', label: 'journal' },
    { id: 'twitter', label: 'twitter' },
    { id: 'instagram', label: 'instagram' },
    { id: 'linkedin', label: 'linkedin' }
  ];

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  const getContent = (itemId: string) => {
    switch (itemId) {
      case 'about':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              안녕하세요! 저는 웹 개발자입니다. 사용자 경험과 인터랙티브한 웹 애플리케이션 개발에 열정을 가지고 있습니다.
            </p>
          </div>
        );
      case 'journal':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Journal</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="text-xl font-semibold">최신 프로젝트</h3>
                <p className="text-gray-600">2024년 3월 - 새로운 포트폴리오 사이트 개발</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="text-xl font-semibold">기술 스택</h3>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
              </div>
            </div>
          </div>
        );
      case 'twitter':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Twitter</h2>
            <p className="text-lg text-gray-700">
              최신 업데이트와 생각을 공유합니다.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 underline">@yourname</a>
          </div>
        );
      case 'instagram':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Instagram</h2>
            <p className="text-lg text-gray-700">
              일상과 작업 과정을 담은 사진들을 공유합니다.
            </p>
            <a href="#" className="text-pink-500 hover:text-pink-700 underline">@yourname</a>
          </div>
        );
      case 'linkedin':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">LinkedIn</h2>
            <p className="text-lg text-gray-700">
              전문적인 경력과 프로젝트를 확인하세요.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">linkedin.com/in/yourname</a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* 하단 메뉴바 */}
      <div className={`fixed left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 transition-all duration-1000 ease-in-out ${
        isOpen ? 'top-0' : 'bottom-0'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 왼쪽: 이름 */}
            <div className="text-lg font-semibold text-gray-900">
              {name}
            </div>

            {/* 오른쪽: 메뉴 아이템들 */}
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    hoveredItem === item.id 
                      ? 'text-black' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 전체 화면 오버레이 레이어 */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-white/90 backdrop-blur-sm transition-opacity duration-500 ease-in-out">
          <div className="h-full flex flex-col">
            {/* 헤더 영역 */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900">
                {selectedItem && menuItems.find(item => item.id === selectedItem)?.label}
              </h1>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* 컨텐츠 영역 */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-4xl mx-auto">
                {selectedItem && getContent(selectedItem)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 