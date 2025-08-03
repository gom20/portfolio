import React from "react";

interface AboutContentProps {
  isActive: boolean;
}

export default function AboutContent({ isActive }: AboutContentProps) {
  return (
    <div
      className="fixed inset-0 z-45 flex items-center justify-center"
      style={{
        opacity: isActive ? 1 : 0,
        visibility: isActive ? "visible" : "hidden",
        transition: "opacity 0.5s ease, visibility 0.5s ease",
      }}
    >
      <div
        className="max-w-4xl mx-auto px-8 text-white"
        style={{
          transform: isActive ? "translateY(0)" : "translateY(20px)",
          transition: "transform 0.5s ease 0.2s",
        }}
      >
        <h1 className="text-6xl font-bold mb-8">About</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              안녕하세요! 저는 열정적인 Full-Stack Developer입니다. 
              사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              새로운 기술을 배우는 것에 대한 열정이 있으며, 
              항상 최신 트렌드와 베스트 프랙티스를 따라가려고 노력합니다.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-xl font-medium">Senior Developer</h3>
                <p className="text-gray-300">Tech Company • 2022 - Present</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-xl font-medium">Full-Stack Developer</h3>
                <p className="text-gray-300">Startup • 2020 - 2022</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-xl font-medium">Frontend Developer</h3>
                <p className="text-gray-300">Agency • 2018 - 2020</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Philosophy</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            "코드는 사람을 위한 것이며, 기술은 사람을 돕기 위해 존재한다"는 믿음으로 
            매일 더 나은 개발자가 되기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
} 