import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithWrapper } from '../testUtils';
import { App } from '../App';
import { NavTabs } from './NavTabs';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('<NavTabs />', () => {
  it('should correctly render all nav links', () => {
    const { getAllByTestId } = renderWithWrapper(<NavTabs />);
    const navLinks = getAllByTestId(/nav-/i);
    expect(navLinks.length).toBe(5);
  });

  it('should navigate to /about', () => {
    const { getByTestId } = render(<App />);
    const navLinks = [
      ['nav-about', '/about'],
      ['nav-portfolio', '/portfolio'],
      ['nav-resume', '/resume'],
      ['nav-contact', '/contact'],
      ['nav-home', '/home'],
    ];

    navLinks.forEach(([testId, path], idx) => {
      act(() => {
        fireEvent.click(getByTestId(testId));
      });

      expect(mockedNavigate).toHaveBeenCalledTimes(idx + 1);
      expect(mockedNavigate).toHaveBeenLastCalledWith(path);
    });

    fireEvent.click(getByTestId('nav-about'));
  });
});
