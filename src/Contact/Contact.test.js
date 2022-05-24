import { fireEvent, render } from '@testing-library/react';
import { Contact, SUCCESS_MESSAGE, FAILURE_MESSAGE } from './Contact';

describe('<Contact />', () => {
  it('should not accept an invalid form input', () => {
    const { getByTestId, getByText } = render(<Contact />);
    fireEvent.click(getByTestId('contact-submit'));
    expect(getByText(FAILURE_MESSAGE)).toBeInTheDocument();
  });

  it('should accept a valid form input', () => {
    const { getByTestId, getByText } = render(<Contact />);
    fireEvent.change(getByTestId('contact-name'), { target: { value: 'Test Name' } });
    fireEvent.change(getByTestId('contact-email'), { target: { value: 'Test Email' } });
    fireEvent.change(getByTestId('contact-message'), { target: { value: 'Test Message' } });
    fireEvent.click(getByTestId('contact-submit'));
    expect(getByText(SUCCESS_MESSAGE)).toBeInTheDocument();
  });
});
