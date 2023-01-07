import fsp from 'fs/promises';

const touch = (filePath) => fsp.access(filePath)
  .catch(() => fsp.writeFile(filePath, ''));

const filePath = '/Users/user/Desktop/Hexlet/Async/Solutions/newfile2.txt';
touch(filePath).then(() => console.log('created!'));
 
// Повторный вызов успешно завершается
touch(filePath).then(() => console.log('created!'));
