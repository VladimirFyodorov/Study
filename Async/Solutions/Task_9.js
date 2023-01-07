import fsp from 'fs/promises';

const getTypes = (files) => {
  const processPath = (acc, filePath) => {
    return fsp.stat(filePath)
      .then((stats) => stats.isDirectory())
      .then((isDirectory) => [ ...acc, isDirectory ? 'directory': 'file' ])
      .catch(() => [ ...acc, null ]);
  }

  const promise = files.reduce((accPromise, filePath) => {
    return accPromise.then((acc) => processPath(acc, filePath))
  }, Promise.resolve([]));
  return promise;
};

getTypes([
    '/Users/user/Desktop/Hexlet/Async/Solutions',
    '/Users/user/Desktop/Hexlet/Async/Solutions/Task_1.js',
    '/undefined']).then(console.log);
