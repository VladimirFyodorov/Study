## Классы
```
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new Point(10, 20);
console.log(p); // { x: 10, y: 20 }
```

## Классы как типы
```
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function isEqual(p1: Point, p2: Point): boolean {
  return p1.x === p2.x && p1.y === p2.y;
}
```

## Защита свойств и методов
```
class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new Point(10, 8);
p.x; // Error!
p.y; // Error!
```

## Свойства параметров
```
class SomeClass {
  constructor(public one: number, private two: string) {}

    get three(): string {
      return `${this.one} ${this.two}`;
  }
}

// Этот код делает тоже самое что и этот:

class SomeClass {
  public one: number;
  private two: string;
  constructor(one: number, two: string) {
    this.one = one;
    this.two = two;
  }
    get three(): string {
      return `${this.one} ${this.two}`;
  }
}
```
