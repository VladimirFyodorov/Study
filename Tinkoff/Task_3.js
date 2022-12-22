import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const numToBits = (n) => {
  return (n >>> 0).toString(2)
}

const bitsToNum = (bits) => {
  const numsArr = bits.split('').map((a, index, bits) => {
    const order = bits.length - index - 1;
    return +a*(2**order);
  })

  const sum = numsArr.reduce((a, acc) => acc + a, 0);

  return sum;
}



const calcExclOr = (a, b) => {
  const bits1 = numToBits(a);
  const bits2 = numToBits(b);
  const maxLen = Math.max(bits1.length, bits2.length);
  const b1 = '0'.repeat(maxLen - bits1.length) + bits1;
  const b2 = '0'.repeat(maxLen - bits2.length) + bits2;
  const bitsOr = b2.split('').map((b , index) => {
    const a = b1.split('')[index];
    if (a === '0' && b === '0') return '0';
    if (a === '1' && b === '1') return '0';
    return '1';
  }).join('');
  return bitsToNum(bitsOr);
}


const calcMaxExcOr = (arr) => {
  const pairs = arr.flatMap(
    (v, i) => arr.slice(i+1).map( w => [v, w])
  );

  const max = pairs.reduce((acc, [a, b]) => {
    const exclOr = calcExclOr(a, b);
    return (exclOr > acc) ? exclOr : acc;
  }, 0);

  return max;
}

const makeGame = (arr) => {
  console.log(0);
  for (let i = 2; i <= arr.length; i++) {
    const subArr = arr.slice(0, i);
    const uniqueArr = [...new Set(subArr)];
    console.log(calcMaxExcOr(uniqueArr));
  }
}

const input = (n, arr) => {
  rl.question('', (a) => {
    arr.push(+a);
    if (n > 1) return input(n - 1, arr);

    makeGame(arr);
    rl.close();
  });
}


rl.question('', (n) => {
  const arr = [];
  input(+n, arr);
});
