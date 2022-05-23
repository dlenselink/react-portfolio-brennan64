import './NavTabs.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Nav from 'react-bootstrap/Nav';

export const NavTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path) => () => {
    navigate(path || '/');
  };

  console.log(location);

  return (
    <Nav className="justify-content-center">
      <Nav.Item
        onClick={handleNavigate('/home')}
        className={clsx({
          'nav-item': true,
          active: location.pathname === '/home',
        })}
      >
        <Nav.Link>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item
        onClick={handleNavigate('/about')}
        className={clsx({
          'nav-item': true,
          active: location.pathname === '/about',
        })}
      >
        <Nav.Link>About</Nav.Link>
      </Nav.Item>
      <Nav.Item
        onClick={handleNavigate('/portfolio')}
        className={clsx({
          'nav-item': true,
          active: location.pathname === '/portfolio',
        })}
      >
        <Nav.Link>Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item
        onClick={handleNavigate('/resume')}
        className={clsx({
          'nav-item': true,
          active: location.pathname === '/resume',
        })}
      >
        <Nav.Link>Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item
        onClick={handleNavigate('/contact')}
        className={clsx({
          'nav-item': true,
          active: location.pathname === '/contact',
        })}
      >
        <Nav.Link>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
