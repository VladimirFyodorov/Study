const makeRational = (number, denom) => {
	const normalize = (rawNumber, rawDenom) => {
		const findBiggestCommonDevider = (a , b, currentDiv, checkDiv) => {
			if (Math.abs(a) < checkDiv || Math.abs(b) < checkDiv) return currentDiv;
			if (a % checkDiv === 0 && b % checkDiv === 0) {
				return findBiggestCommonDevider(a, b, checkDiv,  checkDiv + 1);
			}
			return findBiggestCommonDevider(a, b, currentDiv, checkDiv + 1);
		}
		const absDiv = findBiggestCommonDevider(rawNumber, rawDenom, 1, 2);
		const divWithSign = (rawDenom < 0) ? -absDiv : absDiv;
		return { number: rawNumber/divWithSign, denom: rawDenom/divWithSign};
	}
	return normalize(number, denom);
};

const getNumer = (rational) => rational.number;
const getDenom = (rational) => rational.denom;

const add = (rat1, rat2) => {
	const num1 = getNumer(rat1);
	const denom1 = getDenom(rat1);
	const num2 = getNumer(rat2);
	const denom2 = getDenom(rat2);
	return makeRational(num1*denom2 + num2*denom1, denom1*denom2);
};
const sub = (rat1, rat2) => {
	const num1 = getNumer(rat1);
	const denom1 = getDenom(rat1);
	const num2 = getNumer(rat2);
	const denom2 = getDenom(rat2);
	return makeRational(num1*denom2 - num2*denom1, denom1*denom2);
};
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;


const rat1 = makeRational(3, 9);

console.log(getNumer(rat1)); // 1
console.log(getDenom(rat1)); // 3
 
const rat2 = makeRational(10, 3);
 
const rat3 = add(rat1, rat2);
console.log(ratToString(rat3)); // '11/3'
 
const rat4 = sub(rat1, rat2);
console.log(ratToString(rat4)); // '-3/1' 
