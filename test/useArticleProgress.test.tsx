import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useArticleProgress } from '../src';

const TestApp = () => {
  const { percentage } = useArticleProgress();
  return <div>{percentage}</div>;
};

describe('useArticleProgress()', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
