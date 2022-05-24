import { render } from '@testing-library/react';
import { Home } from '../Home';

describe('<Home />', () => {
  it('should render with all expected assets', () => {
    const { getByTestId, getByText } = render(<Home />);
    expect(getByText(/Brennan M\. Heley/i)).toBeInTheDocument();

    const githubLink = getByTestId('home-github');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/brennan64');

    const linkedinLink = getByTestId('home-linkedin');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/brennan-heley/');
  });
});
