const getMidpoint = (point1, point2) => {
	const midpoint = {};
  midpoint.x = (point1.x + point2.x) / 2;
  midpoint.y = (point1.y + point2.y) / 2;

  return midpoint;
};

const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const point3 = getMidpoint(point1, point2);
console.log(point3); // => { x: 2, y: 2 };
