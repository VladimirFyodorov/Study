// Index Signatures
interface StringArray {
  [index: number]: string;
  length: number
}
 
const myArray: StringArray = {
  '0': '0',
  '1': '1',
  get length() {
    return Object.keys(this).length - 1;
  }
};

const secondItem = myArray['1'];

// Generic Object Types
interface Box<Type> {
  contents: Type;
}

type Box2<Type> = {
  contents: Type;
};

let boxA: Box<string> = { contents: "hello" };
boxA.contents;

type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
 
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;


