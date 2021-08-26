import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './i18next';

import App from './App';
import Loader from './Components/Loader/Loader';

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
