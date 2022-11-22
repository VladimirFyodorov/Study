import _ from 'lodash';

const data3 = {
	user: 'ubuntu',
	hosts: {
		0: {
			name: 'web1',
		},
		1: {
			name: 'web2',
			null: 3,
			active: false,
		},
	},
};

const get = (data, keys) => {
	return _.get(data, keys.join('.'), null);
};

console.log(get(data3, ['user', 'ubuntu'])); // null
console.log(get(data3, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data3, ['hosts', 0])); // { name: 'web1' }