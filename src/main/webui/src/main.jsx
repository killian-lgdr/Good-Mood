import {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <HashRouter>
      <Suspense>
        <App />
      </Suspense>
    </HashRouter>
  </HelmetProvider>
);
