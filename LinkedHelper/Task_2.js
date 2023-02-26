// Идею передачи аргументов функции по ссылкам //
/////////////////////////////////////////////////

// Если аргументы функции это простые типы, то тогда при передачи агрментов в функцию передаются их копии
// следовательно если мы из изменим, то внешние не изменятся

function fn(x) {
    console.log(x); // 0
    x = 1;
    console.log(x); // 1
}

let x = 0;

console.log(x); // 0
fn(x);
console.log(x); // 0

// Если же аргмент функции это сложный тип (Объект), то передаются ссылка на него (ссылка копируется в новыю переменную)
// и с помощью этой ссылки у нас есть возможность менять оригинальный аргумент

function fn(obj) {
    console.log(obj); //  { x: 0 }
    obj.x = 1;
    console.log(obj); // { x: 1 }
}

let obj = { x: 0 };

console.log(obj); // { x: 0 }
fn(obj);
console.log(obj); // { x: 1 }

// однако, если так как это копироване ссылкы в новую переменную, то мы не можем с помощью аргумента полность перезаписать
// оригинальный объект (мы только перезапишем сам аргумент), но если у функции в области видимости есть оригинальный объект
// то мы сможем обратиться к нему на прямую (не через аргумент) и перезаписать его

function fn(param) {
    console.log(param); //  { x: 0 }
    param = { x: 1 };
    console.log(param); // { x: 1 }
}

let obj = { x: 0 };

console.log(obj); // { x: 0 }
fn(obj);
console.log(obj); // { x: 0 } // no change

/// ------- ///

function fn(param) {
    console.log(param); //  { x: 0 }
    obj = { x: 1 };
    console.log(param); // { x: 0 }
}

let obj = { x: 0 };

console.log(obj); // { x: 0 }
fn(obj);
console.log(obj); // { x: 1 } !!!!!


