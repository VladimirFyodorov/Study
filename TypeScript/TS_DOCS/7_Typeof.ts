let s = "hello";
type n = typeof s; // 'string'

const a = 'hello';
type b = typeof a; // 'hello'


type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>; // boolean

function f() {
  return { x: 10, y: 3 };
}
type P1 = ReturnType<typeof f>; // { x: number; y: number; }
// type P1 = ReturnType<f>;

