import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import BigApp from './app';

const root = createRoot(document.getElementById('root'));

// Entry point
root.render(
  <StrictMode>
    <BigApp />
  </StrictMode>,
);

const devMode = process.env.NODE_ENV === 'development';

// Code for Webpack to allow changes acception through hot
if (devMode && module && module.hot) {
  module.hot.accept();
}
