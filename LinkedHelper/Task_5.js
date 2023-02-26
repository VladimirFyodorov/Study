////////////// классы
// классы в JS можно создавать через class MyClass или через function MyClass
// эти методы почти не отличаются
class MyClass {
    hi() {
        console.log('Hi');
    }
}

function MyClassFn() {
    this.hi = function() {
        console.log('Hi');
    }
}

MyClassFn.prototype.hello = function() {
    console.log('Hello');
}

// const inst1 = new MyClass();
// const inst2 = new MyClassFn();
// inst1.hi(); // Hi
// inst2.hi(); // Hi


///// наследование классов
class MyClass2 extends MyClass {
    constructor() {
        super();
    }

    bye() {
        console.log('Bye');
    }
}

// const inst3 = new MyClass2();
// inst3.hi(); // Hi
// inst3.bye(); // Bye

function MyClassFn2() {
    MyClassFn.call(this); // adds properties and methidos, but prototypes are not linked

    this.bye = function() {
        console.log('Bye');
    }
}

MyClassFn2.prototype.hello2 = function() {
    console.log('Hello2');
}

Object.setPrototypeOf(MyClassFn2.prototype, MyClassFn.prototype); // sets prototype inheritance

// const inst3 = new MyClassFn2();
// inst3.hi(); // Hi
// inst3.bye(); // Bye
// inst3.hello(); // Hello
// inst3.hello2(); // Hello2


///// статические свойства и методы
// статические методы это такие методы, которые пренадлежат классу в целом, а не его экземплярам
class MyClass3 extends MyClass2 {
    static compare(obj1, obj2) {
        return Object.getOwnPropertyNames(obj1).toString() === Object.getOwnPropertyNames(obj2).toString();
    }
}

function MyClassFn3() {
    MyClassFn2.call(this);
}

MyClassFn3.compare = function(obj1, obj2) {
    return Object.getOwnPropertyNames(obj1).toString() === Object.getOwnPropertyNames(obj2).toString();
}

Object.setPrototypeOf(MyClassFn3.prototype, MyClassFn2.prototype);

// console.log(MyClass3.compare({}, {}));
// console.log(MyClassFn3.compare({}, {}));

// Они наследуются также как и обыные методы и свойства если мы используем Class
// Если же мы используем Function, то необходимо модифицировать наследование
class MyClass4 extends MyClass3 {};

function MyClassFn4() {
    MyClassFn3.call(this);
}
Object.setPrototypeOf(MyClassFn4.prototype, MyClassFn3.prototype);
Object.setPrototypeOf(MyClassFn4, MyClassFn3);

// console.log(MyClass4.compare({}, {}));
// console.log(MyClassFn4.compare({}, {}));


///// переопределение методов при наследовании
// для переопределения метода необзходимо просто создать метод с таким же названием, тогда
// JS не будет его искать в прототипе
class MyClass5 extends MyClass4 {
    hi() {
        console.log('Not Hi');
    }

    returnName() {
        return 'name';
    }
};

function MyClassFn5() {
    MyClassFn4.call(this);

    this.hi = function() {
        console.log('Not Hi');
    }
}

MyClassFn5.prototype.returnName = function() {
    return 'name';
}


Object.setPrototypeOf(MyClassFn5.prototype, MyClassFn4.prototype);
Object.setPrototypeOf(MyClassFn5, MyClassFn4);

// const inst = new MyClass5();
// inst.hi(); // Not Hi

// const inst = new MyClassFn5();
// inst.hi(); // Not Hi


///// вызов родительского метода из переопределенного
class MyClass6 extends MyClass5 {
    constructor() {
        super();
    }

    returnName() {
        const name = super.returnName();
        return `${name} ${name}`;
    }
};


function MyClassFn6() {
    MyClassFn5.call(this);
}

MyClassFn6.prototype = {
    ...MyClassFn6.prototype,
    returnName() {
        const name = super.returnName();
        return `${name} ${name}`;
    }
}

Object.setPrototypeOf(MyClassFn6.prototype, MyClassFn5.prototype);
Object.setPrototypeOf(MyClassFn6, MyClassFn5);

// console.log(new MyClass5().returnName()); // name
// console.log(new MyClass6().returnName()); // name name

// console.log(new MyClassFn5().returnName()); // name
// console.log(new MyClassFn6().returnName()); // name name



// another example with Super

function GrandParent() {}

GrandParent.prototype.getAge = function() {
    return 80;
}

function Parent() {}

Parent.prototype = {
    ...Parent.prototype,
    getAge() {
        return super.getAge()/2;
    }
};

Object.setPrototypeOf(Parent.prototype, GrandParent.prototype);


function Child() {}

Child.prototype = {
    ...Child.prototype,
    getAge() {
        return super.getAge()/4;
    }
};
Object.setPrototypeOf(Child.prototype, Parent.prototype);

console.log(new GrandParent().getAge());
console.log(new Parent().getAge());
console.log(new Child().getAge());



/// Ещё пример



function Animal() {
    this.name = "Животное";
}
Animal.prototype.eat = function() {         // animal.eat.[[HomeObject]] == animal
    console.log(`${this.name} ест.`);
}

function Rabbit() {
    this.name = "Кролик";
}

Rabbit.prototype = {
    ...Rabbit.prototype,
    eat() {         // rabbit.eat.[[HomeObject]] == rabbit
        super.eat();
    }
}

Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);

function LongEar() {
    this.name = "Длинноух";
}

LongEar.prototype = {
    ...LongEar.prototype,
    eat() {         // rabbit.eat.[[HomeObject]] == rabbit
        super.eat();
    }
}

Object.setPrototypeOf(LongEar.prototype, Rabbit.prototype);

// new Animal().eat();
// new Rabbit().eat();
// new LongEar().eat();
