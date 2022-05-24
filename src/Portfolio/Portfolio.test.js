import { render } from '@testing-library/react';
import { Portfolio } from '../Portfolio';
import { isValidUrl } from '../utils';

describe('<Portfolio />', () => {
  it('should render with all expected assets', () => {
    const { getAllByTestId } = render(<Portfolio />);
    const portfolioLinks = getAllByTestId(/portfolio-link/i);
    expect(portfolioLinks.length).toBe(6);

    portfolioLinks.forEach((link) => {
      // link should have a valid href
      const href = link.getAttribute('href');
      expect(isValidUrl(href)).toBe(true);

      // link should be present
      const linkImage = link.querySelector('img');
      expect(linkImage).toBeInTheDocument();

      // const linkUrl = linkImage.getAttribute('href');
      // expect(isValidUrl(linkUrl)).toBe(true);
    });
  });
});
