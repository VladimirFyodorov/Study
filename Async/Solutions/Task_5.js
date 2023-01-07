import _ from 'lodash';
import fs from 'fs';
import path from'path';
import async from 'async';

const getDirectorySize = (dirPath, callback) => {
  fs.readdir(dirPath, (error1, files) => {
    if (error1) {
      callback(error1);
      return;
    }

    const filePaths = files.map(fileName => path.join(dirPath, fileName));
    async.map(filePaths, fs.stat, (error3, stats) => {
      if (error3) {
        callback(error3);
        return;
      }
      const filesStats = stats.filter(f => f.isFile());
      const size = _.sumBy(filesStats, 'size');
      callback(error3, size);
    });
  });
};


getDirectorySize('/Users/user/Desktop/Hexlet/Async/Solutions', (err, size) => {
  console.log(size);
});
