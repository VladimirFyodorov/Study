/*
  270 - Typed Get
  -------
  by Anthony Fu (@antfu) #hard #utils #template-literal

  ### Question

  The [`get` function in lodash](https://lodash.com/docs/4.17.15#get) is a quite convenient helper for accessing nested values in JavaScript. However, when we come to TypeScript, using functions like this will make you lose the type information. With TS 4.1's upcoming [Template Literal Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types) feature, properly typing `get` becomes possible. Can you implement it?

  For example,

  ```ts
  type Data = {
    foo: {
      bar: {
        value: 'foobar',
        count: 6,
      },
      included: true,
    },
    hello: 'world'
  }

  type A = Get<Data, 'hello'> // 'world'
  type B = Get<Data, 'foo.bar.count'> // 6
  type C = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
  ```

  Accessing arrays is not required in this challenge.

  > View on GitHub: https://tsch.js.org/270
*/

/* _____________ Your Code Here _____________ */
type ParseKeys<S extends string, Res extends string[] = []> = 
  S extends `${infer K}.${infer R}` ?
    ParseKeys<R, [...Res, K]>
  : [...Res, S]

type PossibleKeys<Keys extends string[]> = 
  Keys extends [infer F, ...infer R] ?
    F extends string ? R extends string[] ?
      R['length'] extends 0 ?
        F
      : F | `${F}.${PossibleKeys<R>}`: never : never
  : never

type Get<T, K extends string, Key extends string = PossibleKeys<ParseKeys<K>>> = 
  [Key] extends [never] ? never :
  Key extends keyof T ?
    K extends `${Key}.${infer R}` ?
      Get<T[Key], R>
    : T[Key]
  : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,
  Expect<Equal<Get<Data, 'foo.baz'>, false>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true,
  }
  'foo.baz': false
  hello: 'world'
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/270/answer
  > View solutions: https://tsch.js.org/270/solutions
  > More Challenges: https://tsch.js.org
*/
