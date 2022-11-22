import _ from 'lodash';

const countWords = (text1) => {
	const res = {};
	for (const word of _.words(text1.toLowerCase())) {
		res[word] = (res[word] || 0) + 1;
	}

	return res;
};

const text1 = 'another one sentence with strange Words words   ';

console.log(countWords(text1));