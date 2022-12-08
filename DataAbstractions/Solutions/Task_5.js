const makeDecartPoint = (x, y) => ({ x, y });
const getX = (point) => point.x;
const getY = (point) => point.y;

const makeRectangle = (point, width, height) => ({ point, width, height });
const getPointA1 = (rectangle) => rectangle.point;
const getPointB2 = (rectangle) => {
	const {x, y} = rectangle.point;
	const { width, height } = rectangle;
	return makeDecartPoint(x + width, y - height);
};

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
  return null;
};

const containsOrigin = (rectangle) => {
	const pointA1 = getPointA1(rectangle);
	const pointB2 = getPointB2(rectangle);
	return getQuadrant(pointA1) === 2 && getQuadrant(pointB2) === 4;
};


// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// -----------
// |         |
// |         | 5
// |         |
// -----------

const p = makeDecartPoint(0, 1);
const rectangle = makeRectangle(p, 4, 5);

console.log(containsOrigin(rectangle)); // false

const rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
console.log(containsOrigin(rectangle2)); // true
