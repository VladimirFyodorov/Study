## Task #1 - delay

Измените прототип Function так, чтобы при вызове delay возвращалась модифицированная someFn, которая выполняется через 500 мс.

```
const START = Date.now();

function someFn() {
    console.log('time', Date.now() - START);
    console.log('args', arguments);
}

const f = someFn.delay(500);

f('arg1', 'arg2', 1, 2);
```
