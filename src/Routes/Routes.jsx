import { Navigate, useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { About } from '../About';
import { Portfolio } from '../Portfolio';
import { Resume } from '../Resume';
import { Contact } from '../Contact';

export const Routes = () => {
  // fall back to homepage
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
};
