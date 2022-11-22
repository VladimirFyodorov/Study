const text1 = 'another one sentence with strange Words words';

const countWords = (text1) => {
	const res = {};
	for (const word of text1.split(' ')) {
		res[word.toLowerCase()] = (res[word.toLowerCase()] || 0) + 1;
	}

	return res;
};

console.log(countWords(text1));
// => { another: 1, one: 1, sentence: 1, with: 1, strange: 1, words: 2 }