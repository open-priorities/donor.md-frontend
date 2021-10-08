export const getFirstLetters = (payload: string) => {
  const payloadAsArray = payload.split(' ');
  const charsArray = payloadAsArray.map((item) => item.charAt(0).toLocaleUpperCase());
  return charsArray.join('');
};
