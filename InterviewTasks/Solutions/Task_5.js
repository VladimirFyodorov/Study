const arr = [6.1, 4.2, 6.3];

const groupBy = (arr, fn) => {
	return arr.reduce((acc, num) => {
		const key = fn(num);
		if (!Object.hasOwn(acc, key)) {
			acc[key] = [];
		}
		acc[key].push(num);
		return acc;
	}, {});
}

console.log(groupBy(arr, Math.floor)); // { '4': [4.2], '6': [6.1, 6.3] }
