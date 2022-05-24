import './NavTabs.scss';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export const NavTabs = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => () => navigate(path);

  return (
    <Nav className="justify-content-center">
      <Nav.Item onClick={handleNavigate('/home')} data-testid="nav-link-home">
        <Nav.Link>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={handleNavigate('/about')} data-testid="nav-link-about">
        <Nav.Link>About</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={handleNavigate('/portfolio')} data-testid="nav-link-portfolio">
        <Nav.Link>Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={handleNavigate('/resume')} data-testid="nav-link-resume">
        <Nav.Link>Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={handleNavigate('/contact')} data-testid="nav-link-contact">
        <Nav.Link>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
