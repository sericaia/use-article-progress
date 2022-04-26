import * as React from 'react';
import { useArticleProgress } from '../../../.';
import "./styles.css";

export function ArticleProgress() {
  const { percentage } = useArticleProgress();

  return (
    <div className="progressWrapper">
      {percentage}%
      <span
        className="progress"
        style={{
          width: `${percentage}%`
        }}
      />
    </div>
  );
}
