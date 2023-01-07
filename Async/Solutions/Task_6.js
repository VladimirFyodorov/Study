import fs from 'fs';

const watch = (filePath, interval, callback) => {
  let mtimeMs;
  // init
  fs.stat(filePath, (error, stats) => {
    if (error) {
      callback(error);
      return;
    }
    mtimeMs = stats.mtimeMs;
  });

  const timerId = setInterval(() => {
    fs.stat(filePath, (error, stats) => {
      if (error) {
        clearInterval(timerId);
        callback(error);
        return;
      }

      if (stats.mtimeMs !==  mtimeMs) {
        mtimeMs = stats.mtimeMs;
        callback();
      }
    });
  }, interval);

  return timerId;
};

const filepath = '/Users/user/Desktop/Hexlet/Async/Solutions/newfile.txt';

const id = watch(filepath, 500, (err) => {
  if (err) {
    console.log('error');
    return;
  }
  console.log('Wow!');
});

setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
setTimeout(() => clearInterval(id), 15000); // остановить отслеживание через 5 секунд

