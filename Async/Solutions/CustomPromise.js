const defaultOnFulfilledHandler = (x) => x;
const defaultOnRejectedHandler = (err) => { throw err; };
const errorMessage = 'Executor must be a function';

const isThenable = (obj) => {
  return typeof obj === 'object' 
    && Object.hasOwn(obj, 'then') 
    && typeof obj.then === 'function';
}

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

    if (typeof executor !== 'function') {
      throw new Error(errorMessage);
    }

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
    if (isThenable(result)) {
      return result.then(this.resolve, this.reject);
    }

    this.PromiseState = this.STATES.FULFILLED;
    this.PromiseResult = result;
    this.PromiseFulfillReactions.forEach((onFulfilled) => onFulfilled(result));
  }

  reject(error) {
    if (this.PromiseState !== this.STATES.PENDING) {
      return;
    }
    if (isThenable(error)) {
      return error.then(this.resolve, this.reject);
    }

    this.PromiseState = this.STATES.REJECTED;
    this.PromiseResult = error;
    this.PromiseRejectReactions.forEach((onRejected) => onRejected(error));
  }

  static resolve(result) {
    return new CustomPromise((resolve) => resolve(result));
  }

  static reject(err) {
    return new CustomPromise((_, reject) => reject(err));
  }

  catch(onRejected) {
    return this.then(defaultOnFulfilledHandler, onRejected);
  }

  then(onFulfilled = defaultOnFulfilledHandler, onRejected = defaultOnRejectedHandler) {
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
