const make = (name, params = {}) => {
	return {
		name,
		state: 'published',
		createdAt: new Date(),
		...params
	};
};

console.log(make('Hexlet', { website: 'hexlet.io', state: 'published' }));
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// })