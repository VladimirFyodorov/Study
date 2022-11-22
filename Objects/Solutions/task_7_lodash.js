import _ from 'lodash';

const company3 = {
	name: null,
	state: 'moderating',
};

const data = {
	name: 'Hexlet',
	state: 'published',
};


const fill = (data1, keys, data2) => {
	const filltered = (keys.length == 0) ? data2 : _.pick(data2, keys);
	return {...data1, ...filltered};
};

console.log(fill(company3, ['name'], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }