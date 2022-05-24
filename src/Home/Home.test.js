import { render } from '@testing-library/react';
import { Home } from '../Home';

describe('<Home />', () => {
  it('should render with all expected assets', () => {
    const { getByTestId, getByText } = render(<Home />);
    expect(getByText(/Brennan M\. Heley/i)).toBeInTheDocument();

    const homeGithubLink = getByTestId('home-github');
    expect(homeGithubLink).toBeInTheDocument();
    expect(homeGithubLink).toHaveAttribute('href', 'https://github.com/brennan64');

    const homeLinkedinLink = getByTestId('home-linkedin');
    expect(homeLinkedinLink).toBeInTheDocument();
    expect(homeLinkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/brennan-heley/');
  });
});
