const run = (str) => {
	const takeLast = (str, n) => {
		return (str.length - n > 0) ? str.slice(str.length - n).split('').reverse().join('') : null;
	};

	return takeLast(str, 4);
};


console.log(run(''));       // null
console.log(run('cb'));     // null
console.log(run('power'));  // rewo
console.log(run('hexlet')); // telx