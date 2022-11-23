const average = (...nums) => {
	const sum = nums.reduce((a, acc) => a + acc, 0);
  return (nums.length === 0) ? null : sum/nums.length;
};


console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null