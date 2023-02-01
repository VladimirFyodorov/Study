const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

function getEvenNumbers() {
  return numbers.filter(n => n % 2 === 0);
}
