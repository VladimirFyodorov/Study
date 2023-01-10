class Queue {
  constructor(values) {
    try {
      if (this.#isIterable(values)) {
        this.values = values;
      } else {
        this.values = [values];
      }
    } catch (e) {
      console.error(e);
    }
  }

  #isIterable(input) {  
    if (input === null || input === undefined) {
      return false
    }

    return typeof input[Symbol.iterator] === 'function';
  }

  enqueue = (value) => {
    this.values.push(value);
  }

  dequeue = () => {
    const [value, ...rest] = this.values;
    this.values = rest;
    return value;
  }

  peek = () => {
    const [value, ] = this.values;
    return value;
  }

  rear = () => {
    return this.values[this.values.length - 1];
  }

  isNull = () => {
    return this.values.length === 0;
  }
}

const q = new Queue([1,2,3]);
console.log(q.peek()); // 1
console.log(q.rear()); // 3
q.enqueue(4);
q.dequeue();
console.log(q.peek()); // 2
console.log(q.rear()); // 4
