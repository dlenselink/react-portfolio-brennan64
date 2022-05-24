import { render } from '@testing-library/react';
import { Resume } from '../Resume';

describe('<Resume />', () => {
  it('should render with all expected assets', () => {
    const { getByTestId, getByAltText } = render(<Resume />);

    expect(getByAltText('resume preview')).toBeInTheDocument();

    const resumeGithubLink = getByTestId('resume-github');
    expect(resumeGithubLink).toBeInTheDocument();
    expect(resumeGithubLink).toHaveAttribute('href', 'https://github.com/brennan64');

    const resumeLinkedinLink = getByTestId('resume-linkedin');
    expect(resumeLinkedinLink).toBeInTheDocument();
    expect(resumeLinkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/brennan-heley/'
    );
  });
});
