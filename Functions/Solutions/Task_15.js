const sameParity = (arr) => {
	const isEven = (n) => n % 2 === 0;
	return [...arr].filter(num => isEven(num) === isEven(arr[0]));
};

console.log(sameParity([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
console.log(sameParity([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParity([])); // []