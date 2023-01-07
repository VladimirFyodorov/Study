import fsp from 'fs/promises';
import path from 'path';

const ls = async (dirPath) => {
  const absoluteDirPath = path.isAbsolute(dirPath) ? dirPath : path.resolve(dirPath);
  const dirStat = await fsp.stat(absoluteDirPath);
  
  if (dirStat.isFile()) {
    return [{ filepath: absoluteDirPath, mode: dirStat.mode }];
  }

  const files = await fsp.readdir(absoluteDirPath)
    .then((fileNames) => fileNames.map((p) => path.join(absoluteDirPath, p)))
    .then((paths) => paths.sort());

  const processPath = (filepath) => fsp.stat(filepath)
    .then((stats) => stats.mode)
    .then((mode) => ({ filepath, mode }));

  const promises = files.map(processPath);
  const res = await Promise.all(promises);
  return res;
};

// const res = await ls('/Users/user/Desktop/Hexlet/Async/Solutions');
const res = await ls('./Task_1.js');
console.log(res);
