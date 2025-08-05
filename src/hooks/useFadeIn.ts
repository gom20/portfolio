import { useState, useEffect } from 'react';

interface UseFadeInOptions {
  delay?: number;
  duration?: number;
  easing?: string;
  dependencies?: any[];
}

export function useFadeIn(options: UseFadeInOptions = {}) {
  const {
    delay = 100,
    duration = 800,
    easing = 'ease-out',
    dependencies = [],
  } = options;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms ${easing} ${delay}ms`,
  };

  const slideUpStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
    transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
  };

  const slideDownStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
    transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
  };

  const scaleUpStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
    transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
  };

  return {
    isVisible,
    setIsVisible,
    fadeInStyle,
    slideUpStyle,
    slideDownStyle,
    scaleUpStyle,
  };
}

// 특정 용도별 헬퍼 훅들
export function useMenuItemFadeIn(index: number, totalItems: number) {
  const delay = (totalItems - 1 - index) * 80;
  return useFadeIn({ delay });
}

export function useOverlayFadeIn() {
  return useFadeIn({ delay: 100 });
}

export function useYearPageFadeIn() {
  return useFadeIn({ delay: 100 });
}
