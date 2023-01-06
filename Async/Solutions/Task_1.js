import fs from 'fs';

const f = (filepath) => {
  const logRes = (_error, result) => console.log(result);
  fs.readFile(filepath, 'utf-8', logRes);
};

f('./myFile.txt'); // => This is my file
