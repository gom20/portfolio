import React from 'react';

interface Year2021Props {
  // 필요한 props가 있다면 여기에 추가
}

export default function Year2021({}: Year2021Props) {
  return (
    <div className="text-lg text-gray-500 mb-12">
      <div className="text-left bg-white py-8 rounded-lg shadow-sm">
        <div className="space-y-6 px-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2021년 프로젝트
            </h2>
            <p className="text-gray-600 mb-2">업데이트 예정</p>
            <p className="text-gray-700">
              2021년에 진행한 프로젝트들의 상세 내용이 곧 업데이트될 예정입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
