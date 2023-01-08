const identity = (x) => x;

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

    executor(this.resolve.bind(this), this.reject.bind(this));
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

  then(onFulfilled, onRejected = identity) {
    return new CustomPromise((resolve, reject) => {
      const onFulfilledReaction = (result) => {
        resolve(onFulfilled(result));
      };
      const onRejectedReaction = (result) => {
        resolve(onRejected(result));
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

const promise = new CustomPromise((_resolve, reject) => reject('Hello, world!'));
promise
  .then((result) => {
    console.log(result); // Данный обработчик будет пропущен
  });
 

const result = await promise.then((x) => x.toUpperCase());
console.log(result); // 'Hello, world!'
console.log(result === 'Hello, world!');


const resolveMessage = 'Resolved!';
const fulfillMessage = 'Fulfilled';
const rejectError = new Error('Rejected!');
const resolveMessages = [];
const expectedResolveMessages = [fulfillMessage, resolveMessage];

const resolvedPromise = new CustomPromise((resolve, reject) => {
  resolve(resolveMessage);
  reject(rejectError); // должно игнорироваться
});
const resolveString = await resolvedPromise
  .then((message) => `Another ${message}`);

console.log(resolveString);
console.log(resolveString === `Another ${resolveMessage}`);

const resolveChainResult = await resolvedPromise
  .then((message) => `New another ${message}`)
  .then((message) => message.split(' '))
  .then((array) => array.reverse())
  .then((array) => array.join(''));
  
console.log(resolveChainResult);
console.log(resolveChainResult === `New another ${resolveMessage}`.split(' ').reverse().join(''));


const rejectedPromise = new CustomPromise((resolve, reject) => {
  reject(rejectError);
  resolve(resolveMessage); // должно игнорироваться
});

const rejectResult = await rejectedPromise
  .then((message) => `Another ${message}`); // должно игнорироваться


console.log(rejectResult?.message);
console.log(rejectResult?.message === `${rejectError.message}`);
