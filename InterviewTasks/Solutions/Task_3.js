const logSum = (num) => {
  console.log(num);
	return (arg) => logSum(num + arg);
};

logSum(5)(4)(11);
