import { useState, useEffect } from 'react';

export type BreakpointType = 'mobile' | 'tablet' | 'desktop';

export interface ResponsiveConfig {
  mobile: any;
  tablet: any;
  desktop: any;
}

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

export function useBreakpoint(): BreakpointType {
  const windowWidth = useWindowWidth();

  if (windowWidth < 768) return 'mobile';
  if (windowWidth < 1024) return 'tablet';
  return 'desktop';
}

export function useResponsiveValue<T>(config: ResponsiveConfig): T {
  const breakpoint = useBreakpoint();
  return config[breakpoint];
}

// 자주 사용되는 반응형 값들을 위한 헬퍼 함수들
export function useResponsivePadding() {
  return useResponsiveValue({
    mobile: '16px',
    tablet: '32px',
    desktop: '65px',
  });
}

export function useResponsiveFontSize(
  small: string,
  medium: string,
  large: string
) {
  return useResponsiveValue({
    mobile: small,
    tablet: medium,
    desktop: large,
  });
}

export function useIsMobile() {
  const breakpoint = useBreakpoint();
  return breakpoint === 'mobile';
}

export function useIsTablet() {
  const breakpoint = useBreakpoint();
  return breakpoint === 'tablet';
}

export function useIsDesktop() {
  const breakpoint = useBreakpoint();
  return breakpoint === 'desktop';
}
