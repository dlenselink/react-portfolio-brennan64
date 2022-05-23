import { Navigate, useRoutes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { About } from '../About/About';
import { Portfolio } from '../Portfolio';
import { Resume } from '../Resume';
import { Contact } from '../Contact/Contact';

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
      path: '/portfolio',
      element: <Portfolio />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
};
