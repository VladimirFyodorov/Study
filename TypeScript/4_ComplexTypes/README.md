## Task #1 - Типы как множества
Определите тип CustomType, который может принимать следующие значения:
* null
* undefined
* числа

## Task #2 - Объединения (Union Types)
Реализуйте функцию lastIndex(str, char), возвращающую индекс последнего вхождения символа в строку или null, если такого символа нет.
```
const str = 'test';
lastIndex(str, 't'); // 3
lastIndex(str, 'p'); // null
```

## Task #3 - Null и Undefined
Реализуйте функцию formatPrice(), которая принимает число и возвращает строку с округлением до второго числа после запятой, если пришел null или undefined должна вернуться '$0.00'.
```
formatPrice(3.145); // '$3.15'
formatPrice(200); // '$200.00'
formatPrice(); // '$0.00'
formatPrice(null); // '$0.00'
```

## Task #4 - Литералы (Literal Types)
Реализуйте функцию makeTurn(), принимающую строку left или right и перемещающую черепашку вперед-назад по одномерной карте длиной пять. Если ход невозможен, должно выброситься исключение.
```
const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]

makeTurn('left') // ERROR

makeTurn('right');
makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]
```

## Task #5 - Пересечение (Intersections Types)
Создайте там заказа состоящий из status = 'Created' и cost = 100. Создайте этот тип через пересечение типов.

```
const myOrder: OneHundredOrder = {
    status: 'Created',
    cost: 100
}
```
## Task #6 - Присвоение значения

## Task #7 - Иерархия типов
```
type ComparatorCallback = (item1: number, item2: number, index: number) => -1 | 0 | 1
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => Math.sign(item1 - item2);
//    ^? const comparator = (item1: number, item2: number) => number;

sort(arr, comparator) // Error: Type 'number' is not assignable to type '0 | 1 | -1'.
//  
```

## Task #8 - Структурная типизация
```
type IntersectionUser = {
  username: string;
  password: string;
} & {
    type: string;
}

const admin: IntersectionUser = { username: 'test', password: 'test', type: 'admin' } // требуется совпадение c объектным типом и слева и справа от оператора &

type UnionUser = {
    username: string;
    password: string;
} | {
    type: string;
}

const user: UnionUser = { username: 'test', type: 'user' } // достаточно совпадения с одним из объектных типов
```

## Task #9 - Ковариантность и контрвариантность


