export type Point = [number, number, number];

function isTheSamePoint(p1: Point, p2: Point): boolean {
  return p1.every((n, i) => n === p2[i]);
};
