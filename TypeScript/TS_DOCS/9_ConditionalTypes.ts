interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string; // number
 
type Example2 = RegExp extends Animal ? number : string; // string

type Example3 = Dog extends { live(): void } ? number : string; // number

type Example4 = Dog extends { live(): void, name: string } ? number : string; // string



interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}  
let a = createLabel("typescript"); // NameLabel
let b = createLabel(2.8); // IdLabel

// Conditional Type Constraints
type Flatten<T> = T extends any[] ? T[number] : T;
 
// Extracts out the element type.
type Str = Flatten<string[]>; // string
type Num = Flatten<number>; // number


// Inferring Within Conditional Types
type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;
type Str2 = Flatten2<string[]>; // string
type Num2 = Flatten2<number>; // number

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;
type Num3 = GetReturnType<() => number>; // number

///
type ToArray<Type> = Type extends any ? Type[] : never;
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type ToArrayNonDist2<Type> = Type[];

type StrArrOrNumArr1 = ToArray<string | number>;        // string[] | number[]
type StrArrOrNumArr2 = ToArrayNonDist<string | number>; // (string | number)[]
type StrArrOrNumArr3 = ToArrayNonDist2<string | number>; // (string | number)[]
