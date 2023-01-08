const identity = (x) => x;

// class CustomPromise {
//   constructor(executor) {
//     this.STATES = {
//       PENDING: 'PENDING',
//       FULFILLED: 'FULFILLED',
//       REJECTED: 'REJECTED'
//     };
//     this.state = this.STATES.PENDING;
//     this.result = undefined;
//     this.handlers = [];
//     this.resolve = this.resolve.bind(this);
//     this.reject = this.reject.bind(this);
//     this.updateResult = this.updateResult.bind(this);
//     this.addHandlers = this.addHandlers.bind(this);
//     this.executeHandlers = this.executeHandlers.bind(this);

//     try {
//       executor(this.resolve, this.reject);
//     } catch (err) {
//       this.reject(err);
//     }
//   }

//   resolve(result) {
//     this.updateResult(result, this.STATES.FULFILLED);
//   }

//   reject(err) {
//     this.updateResult(err, this.STATES.REJECTED);
//   }

//   updateResult(result, state) {
//     setTimeout(() => {
//       if (this.state !== this.STATES.PENDING) {
//         return;
//       }
//       // console.log('Update result: ', result, ' state: ', state);
//       this.result = result;
//       this.state = state;
//       this.executeHandlers();
//     }, 0);
//   }

//   addHandlers(handlers) {
//     this.handlers.push(handlers);
//     this.executeHandlers();
//   }

//   executeHandlers() {
//     if (this.state === this.STATES.PENDING) {
//       return null;
//     }

//     this.handlers.forEach((handler) => {
//       if (this.state === this.STATES.FULFILLED) {
//         return handler.onFulfilled( this.result);
//       } 
//       return handler.onRejected( this.result);
//     });
//     this.handlers = [];
//   }

//   then(onFulfilled, onRejected = identity) {
//     return new CustomPromise((resolve, reject) => {
//       this.addHandlers({
//         onFulfilled: function(result) {
//           // if no onFulfilled provided, resolve the result for the next promise chain
//           if (!onFulfilled) return resolve(result);

//           try {
//             return resolve(onFulfilled(result))
//           } catch(err) {
//             return reject(err);
//           }
//         },
//         onRejected: function(result) {
//           // if no onRejected provided, reject the result for the next promise chain
//           if (!onRejected) return reject(result);

//           try {
//             return resolve(onRejected(result))
//           } catch(err) {
//             return reject(err);
//           }
//         }
//       })
//     })
//   }
// }

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
