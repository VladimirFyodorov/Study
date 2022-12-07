const filterAnagrams = (word, anagrams) => {
	const normalize = (word) => word.split('').sort().join('');
	return anagrams.filter(anagram => normalize(word) === normalize(anagram));
};


console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']
 
console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']
 
console.log(filterAnagrams('laser', ['lazing', 'lazy',  'lacer']));
// []