const findIndexOfNearest = (arr, num) => {
	const diffArr = [...arr]
		.map(n => Math.abs(n - num))
		.sort((n1, n2) => Math.sign(n1 - n2));
	const minDiff = diffArr[0];
	const ind1 = arr.findIndex(n => n === (num + minDiff));
	const ind2 = arr.findIndex(n => n === (num - minDiff));


	if (ind1 > 0 && ind2 > 0) return (ind1 < ind2) ? ind1 : ind2;
	if (ind1 > 0) return ind1;
	if (ind2 > 0) return ind2;
	return null
};



console.log(findIndexOfNearest([], 2));              // null
console.log(findIndexOfNearest([15, 10, 3, 4], 0));  // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4));    // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4)); // 2
