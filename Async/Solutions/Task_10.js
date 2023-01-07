import path from 'path';
import _ from 'lodash';
import fsp from 'fs/promises';

const getDirectorySize = (dirPath) => fsp.readdir(dirPath)
  .then((fileNames) => fileNames.map((fileName) => path.join(dirPath, fileName)))
  .then((filesPaths) => {
    const processPath = (filePath) => fsp.stat(filePath)
      .then((stats) => stats.isDirectory() ? 0 : stats.size);

    const promises = filesPaths.map(processPath);
    return Promise.all(promises);
  })
  .then((sizes) => _.sum(sizes));

getDirectorySize('/Users/user/Desktop/Hexlet/Async/Solutions').then(console.log);
