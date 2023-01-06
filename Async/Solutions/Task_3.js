import fs from 'fs';

const compareFileSizes = (filepath1, filepath2, callback) => {
  fs.stat(filepath1, (_error, stat1) => {
    fs.stat(filepath2, (_error, stat2) => {
      callback(_error, Math.sign(stat1.size - stat2.size));
    });
  });
};

compareFileSizes('./myFile.txt', './myFileCopy.txt', (_err, result) => console.log(result));
