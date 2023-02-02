function lastIndex(str: string, char: string): number | null {
  const i = str.lastIndexOf(char);
  return (i !== -1) ? i : null;
}
