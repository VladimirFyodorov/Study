const flatten = (list) => {
	if (!Array.isArray(list)) return [list];
	
	return list.reduce((acc, child) => {
		return [...acc, ...flatten(child)];
	}, []);
};

const list = [1, 2, [3, 5], [[4, 3], 2]];
 
console.log(flatten(list)); // [1, 2, 3, 5, 4, 3, 2]
