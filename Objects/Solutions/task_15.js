const countSymbols = (str) => {
	const res = {};
	for (const symbol of str.toLowerCase().split('')) {
		res[symbol] = (res[symbol] || 0) + 1;
	}

	return res;
};

const scrabble = (symbols, word) => {
  const avaliableSymbols = countSymbols(symbols);
	const usedSymbols = countSymbols(word);

	for (const [key, value] of Object.entries(usedSymbols)) {
		if (value > (avaliableSymbols[key] || 0)) {
			return false;
		}
	}

	return true;
};


console.log(scrabble('rkqodlw', 'world')); // true
console.log(scrabble('avj', 'java')); // false
console.log(scrabble('avjafff', 'java')); // true
console.log(scrabble('', 'hexlet')); // false
console.log(scrabble('scriptingjava', 'JavaScript')); // true