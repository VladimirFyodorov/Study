const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

const getSortedNames = (users) => {
	const res = [];

	for (const user of users) {
		res.push(user.name);
	}

	return res.sort();
};

console.log(getSortedNames(users));
// ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
