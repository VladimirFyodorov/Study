
const sayPrimeOrNot = (num) => {
	for (let devider = 2; devider <= Math.sqrt(num); devider += 1) {
		if ( num % devider === 0) {
			return 'no';
		}
	}

	return (num < 2) ? 'no': 'yes';
};

console.log(sayPrimeOrNot(5)); // 'yes'
console.log(sayPrimeOrNot(4)); // 'no'