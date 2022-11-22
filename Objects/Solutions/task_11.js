const fromPairs = (arr) => {
	const res = {};

	for (const [key, value] of arr) {
		res[key] = value;
	}

	return res;
};


console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]));
// { 'cat': 11, 'dog': 6 }

console.log(fromPairs([['fred', 30], ['barney', 40]]));
// { 'fred': 30, 'barney': 40 }