const makePoint = (x, y) => ({ x, y });
const getX = (point) => point.x;
const getY = (point) => point.y;
const makeSegment = (point1, point2) => ({ beginPoint: point1, endPoint: point2 });
const getBeginPoint = (segment) => segment.beginPoint;
const getEndPoint = (segment) => segment.endPoint;
const getMidpointOfSegment = (segment) => {
	const x = (getX(getBeginPoint(segment)) + getX(getEndPoint(segment)))/2;
	const y = (getY(getBeginPoint(segment)) + getY(getEndPoint(segment)))/2;
	return makePoint(x, y);
};

const point1 = makePoint(0, 0);
const point2 = makePoint(4, 4);
const segment = makeSegment(point1, point2);
console.log(getBeginPoint(segment)); // => { x: 0, y: 0 };
console.log(getEndPoint(segment)); // => { x: 4, y: 4 };
console.log(getMidpointOfSegment(segment)) // => { x: 2, y: 2 };
