// n = 8
// s = 'Tink Bank'
// b = 'YBYBYBYB'

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkWord = (colorWord) => {
  const colors = colorWord.split('');
  let res = true;
  colors.forEach((color, index, colors) => {
    if (index !== 0 && color ===  colors[index - 1]) {
      res = false;
    }
  })
  return res;
}

const checkBeauty = (n, s, b) => {
  const letters = s.split('');
  const colors = b.split('');
  letters.forEach((l, index) => {
    if (l === ' ') {
      colors.splice(index, 0, l);
    }
  })
  const colorWords = colors.join('').split(' ');
  return colorWords.filter((w) => !checkWord(w)).length;
}

rl.question('', (n) => {
  rl.question('', (s) => {
    rl.question('', (b) => {
      console.log(checkBeauty(+n, s, b));
      rl.close();
    });
  });
});

// console.log(checkBeauty(7, 'Tinkoff', 'BYBYBYB'));
// console.log(checkBeauty(27, 'Algorithms and Data Structures', 'BBBBBBBBBBBYBYYYYBBBBBBBBBB'));
