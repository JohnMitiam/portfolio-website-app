import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './AppRouter';
import './index.css';

import { store } from '@store';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';

// import App from './App';
// import './index.css';

// const container = document.getElementById('root');
// // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// const root = createRoot(container!);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
