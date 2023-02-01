function filterAnagrams(target: string, words: string[]): string[] {
  const sortWord = (word: string) => word.split('').sort().join('');
  const targetS = sortWord(target);
  return words.filter((word) => sortWord(word) === targetS);
}
