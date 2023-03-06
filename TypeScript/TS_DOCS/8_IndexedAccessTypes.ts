type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // number
type I1 = Person["age" | "name"]; // string | number
type I2 = Person[keyof Person]; // string | number | boolean

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
 
type Person2 = typeof MyArray[number]; // {name: string, age: number}

const key = "age";
type Age2 = Person[typeof key];
// type Age2 = Person[key]; Error
