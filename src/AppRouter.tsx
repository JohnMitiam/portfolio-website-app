import { createHashRouter } from 'react-router-dom';

import App from './App';
import { About } from './Pages/AboutPage';
import { Contact } from './Pages/ContactPage';
import { Home } from './Pages/HomePage/Home';
import { Resume } from './Pages/ResumePage';

export const AppRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact-me',
        element: <Contact />,
      },
    ],
  },
]);
