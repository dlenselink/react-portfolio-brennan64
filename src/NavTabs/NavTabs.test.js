import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithWrapper } from '../utils';
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
    const navLinks = getAllByTestId(/nav-link/);
    expect(navLinks.length).toBe(5);
  });

  it('should allow navigation to all pages without error', () => {
    const { getByTestId } = render(<App />);
    const navLinks = [
      ['nav-link-about', '/about'],
      ['nav-link-portfolio', '/portfolio'],
      ['nav-link-resume', '/resume'],
      ['nav-link-contact', '/contact'],
      ['nav-link-home', '/home'],
    ];

    navLinks.forEach(([testId, path], idx) => {
      act(() => {
        fireEvent.click(getByTestId(testId));
      });

      expect(mockedNavigate).toHaveBeenCalledTimes(idx + 1);
      expect(mockedNavigate).toHaveBeenLastCalledWith(path);
    });
  });
});
