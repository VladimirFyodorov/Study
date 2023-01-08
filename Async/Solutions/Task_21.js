const defaultOnFulfilledHandler = (x) => x;
const defaultOnRejectedHandler = (err) => { throw err; };

class CustomPromise {
  constructor(executor) {
    this.STATES = {
      PENDING: 'PENDING',
      FULFILLED: 'FULFILLED',
      REJECTED: 'REJECTED'
    };
    this.PromiseResult = null;
    this.PromiseState = this.STATES.PENDING;
    this.PromiseFulfillReactions = [];
    this.PromiseRejectReactions = [];
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    try {
      executor(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }

  resolve(result) {
    if (this.PromiseState !== this.STATES.PENDING) {
      return;
    }
    this.PromiseState = this.STATES.FULFILLED;
    this.PromiseResult = result;
    this.PromiseFulfillReactions.forEach((onFulfilled) => onFulfilled(result));
  }

  reject(error) {
    if (this.PromiseState !== this.STATES.PENDING) {
      return;
    }
    this.PromiseState = this.STATES.REJECTED;
    this.PromiseResult = error;
    this.PromiseRejectReactions.forEach((onRejected) => onRejected(error));
  }

  catch(onRejected) {
    return this.then(defaultOnFulfilledHandler, onRejected);
  }

  then(onFulfilled, onRejected = defaultOnRejectedHandler) {
    return new CustomPromise((resolve, reject) => {

      const onFulfilledReaction = (result) => {
        try {
          resolve(onFulfilled(result));
        } catch (err) {
          reject(err);
        }
      };

      const onRejectedReaction = (result) => {
        try {
          resolve(onRejected(result));
        } catch (err) {
          reject(err);
        }
      };

      if (this.PromiseState === this.STATES.FULFILLED) {
        setTimeout(() => onFulfilledReaction(this.PromiseResult), 0);
        return;
      }

      if (this.PromiseState === this.STATES.REJECTED) {
        setTimeout(() => onRejectedReaction(this.PromiseResult), 0);
        return;
      }

      this.PromiseFulfillReactions.push(onFulfilledReaction);
      this.PromiseRejectReactions.push(onRejectedReaction);
    })
  }
}

const resolvedPromise = new CustomPromise((resolve) => resolve('Hello, world!'));
resolvedPromise
  .then((value) => {
    console.log(value); // 'Hello, world!'
    throw new Error('Goodbye, world!');
  })
  .catch((err) => console.log(err));  // 'Error: Goodbye, world!'


const rejectedPromise = new CustomPromise((_, reject) => reject('Hello, world!'));
const result = await rejectedPromise
  .catch((rejectMessage) => rejectMessage.split(' '))
  .then(([firstWord]) => firstWord + ' Pepe!');
console.log(result); // Hello, Pepe!
