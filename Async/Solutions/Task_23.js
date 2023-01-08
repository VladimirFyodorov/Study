import fs from 'fs';
import async from 'async';

const { waterfall } = async;

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  waterfall([
    (cb) => {
      fs.readFile(inputPath1, 'utf-8', (_error1, data1) => cb(_error1, data1))
    },
    (data1, cb) => {
      fs.readFile(inputPath2, 'utf-8', (_error2, data2) => cb(_error2, data1, data2))
    },
    (data1, data2, cb) => {
      fs.writeFile(outputPath, `${data1}${data2}`, (_error3) => cb(_error3))
    },
  ], (error) => {
    cb(error);
  })
};

const inputPath1 = '/Users/user/Desktop/Hexlet/Async/Solutions/myfile copy.txt';
const inputPath2 = '/Users/user/Desktop/Hexlet/Async/Solutions/myfile.txt';
const outputPath = '/Users/user/Desktop/Hexlet/Async/Solutions/anotherFile.txt';

unionFiles(inputPath1, inputPath2, outputPath, console.log);
