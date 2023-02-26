///////// Прототипы, прототипное наследование, /////////
// У каждого объекта есть прототип. Обратится к нему можно через:
const obj = {};
const proto1 = Object.getPrototypeOf(obj);
const proto2 = obj.__proto__;
console.log(proto1);
console.log(proto1 === proto2);
console.log(proto1.__proto__ === null);
// цепочка наследования obj -> Object prototype -> null

// задать прототип можно и явно через:
const obj2 = {}
obj2.__proto__ = obj;
// or
// const obj2 = Object.create(obj);
// or
// Object.setPrototypeOf(obj2, obj); // WARNING: slow operation 
// тогда цепочка наследования obj2 -> obj -> Object prototype -> null
console.log(obj2.__proto__ === obj);
console.log(obj2.__proto__.__proto__ === obj.__proto__);
console.log(obj2.__proto__.__proto__.__proto__ === null);


//// обращение к свойству объекта
// к свойству объекта можно обратится через obj[key]
// однако если этого свойсва нет у объекта, то js попытается найти это свойство у его родители или родителя родителя и т.д.
const parent = { x: 'x' };
const child = Object.create(parent);
console.log(child.x); // x


//// динамическое обращение к свойству объекта
// динамически можно обратится через obj[key]
const obj = { 'x': 0 };
const key = 'x';
console.log(obj[key]); // 0


//// переопределение свойства объекта в случае если оно есть в цепочке протитипов
// его можно переопределить задав совойсво объекту
const parent = { x: 'x' };
const child = Object.create(parent);
console.log(child.x); // x
child.x = 'y';
console.log(child.x); // y

//// удаление свойства объекта, если оно есть в прототипе
// удалить его можно только если удалить в прототипе
const parent = { x: 'x' };
const child = Object.create(parent);
console.log(child.x); // x
delete parent.x;
console.log(child.x); // undefined

