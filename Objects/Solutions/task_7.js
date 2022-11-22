const company3 = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};


const fill = (data1, keys, data2) => {
	if (keys.length == 0) {
		return {...data1, ...data2};
	}

	const res = data1;

	for (const key of keys) {
		res[key] = data2[key];
	}

	return res;
};

console.log(fill(company3, ['name'], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }