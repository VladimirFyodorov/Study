import fsp from 'fs/promises';

const reverse = (filePath) => fsp.readFile(filePath, 'utf-8')
  .then((buf) => buf.toString())
  .then((data) => data.split('\n').reverse().join('\n'))
  .then((data) => fsp.writeFile(filePath, data));


reverse('/Users/user/Desktop/Hexlet/Async/Solutions/newfile.txt');
