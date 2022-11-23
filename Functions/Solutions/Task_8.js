const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

const groupBy = (students, groupingParam) => {
	const res = [...students]
		.reduce((acc, student) => {
			const key = student[groupingParam];
			if (!Object.hasOwn(acc, key)) {
				acc[key] = [];
			}

			acc[key] = [...acc[key], student];
			return acc;
		}, {});
	
	return res;
};
 
console.log(groupBy([], '')); // {}
console.log(groupBy(students, 'mark'));
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }