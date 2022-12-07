const smallestDivisor = (num) => {
	if (num === 1) return 1;

	const iter = (div) => {
		if (div**2 > num) return num;
		if (num % div === 0) return div;
		return iter(div + 1);
	};

	return iter(2);
};

console.log(smallestDivisor(15)); // 3
console.log(smallestDivisor(17)); // 17