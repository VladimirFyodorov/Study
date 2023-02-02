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

## Task #5 - 

## Task #6 - 

## Task #7 - 

## Task #8 - 

## Task #9 - 

