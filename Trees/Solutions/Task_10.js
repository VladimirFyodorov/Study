const sortDeps = (deps) => {
	const getDeps = (dep) => deps[dep] || [];
	const hasDeps = (dep) => (deps[dep] || []).length > 0;

	const iter = (dep) => {
		if (!hasDeps(dep)) return [dep];
		const depsOfDep = getDeps(dep).flatMap(iter);
		return [ ...depsOfDep, dep ];
	}

	return Object.keys(deps).reduce((acc, dep) => {
		const lstOfDeps = iter(dep);
		const filteredListOfDeps = lstOfDeps.filter(d => !acc.includes(d))
		return [...acc, ...filteredListOfDeps];
	}, [])
};

const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};
 
console.log(sortDeps(deps1));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];