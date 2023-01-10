class Stack {
  constructor(values) {
    try {
      if (isIterable(values)) {
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

  pop = () => {
    return this.values.pop();
  }

  push = (element) => {
    return this.values.push(element);
  }

  top = () => {
    return this.values[this.values - 1];
  }

  size = () => {
    return this.values.length;
  }

  isEmpty = () => {
    return this.values.length === 0;
  }
}

const myStack = new Stack([1, 2, 3, 4, 5]);
console.log(myStack.size()); // 5
myStack.push(2);
console.log(myStack.pop()); // 2
