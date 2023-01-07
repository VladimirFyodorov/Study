import fs from 'fs';

const move = (oldPath, newPath, callback) => {
  fs.readFile(oldPath, (error1, file) => {
    if (error1) {
      callback(error1);
      return;
    }

    fs.writeFile(newPath, file, (error2) => {
      if (error2) {
        callback(error2);
        return;
      }

      fs.unlink(oldPath, callback);
    });
  });
};


move('./myfile.txt', './newfile.txt', (error) => {
  if (error) {
    console.log(error)
    console.log('oops');
    return;
  }
  console.log('yes!');
});
