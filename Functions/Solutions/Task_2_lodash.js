import _ from 'lodash';

const average = (...nums) => {
  return (nums.length === 0) ? null : _.sum(nums)/nums.length;
};


console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null