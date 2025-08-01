import { useState, useEffect } from 'react';

export function useNameAnimation() {
  const [nameAnimation, setNameAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNameAnimation(true);
    }, 300); // 0.3초 후 애니메이션 시작
    
    return () => clearTimeout(timer);
  }, []);

  return nameAnimation;
} 