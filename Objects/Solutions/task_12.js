const bqs = (obj) => {
	return Object.keys(obj).sort().map(key => `${key}=${obj[key]}`).join('&');
};



console.log(bqs({ per: 10, page: 1 }));
// page=1&per=10

console.log(bqs({ param: 'all', param1: true }));
// param=all&param1=true