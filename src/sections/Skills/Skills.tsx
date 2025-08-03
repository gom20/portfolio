import React from "react";

interface SkillsContentProps {
  isActive: boolean;
}

export default function SkillsContent({ isActive }: SkillsContentProps) {
  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 75 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "Jest", level: 80 },
    ],
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

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
        className="max-w-6xl mx-auto px-8 text-white"
        style={{
          transform: isActive ? "translateY(0)" : "translateY(20px)",
          transition: "transform 0.5s ease 0.2s",
        }}
      >
        <h1 className="text-6xl font-bold mb-8">Skills</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6 border-b border-white pb-2">
              Frontend
            </h2>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <SkillBar name={skill.name} level={skill.level} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-6 border-b border-white pb-2">
              Backend
            </h2>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <SkillBar name={skill.name} level={skill.level} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-6 border-b border-white pb-2">
              Tools & Others
            </h2>
            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <SkillBar name={skill.name} level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Learning Journey</h2>
          <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
            기술은 끊임없이 발전하고 있습니다. 저는 항상 새로운 기술을 배우고 
            기존 지식을 업데이트하며, 더 나은 개발자가 되기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
} 