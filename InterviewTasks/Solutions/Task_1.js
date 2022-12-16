const START = Date.now();

function someFn() {
	console.log('time', Date.now() - START);
	console.log('args', arguments);
}

Function.prototype.delay = function(ms) {
	// return (...args) => setTimeout(() => someFn(...args), ms)
	// or
	return (...args) => setTimeout(() => this.call(this, ...args), ms)
	// or
	// return (...args) => setTimeout(() => this.apply(this, args), ms)
};

const f = someFn.delay(500);

someFn('arg1', 'arg2', 1, 2);
f('arg1', 'arg2', 1, 2);
