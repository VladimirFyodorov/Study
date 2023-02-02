function uniq(array: (number | string)[]): (number | string)[] {
  const res: (number | string)[] = [];
  array.forEach((n, index) => {
    if (!res.includes(n)) res.push(n); 
  });
  return res;
}
