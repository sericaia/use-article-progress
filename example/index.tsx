import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ArticleProgress } from './src/ArticleProgress/ArticleProgress';
import { ArticleContent } from './src/ArticleContent/ArticleContent';

const App = () => {
  return (
    <div>
      <ArticleProgress />
      <ArticleContent />
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(<App />);
