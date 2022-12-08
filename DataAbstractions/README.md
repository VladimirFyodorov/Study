## Task #1 - calculateDistance

Реализуйте и экспортируйте по умолчанию функцию, которая находит расстояние между двумя точками на плоскости:

```
const point1 = [0, 0];
const point2 = [3, 4];
calculateDistance(point1, point2); // 5
```

## Task #2 - getMidpoint

Реализуйте и экспортируйте по умолчанию функцию, которая находит точку посередине между двумя указанными точками.

```
const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const point3 = getMidpoint(point1, point2);
console.log(point3); // => { x: 2, y: 2 };
```

## Task #3 - segments

Реализуйте и экспортируйте указанные ниже функции:

* makeSegment(). Принимает на вход две точки и возвращает отрезок.
* getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
* getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.
* getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.

```
const point1 = makePoint(0, 0);
const point2 = makePoint(4, 4);
const segment = makeSegment(point1, point2);
getBeginPoint(segment); // => { x: 0, y: 0 };
getEndPoint(segment); // => { x: 4, y: 4 };
getMidpointOfSegment(segment) // => { x: 2, y: 2 };
```
