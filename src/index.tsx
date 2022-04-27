import { useEffect, useState } from 'react';

type ArticleProgress = {
  percentage: number;
};

function getCurrentPercentage(): number {
  const { offsetHeight, clientHeight } = document.documentElement;

  return Math.floor((window.scrollY / (offsetHeight - clientHeight)) * 100);
}

export function useArticleProgress(): ArticleProgress {
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
