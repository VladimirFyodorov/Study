class CustomPromise {
  constructor(executor) {
    this.currentValue = null;
    this.resolve = this.resolve.bind(this);
    executor(this.resolve);
  }

  resolve(prop) {
    this.currentValue = prop;
  }

  then(callback) {
    const newOutput = callback(this.currentValue);
    return new CustomPromise((resolve) => resolve(newOutput));
  }
}

const promise = new CustomPromise((resolve) => resolve('Hello, world!'));

promise
  .then((value) => {
    console.log(value); // 'Hello, world!'
  });

const result = await promise
  .then((value) => value.replace('Hello', 'Goodbye'))
  .then((value) => value.toUpperCase());
console.log(result); // GOODBYE, WORLD!
