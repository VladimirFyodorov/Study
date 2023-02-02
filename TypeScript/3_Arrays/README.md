## Task #1 - Аннотации типов
Реализуйте функцию uniq(), убирающую дубликаты из массива. Функция принимает на вход массив чисел и строк. Результатом работы функции должен быть новый массив, в котором сохраняется только первое вхождение каждого элемента. Порядок значений результата определяется порядком их появления в массиве.
```
uniq([9, 9, 3, 8, 8]); // [9, 3, 8]
uniq(['twinkle', 'twinkle', 'little', 'bat']); // ['twinkle', 'little', 'bat']
uniq([1, 1, 3, 'oops!']); // [1, 3, 'oops!']
```

## Task #2 - Многомерные массивы
Реализуйте функцию getField(), которая генерирует игровое поле для крестиков ноликов. Функция принимает на вход размерность поля и возвращает массив массивов нужного размера, заполненный значениями null.
```
const field1 = getField(1);
console.log(field1);
// [[null]]

const field2 = getField(2);
console.log(field2);
// [[null, null], [null, null]]
```

## Task #3 - Массивы только для чтения
Реализуйте функцию reverse(), которая переворачивает массив. Технически она должна возвращать новый массив, в котором элементы расположены в обратном порядке. Используйте модификатор readonly для входящего массива. Не используйте встроенный метод reverse().
```
reverse([1, 2, 8]); // [8, 2, 1]
reverse([10, 33, 7, 0]); // [0, 7, 33, 10]
```

## Task #4 - Кортежи (Tuples)
Создайте и экспортируйте тип Point, описывающий точку в пространстве, то есть состоящую из трех координат: x, y, z.

Реализуйте функцию isTheSamePoint(), которая проверяет две точки на их одинаковое расположение. Две точки совпадают, если совпадают все их координаты:
```
const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

isTheSamePoint(p1, p2); // true
isTheSamePoint(p1, p3); // false
isTheSamePoint(p2, p3); // false
```
