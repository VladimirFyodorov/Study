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
	let res = data;
	for (const key of keys) {
		res = res[key] || null;
	}
	return res;
};

console.log(get(data3, ['user', 'ubuntu'])); // null
console.log(get(data3, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data3, ['hosts', 0])); // { name: 'web1' }