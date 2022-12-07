const merge = (...objs) => {
	const res = {};

	[...objs].map(obj => {
		Object.entries(obj).map(([key, value]) => {
			if (!Object.hasOwn(res, key)) {
				res[key] = [value];
			} else if (!res[key].includes(value)) {
				res[key].push(value);
			}
		})
	});

	return res;
};

console.log(merge({}, {}, {}));
// {}
 
console.log(merge({ a: 1, b: 2 }, { a: 3 }));
// { a: [1, 3], b: [2] }
 
console.log(merge(
	{ a: 1, b: 2, c: 3 },
	{},
	{ a: 3, b: 2, d: 5 },
	{ a: 6 },
	{ b: 4, c: 3, d: 2 },
	{ e: 9 },
));
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }