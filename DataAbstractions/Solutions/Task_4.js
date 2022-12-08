const makePoint = (x, y) => {
  return {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2)
  };
};

const getAngle = (point) => point.angle;
const getRadius = (point) => point.radius;
const getX = (point) => getRadius(point) * Math.cos(getAngle(point));
const getY = (point) => getRadius(point) * Math.sin(getAngle(point));




const x = 4;
const y = 8;
 
// point хранит в себе данные в полярной системе координат
const point = makePoint(x, y);
 
// Здесь происходит преобразование из полярной в декартову
console.log(getX(point)); // 4
console.log(getY(point)); // 8
