import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export const renderWithWrapper = (children, history = createMemoryHistory()) =>
  render(<Router history={history}>{children}</Router>);
