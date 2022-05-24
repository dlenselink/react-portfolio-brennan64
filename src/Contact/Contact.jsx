import { useState } from 'react';
import './Contact.scss';

export const SUCCESS_MESSAGE = 'Thank you for reaching out! We will be in touch.';
export const FAILURE_MESSAGE = 'Please enter a name, email, and message.';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleInputChange =
    (type) =>
    ({ target: { value } }) => {
      if (type === 'name') return setName(value);
      if (type === 'email') return setEmail(value);
      return setMessage(value);
    };

  const handleFormSubmit = () => {
    if (name && email && message) {
      setResult(SUCCESS_MESSAGE);
      resetForm();
    } else {
      setResult(FAILURE_MESSAGE);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Page</h1>
      <div className="container inputs">
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange('name')}
              data-testid="contact-name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange('email')}
              data-testid="contact-email"
            />
          </label>
          <label>
            Message:
            <input
              type="text"
              name="message"
              value={message}
              onChange={handleInputChange('message')}
              data-testid="contact-message"
            />
          </label>
          <button
            type="button"
            name="submitButton"
            className="btn-success btn-lg"
            data-testid="contact-submit"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="submission-result">{result}</div>
    </div>
  );
};
