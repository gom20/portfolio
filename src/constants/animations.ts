// 공통 애니메이션 Cubic Bezier 함수들
export const EASING = {
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  snappy: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  dramatic: 'cubic-bezier(0.175, 0.885, 0.1, 1.0)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

// 공통 애니메이션 지속시간
export const DURATION = {
  fast: '0.2s',
  normal: '0.5s',
  slow: '0.8s',
  slower: '1.2s',
  slowest: '1.5s',
} as const;

// 공통 지연시간
export const DELAY = {
  none: '0ms',
  short: '100ms',
  medium: '300ms',
  long: '600ms',
  longer: '800ms',
} as const;

// 자주 사용되는 transition 조합들
export const TRANSITIONS = {
  fadeIn: `opacity ${DURATION.slow} ${EASING.smooth}`,
  fadeOut: `opacity ${DURATION.normal} ${EASING.smooth}`,
  slideUp: `transform ${DURATION.slow} ${EASING.smooth}`,
  slideDown: `transform ${DURATION.slow} ${EASING.smooth}`,
  scaleUp: `transform ${DURATION.normal} ${EASING.bounce}`,
  all: `all ${DURATION.normal} ${EASING.smooth}`,
  smoothAll: `all ${DURATION.slow} ${EASING.smooth}`,
  textStroke: `color ${DURATION.normal} ${EASING.smooth}, -webkit-text-stroke ${DURATION.normal} ${EASING.smooth}`,
} as const;

// MenuItem 관련 애니메이션 설정
export const MENU_ANIMATION = {
  initialDelay: (totalItems: number, index: number) => (totalItems - 1 - index) * 80,
  disappearDelay: 700,
  selectedFadeDelay: 300,
  sequentialDelay: (index: number) => index * 100,
} as const;

// YearPage 관련 애니메이션 설정
export const YEAR_PAGE_ANIMATION = {
  visibilityDelay: 100,
  yearFadeDelay: 600,
  contentFadeDelay: 1200,
} as const;

// 오버레이 관련 애니메이션 설정
export const OVERLAY_ANIMATION = {
  fadeInDelay: 100,
  strokeDelay: 400,
} as const;