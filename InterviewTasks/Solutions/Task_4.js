const obj1 = { foo: 'foo', bar: 'bar' };
const obj2 = { bar: 'foo', some: 'some' };

const updateObj = (obj1, obj2) => {
	const newObj = { ...obj1 };
	for (const key of Object.keys(obj1)) {
		if (Object.hasOwn(obj2, key)) {
			newObj[key] = obj2[key];
		}
	}
	return newObj;
};

console.log(updateObj(obj1, obj2)); // { foo: 'foo', bar: 'foo' };
