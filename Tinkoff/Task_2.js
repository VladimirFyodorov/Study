import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const calcLCM = (n1, n2) => {
  const lar = Math.max(n1, n2);
  const small = Math.min(n1, n2);
  
  let i = lar;
  while(i % small !== 0){
    i += lar;
  }
  
  return i;
}

const getAB = (n) => {
  const abList = Array.from({length: n - 1}, (_, i) => [i + 1, n - i - 1]);
  const lcmList = abList.map(ab => calcLCM(...ab));
  const minLCM = Math.min(...lcmList);
  const lcmIndex = lcmList.findIndex(lcm => lcm === minLCM);
  const [a, b] = abList[lcmIndex];
  return `${a} ${b}`;
}

rl.question('', (n) => {
  console.log(getAB(+n));
  rl.close();
});