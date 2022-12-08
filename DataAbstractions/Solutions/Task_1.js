const calculateDistance = (point1, point2) => {
	const [x1, y1] = point1;
	const [x2, y2] = point2;
	return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
};

const point1 = [0, 0];
const point2 = [3, 4];
console.log(calculateDistance(point1, point2)); // 5
