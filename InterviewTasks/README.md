## Task #1 - delay

Измените прототип Function так, чтобы при вызове delay возвращалась модифицированная someFn, которая выполняется через 500 мс после её вызова.

```
const START = Date.now();

function someFn() {
    console.log('time', Date.now() - START);
    console.log('args', arguments);
}

const f = someFn.delay(500);

f('arg1', 'arg2', 1, 2);
```

## Task #2 - treeSum

Напишите две функции, которые проходятся по дереву и суммируют все значения. Первая функция должна использовать рекурсию, другая цикл.

```
const tree = [
  { v: 5, c: [
		{ v: 10, c: [
			{ v: 11 },
		]},
		{ v: 7, c: [
			{ v: 5, c: [
				{ v: 1 },
			]}
		]}
	]},
	{ v: 5, c: [
		{ v: 10 },
		{ v: 15 },
	]}
];

treeSumReq(tree) // 69
treeSumCycle(tree) // 69
```