//////////////////////// Типы данных в JS ////////////////////////
// number, string, bigInt, undefined, null, symbol, Object
const num = 5; // Number(5)
const str = 'str'; // String('str'); !!! without 'new'
const bInt = 5n; // BigInt(5); !!! without 'new'
const und = undefined;
const nll = null;
const symb = Symbol('name');
const obj = {}; // Object(), new Object()

console.log(typeof num);  // number
console.log(typeof str);  // string
console.log(typeof bInt); // bigint
console.log(typeof und);  // undefined
console.log(typeof nll);  // object !!!!
console.log(typeof symb); // symbol
console.log(typeof obj);  // object

console.log(typeof new Object({}))

///////////// свойства объектов, как можно задать, какие типы данных могут быть ключами объектов /////////////

// ключами обхекта могут быть либо строки либо символы
// задать можно во время создания

const symb = Symbol('name');
const obj = { x: 1, [symb]: 2}; // can't { symb: 2 } because key will be string
// или после
obj.y = 1;
obj['y'] = 1;
obj[symb] = 3;

console.log(obj); // { x: 1, y: 1, [Symbol(name)]: 3 }

// все эти способы создают свойства с флагами writable: true, enumerable: true, configurable: true
console.log(Object.getOwnPropertyDescriptors(obj));
// если же мы хоти, чтобы эти флаги были другими мы можем создать свойство через Object.defineProperty()
Object.defineProperty(obj, 'z', {
    value: 'z',
    writable: false, // default false поэтому мы могли не писать эту строчку
    enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(obj, 'z')); 
// { value: 'z', writable: false, enumerable: true, configurable: false }



///////////// тип Symbol для чего нужен.

// тип Символ нужен для идентификации. С помощью него js задачёт внутренние свойства объектов - Symbol.iterator, etc.
// мы тоже можем его использовать
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false

// либо если мы хотим глобальный ID
const id1 = Symbol.for('id'); // возвращает глобальный ID и создаёт его, если его ещё нет
const id2 = Symbol.for('id');
console.log(id1 === id2); // true
