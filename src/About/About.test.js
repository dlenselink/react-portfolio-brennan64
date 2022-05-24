import { render } from '@testing-library/react';
import { About } from './About';

describe('<About />', () => {
  it('should correctly render with all expected assets', () => {
    const { getByAltText, getByTestId } = render(<About />);
    expect(getByTestId('about-text')).toBeInTheDocument();
    expect(getByAltText('Happy couple')).toBeInTheDocument();
    expect(getByAltText('Eleanor the dog')).toBeInTheDocument();
    expect(getByAltText('Gordon the dog')).toBeInTheDocument();
  });
});
