const genDiff = (obj1, obj2) => {
	const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
	let res = {};
	for (const key of keys) {
		if (!Object.hasOwn(obj2, key)) {
			res[key] = 'deleted';
		} else if (!Object.hasOwn(obj1, key)) {
			res[key] = 'added';
		} else {
			if (obj1[key] === obj2[key]) {
				res[key] = 'unchanged';
			} else {
				res[key] = 'changed';
			}
		}
	}
	return res;
};



console.log(genDiff(
	{ one: 'eon', two: 'two', four: true },
	{ two: 'own', zero: 4, four: true },
));
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }