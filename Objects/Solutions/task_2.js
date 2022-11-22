const company1 = {
	name: 'Hexlet',
	state: 'moderating',
	website: 'https://hexlet.io',
};
const company2 = {
	name: 'CodeBasics',
	state: 'published',
	website: 'https://code-basics.com',
};

const is = (company1, company2) => {
	for (const key in company1) {
		if (company1[key] !== company2[key]) {
			return false;
		}
	}

	return true;
};

console.log(is(company1, company2));
// => false