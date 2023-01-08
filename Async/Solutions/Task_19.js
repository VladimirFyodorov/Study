const STATES = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
};

class CustomPromise {
  constructor(executor) {
    this.state = STATES.PENDING;
    this.result = undefined;
    this.onFulfilledReactions = [];
    this.resolve = this.resolve.bind(this);
    executor(this.resolve);
  }

  resolve(result) {
    setTimeout(() => {
      this.result = result;
      this.state = STATES.FULFILLED;
      this.onFulfilledReactions.forEach((reaction) => reaction(this.result));
    });
  }

  then(onFulfilled) {
    return new CustomPromise((resolve) => {
      const onFulfilledReaction = (result) => {
        resolve(onFulfilled(result));
      };

      if (this.state === STATES.PENDING) {
        this.onFulfilledReactions.push(onFulfilledReaction);
        return;
      }
      onFulfilledReaction(this.result);
    });
  }
}

const messages = [];
 
const resolvedPromise = new CustomPromise((resolve) => {
  resolve('Сначала резолвим?');
});
 
const modifiedPromise = resolvedPromise
  .then(() => { messages.push('Сначала меняем статус.'); });
 
await modifiedPromise
  .then(() => { messages.push('А уже потом резолвим.') });
 
console.log(messages.join(' ')); // Сначала меняем статус. А уже потом резолвим.
