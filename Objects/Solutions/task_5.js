const data2 = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

const pick = (data2, params) => {
	const res = {};
	for (const param of params) {
		if (data2[param]) {
			res[param] = data2[param];
		}
	}

	return res;
};

console.log(pick(data2, ['user'])); 
// { user: 'ubuntu' }