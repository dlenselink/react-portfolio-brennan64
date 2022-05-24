import { isValidUrl } from './';

describe('utility methods', () => {
  it('should return the correct value when isValidUrl is called', () => {
    // missing url scheme; should return false
    expect(isValidUrl('www.example.com')).toBe(false);

    // valid urls; shoudl return true
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('http://www.example.com')).toBe(true);
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('https://www.example.com')).toBe(true);
  });
});
