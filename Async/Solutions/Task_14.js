import fs from 'fs';

const promisify = (fn) => (...params) => new Promise((resolve, reject) => {
  fn(...params, (error, result) => {
    if (error) {
      reject(error);
      return;
    }
    resolve(result);
  });
});

 
const readFile = promisify(fs.readFile);
 
const filepath = '/Users/user/Desktop/Hexlet/Async/Solutions/myfile.txt';
readFile(filepath).then((bf) => bf.toString()).then(console.log);
 