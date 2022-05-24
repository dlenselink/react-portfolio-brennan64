export const isValidUrl = (url) => {
  let result;

  try {
    result = new URL(url);
  } catch {
    return false;
  }

  return result.protocol === 'http:' || result.protocol === 'https:';
};
