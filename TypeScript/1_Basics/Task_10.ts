function getParams(text: string): any {
  const entries = text.split('&').map((str) => str.split('='));
  return Object.fromEntries(entries);
};
