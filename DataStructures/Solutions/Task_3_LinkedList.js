class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
};

class LinkedList {
  constructor(values) {
    try {
      if (this.#isIterable(values)) {
        const Nodes = values.reverse().reduce((acc, el, index) => {
          if (index === 0) {
            return [...acc, new Node(el, undefined)];
          } else {
            return [...acc, new Node(el, acc[index - 1])];
          }
        }, []);
        this.head = Nodes.reverse()[0];
      } else if (values) {
        this.head = new Node(values, undefined);
      } else {
        this.head = values;
      }
    } catch (err) {
      console.log(err);
    }
  }

  #isIterable(input) {  
    if (input === null || input === undefined) {
      return false
    }

    return typeof input[Symbol.iterator] === 'function';
  }

  insert = (value, position = 0) => {
    const iter = (position, nthNode) => {
      if (!(position >= 0)) {
        console.log(position);
        throw Error('Insert position must be greater or equal to zero');
      }
      if (position === 0) {
        const newNode = new Node(value, nthNode);
        this.head = newNode;
        return;
      } 
      
      if (position === 1 || !nthNode?.nextNode) {
        const newNode = new Node(value, nthNode?.nextNode);
        if (nthNode) {
          nthNode.nextNode = newNode;
        } else {
          this.head = newNode;
        }
        return;
      }

      iter(position - 1, nthNode.nextNode);
    }
    iter(position, this.head)
  }

  get = (position = 0) => {

  }
  delete = (position = 0) => {
    
  }
  getLength = () => {
    
  }
  includes = (element) => {
    
  }

  reverse = () => {
    const iter = (node, prevNode) => {
      if (!node) {
        this.head = prevNode;
        return;
      }
      const { nextNode } =  node;
      node.nextNode = prevNode;
      iter(nextNode, node);
    };
    iter(this.head, undefined);
  }
};

const ll = new LinkedList([1, 2, 3]);
console.log(JSON.stringify(ll.head));
ll.reverse();
console.log(JSON.stringify(ll.head));
