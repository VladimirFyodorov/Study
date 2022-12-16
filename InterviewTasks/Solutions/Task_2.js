import _ from 'lodash';

const tree = [
  { v: 5, c: [
		{ v: 10, c: [
			{ v: 11 },
		]},
		{ v: 7, c: [
			{ v: 5, c: [
				{ v: 1 },
			]}
		]}
	]},
	{ v: 5, c: [
		{ v: 10 },
		{ v: 15 },
	]}
];


const treeSumReq = (tree) => {
	const iter = (node) => {
		if (!Object.hasOwn(node, 'c')) return node.v;
		return node.v + _.sum(node.c.map(iter));
	}
	return _.sum(tree.map(iter));
};

const treeSumCycle = (tree) => {
	const stack = [...tree];
	const values = [];
	while (stack.length > 0) {
		const node = stack.pop();
		values.push(node.v);
		if (Object.hasOwn(node, 'c')) {
			stack.push(...node.c);
		}
	}
	return _.sum(values);
}

console.log(treeSumReq(tree));
console.log(treeSumCycle(tree));
