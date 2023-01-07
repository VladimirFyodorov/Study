const makeTimer = (totalTime, callback) => ({
  start: () => {
    let elapsedTime = 0;
    const id = setInterval(() => {
      elapsedTime += 100;

      if (elapsedTime <= totalTime) {
        callback({ state: 'working', elapsedTime });
      }

      if (elapsedTime >= totalTime) {
        callback({ state: 'finished', elapsedTime });
        clearInterval(id);
      }
    }, 100);
  }
});

// Колбек
const cb = ({ state, elapsedTime }) => {
  switch (state) {
    case 'working':
      console.log(`Time elapsed: ${elapsedTime}`);
      break;
    case 'finished':
      console.log(`Timer has finished!`);
  }
};
 
// Создается объект-таймер
const timer = makeTimer(300, cb); // Завели на 300 миллисекунд
timer.start();
// Time elapsed: 100
// Time elapsed: 200
// Time elapsed: 300
// Timer has finished!