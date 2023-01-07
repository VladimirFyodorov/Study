const timer = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
 
timer(2000).then(() => console.log('time is over!'));
