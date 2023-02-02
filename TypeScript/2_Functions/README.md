## Task #1 - Функции как параметры
Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат, который будет использоваться для проверки каждого числа на соответствие требованиям:
```
const numbers = [1, -5, 2, 3, 4, 133];
filter(numbers, (n) => n > 3); // [4, 133]
filter(numbers, (n) => n % 2 == 0); // [2, 4]
```
Параметры функции:
* Массив чисел
* Анонимная функция, принимающая на вход число и возвращающая логическое значение

## Task #2 - Опциональные параметры в функциях
Реализуйте функцию map(), которая принимает на вход массив чисел и колбек, который будет использоваться для преобразования каждого числа из массива, в какое-то другое число. Функция возвращает массив с новыми числами.
```
map([3, 9], (n) => n - 3);
// [0, 6]

map([8, 9], (n) => n + 8);
// [16, 17]
```
### Параметры функции:
* Массив чисел
* Анонимная функция, принимающая на вход число и возвращающая число. У этой функции есть необязательный параметр - индекс элемента в массиве.
```
map([8, 9], (n, index) => index + n);
// [8, 10]
```

## Task #3 - Тип Void
Попробуйте самостоятельно определить функцию forEach() для чисел:
```
forEach([1, 2, 3], (n) => console.log(n));
// 1
// 2
// 3

const result = [];
forEach([1, 2, 3], (n) => result.push(n));
// [1, 2, 3]
```
Параметры функции:
* Массив чисел
* Анонимная функция, принимающая на вход число и возвращающая void. У этой функции есть необязательный параметр - индекс элемента в массиве.
```
forEach([8, 9], (n, index) => console.log(index + n));
// 8
// 10
```

## Task #4 - Тип never (возврат из функции)
Реализуйте функцию fail(), которая выбрасывает любое исключение. Пропишете ее возвращаемый тип явно.

## Task #5 - Тип unknown
Реализуйте функцию isPlainObject(), которая проверяет, является ли переданное значение объектом. Эта функция считает, что массив не объект.
```
isPlainObject(1); // false
isPlainObject('hexlet'); // false
isPlainObject({}); // true
isPlainObject({ name: 'code-basics' }); // true
isPlainObject([1, 8]); // false
```

## Task #6 - Деструктуризация
Реализуйте и экспортируйте по умолчанию функцию lessonsCount(), которая принимает на вход курс и возвращает количество лекций внутри него:
```
const course = { lessons: ['intro', 'lala'] };
lessonsCount(course); // 2
```
Используйте внутри деструктуризацию, для того, чтобы извлечь уроки прямо в параметрах функции.

## Task #7 - Rest и Spread
Определите функцию max(), которая отличается от примера из урока только тем, что у нее первый параметр обязательный.

Например:
```
max(1,2,3);
max(234);
```

## Task #8 - Перегрузка функций (Function Overloads)
Реализуйте и экспортируйте по умолчанию функцию sayHello(), которая аналогична примеру на Kotlin из теории:
```
sayHello('John'); // Hi John
sayHello('Mila', 'Mala'); // Hello Mila Mala
```

## Task #9 - Narrowing
Реализуйте функцию last() которая извлекает последний элемент из переданного значения. Значением может быть строка или число. Функция возвращает значение того же типа, которое было передано в качестве параметра:
```
// Передаем в качестве параметра строку
// Функция возвращает строку
last('hexlet'); // t

// Передаем в качестве параметра число
// Функция возвращает число
last(12345); // 5
```