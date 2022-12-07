const sequenceSum = (n1, n2) => {
	if (n1 > n2) return NaN;
	return (n1 === n2) ? n1 : n1 + sequenceSum(n1 + 1, n2);
};

console.log(sequenceSum(1, 5)); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sequenceSum(4, 10)); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
console.log(sequenceSum(-3, 2)); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
console.log(sequenceSum(7, 2)); // NaN
console.log(sequenceSum(0, 0)); // 0
console.log(sequenceSum(6, 6)); // 6