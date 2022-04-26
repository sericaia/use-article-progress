import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { useArticleProgress } from '../src';

const TestApp = () => {
  const { percentage } = useArticleProgress();
  return <div>{percentage}</div>;
};

describe('useArticleProgress()', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    const root = ReactDOMClient.createRoot(div);
    root.render(<TestApp />);
    root.unmount();
  });
});
