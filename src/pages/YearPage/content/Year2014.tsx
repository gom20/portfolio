interface Year2014Props {
  // 필요한 props가 있다면 여기에 추가
}

export default function Year2014({}: Year2014Props) {
  return (
    <div className="text-lg text-gray-500 mb-12 ml-2 md:ml-12 year-page-content">
      <div className="text-left py-8 rounded-lg">
        <div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
              삼성전자
              <br />
              Smart TV Application 개발
            </h2>
            <p className="text-gray-600 mb-2">2013.05 - 2014.11 (1년 6개월)</p>
            <p className="text-gray-700">
              Facebook, Twitter 앱 개발 및 Backbone.js 프레임워크 적용
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              프로젝트 개요
            </h3>
            <p className="text-gray-700 leading-relaxed">
              삼성전자 Smart TV Facebook, Twitter 앱 담당자로 근무하였습니다.
              하이브리드 웹앱으로 미디어(사진, 동영상) 플레이는 TV 플랫폼
              라이브러리가 사용되었고 이 외의 화면은 표준 웹 기술로
              구현되었습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              주요 업무
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>양산 테스트 Defect 대응</li>
              <li>고객 VOC 대응</li>
              <li>로직 변경 및 신규 로직 추가</li>
              <li>Backbone.js 프레임워크를 적용하여 MVC 패턴으로 재개발</li>
              <li>대우증권 App GUI 리뉴얼</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              사용 기술
            </h3>
            <p className="text-gray-700">
              JavaScript, HTML, CSS, jQuery, BackboneJS
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              개발 도구
            </h3>
            <p className="text-gray-700">SublimeText, Redmine</p>
          </div>
        </div>
      </div>
    </div>
  );
}
