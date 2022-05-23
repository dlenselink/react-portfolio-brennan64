import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../Routes';
import { NavTabs } from '../NavTabs';

export const App = () => (
  <Router>
    <>
      <NavTabs />
      <Routes />
    </>
  </Router>
);
