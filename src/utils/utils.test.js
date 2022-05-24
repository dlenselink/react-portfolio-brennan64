import { isValidUrl } from './';

describe('The utility method', () => {
  it('"isValidUrl" should return the correct value when called with both valid and invalid args', () => {
    // missing url scheme; should return false
    expect(isValidUrl('www.example.com')).toBe(false);

    // valid urls; all should return true
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('http://www.example.com')).toBe(true);
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('https://www.example.com')).toBe(true);
  });
});
