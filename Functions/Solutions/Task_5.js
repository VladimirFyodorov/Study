const users = [
	{ name: 'Tirion', birthday: 'Nov 19, 1988' },
	{ name: 'Sam', birthday: 'Nov 22, 1999' },
	{ name: 'Rob', birthday: 'Jan 11, 1975' },
	{ name: 'Sansa', birthday: 'Mar 20, 2001' },
	{ name: 'Tisha', birthday: 'Feb 27, 1992' },
	{ name: 'Chris', birthday: 'Dec 25, 1995' },
];

const takeOldest = (users, num = 1) => {

	users.sort(({birthday : b1}, {birthday : b2}) => {
		return Math.sign((Date.parse(b1) -  Date.parse(b2)));
	});

	return users.slice(0, num);
};


console.log(takeOldest(users, 3));
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
//   { name: 'Tirion', birthday: 'Nov 19, 1988' },
//   { name: 'Tisha', birthday: 'Feb 27, 1992' }
// ]