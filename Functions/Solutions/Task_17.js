// const rollDieRes = {
// 		1: 4,
// 		2: 3,
// 		3: 6,
// 		4: 5,
// 		5: 9,
// 		6: 5,
// };

const rollDie = () => {
	return Math.ceil(Math.random()*7);
};

const displayHistogram = (num, rollDie) => {
	const rollDieRes = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

	for (let roll = 0; roll < num; roll++) {
		const rollRes = rollDie();
		rollDieRes[rollRes] = rollDieRes[rollRes] + 1;
	}

	const rows = Object
		.values(rollDieRes)
		.reduce((acc, value) => {
			return (acc < value) ? value : acc;
		}, 0) + 3;
	
	const res = [];
	Object
		.entries(rollDieRes)
		.map(([key, value]) => {
			const column = [` ${key}  `, '----'];
			column.push(...'### ,'.repeat(value).split(',').filter(str => str !== ''));
			const perc = Math.round(value/num*100);
			const percStr = (perc === 0) ? '    ' 
				: ((perc < 10) ? `${perc}%  ` : `${perc}% `);
			column.push(percStr);
			column.push(...'    ,'.repeat(rows - value - 3).split(',').filter(str => str !== ''));
			column.reverse()
			res.push(column);
		})
	let resStr = '';
	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < 6; column++) {
			resStr += res[column][row];
		}
		resStr += '\n';
	}
	return resStr;
};

export default displayHistogram;

console.log(displayHistogram(32, rollDie));
// =>                 28%
//                    ###
//                    ###
//            19%     ###
//            ### 16% ### 16%
//    13%     ### ### ### ###
//    ### 9%  ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    -----------------------
//     1   2   3   4   5   6