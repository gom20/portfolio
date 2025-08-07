// 공통 애니메이션 Cubic Bezier 함수들
export const EASING = {
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  snappy: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
} as const;

// 공통 애니메이션 지속시간
export const DURATION = {
  normal: '0.5s',
  slow: '0.8s',
} as const;

// 자주 사용되는 transition 조합들
export const TRANSITIONS = {
  textStroke: `color ${DURATION.normal} ${EASING.smooth}, -webkit-text-stroke ${DURATION.normal} ${EASING.smooth}`,
} as const;