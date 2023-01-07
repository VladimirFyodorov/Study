import util from 'util';

const STATES = {
  PENDING: 'PENDING'
}

class CustomPromise {
  constructor(executor) {
    this.PromiseResult = null;
    this.PromiseState = STATES.PENDING;
    this.PromiseFulfillReactions = [];
    this.resolve = this.resolve.bind(this);

    executor(this.resolve);
  }

  resolve(result) {
    this.PromiseResult = result;
    this.PromiseState = '';
    this.PromiseFulfillReactions.forEach((onFulfill) => onFulfill(result));
  }

  then(onFulfilledHandler) {
    return new CustomPromise((resolve) => {
      const onFulfilledReaction = (result) => {
        resolve(onFulfilledHandler(result));
      };

      if (this.PromiseState !== STATES.PENDING) {
        onFulfilledReaction(this.PromiseResult);
        return;
      }

      this.PromiseFulfillReactions.push(onFulfilledReaction);
    });
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


const resolveMessage = 'Resolved!';

const resolvedPromise = new CustomPromise((resolve) => {
  setTimeout(() => resolve(resolveMessage), 1000);
});

console.log(util.inspect(resolvedPromise).toLowerCase().includes('pending'));

const resolveString = await resolvedPromise
  .then(async (message) => `Another ${message}`);

console.log(util.inspect(resolvedPromise).toLowerCase().includes('pending'))
console.log(resolveString);
