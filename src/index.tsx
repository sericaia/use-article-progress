import { useEffect, useState } from 'react';

function getCurrentPercentage() {
  const { offsetHeight, clientHeight } = document.documentElement;

  return Math.floor((window.scrollY / (offsetHeight - clientHeight)) * 100);
}

export function useArticleProgress() {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    function handleCalc() {
      const current = getCurrentPercentage();

      if (current !== percentage) {
        setPercentage(current);
      }
    }

    window.addEventListener('scroll', handleCalc);

    return () => {
      window.removeEventListener('scroll', handleCalc);
    };
  }, [percentage]);

  return {
    percentage,
  };
}
