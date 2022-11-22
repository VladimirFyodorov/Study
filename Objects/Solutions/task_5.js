const data2 = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

const pick = (data, keys) => {
	const res = {};
	for (const key of keys) {
		if (Object.hasOwn(data, key)) {
			res[key] = data2[key];
		}
	}

	return res;
};

console.log(pick(data2, ['user'])); 
// { user: 'ubuntu' }