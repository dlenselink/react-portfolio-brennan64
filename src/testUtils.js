import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithWrapper = (children, history = createMemoryHistory()) =>
  render(<Router history={history}>{children}</Router>);

export { renderWithWrapper };
