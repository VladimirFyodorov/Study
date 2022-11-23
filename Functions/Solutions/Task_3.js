const convert = (...dates) => {
	return dates.map(date => new Date(...date).toDateString());
};


console.log(convert());
// []
 
console.log(convert([1993, 3, 24]));
// ['Sat Apr 24 1993']
 
console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']