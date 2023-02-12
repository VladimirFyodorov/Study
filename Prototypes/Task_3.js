function f() {
  console.log("Hello!");
}

function defer(ms) {
  setTimeout(() => this.call(this), ms); 
  // or setTimeout(this, ms);
}

Function.prototype.defer = defer

f.defer(1000); // выведет "Hello!" через 1 секунду
