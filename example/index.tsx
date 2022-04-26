import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Thing } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(<App />);
