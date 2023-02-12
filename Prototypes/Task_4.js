function f(a, b) {
  console.log(a + b);
}

function defer(ms) {
  return (...args) => setTimeout(() => this.call(this, ...args), ms);
}

Function.prototype.defer = defer

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
