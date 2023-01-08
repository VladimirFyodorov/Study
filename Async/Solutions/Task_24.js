import fs from 'fs';

function isIterable(data) {  
  if (data === null || data === undefined) {
    return false
  }

  return typeof data[Symbol.iterator] === 'function'
}


const waterfall = async (arr, endFn) => {
  const fns = arr.reverse();

  const iter = (error, ...data) => {
    if (error) {
      endFn(error);
      return;
    }

    let fn;
    if (fns.length > 0) {
      fn = fns.pop();
    } else {
      fn = endFn;
    }

    if (!data) {
      fn(iter);
    } else if (isIterable(data)) {
      fn(...data, iter);
    } else {
      fn(data, iter);
    }
  }

  iter(null);
};

const dataPath1 = '/Users/user/Desktop/Hexlet/Async/Solutions/myfile copy.txt';
const dataPath2 = '/Users/user/Desktop/Hexlet/Async/Solutions/myfile.txt';
const outputPath = '/Users/user/Desktop/Hexlet/Async/Solutions/anotherFile.txt';


waterfall([
  (cb) => {
    fs.readFile(dataPath1, 'utf-8', (_error1, data1) => cb(_error1, data1))
  },
  (data1, cb) => {
    fs.readFile(dataPath2, 'utf-8', (_error2, data2) => cb(_error2, data1, data2))
  },
  (data1, data2, cb) => {
    fs.writeFile(outputPath, `${data1}${data2}`, (_error3) => cb(_error3, `${data1}${data2}`))
  },
], (error, result) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('success: ', result);
})

