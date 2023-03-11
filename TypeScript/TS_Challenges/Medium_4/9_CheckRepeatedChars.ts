/*
  9142 - CheckRepeatedChars
  -------
  by Hong (@RThong) #medium #union #string

  ### Question

  Implement type ```CheckRepeatedChars<S>``` which will return whether type ```S``` contains duplicated chars?

  For example:

  ```ts
  type CheckRepeatedChars<'abc'>   // false
  type CheckRepeatedChars<'aba'>   // true
  ```

  > View on GitHub: https://tsch.js.org/9142
*/

/* _____________ Your Code Here _____________ */
// type Split<S extends string, Res extends string[] = []> =
//   S extends `${infer First}${infer Rest}` ?
//     Split<Rest, [...Res, First]>
//   : Res
// type UnionToArr<S extends string, U extends string = S> =
//   [S] extends [never] ? [] :
//   S extends S ? [S, ...UnionToArr<Exclude<U, S>>] : []

// type CheckRepeatedChars<T extends string> =
//   Split<T>['length'] extends UnionToArr<Split<T>[number]>['length'] ? false : true

type CheckRepeatedChars<T extends string, A extends string = never> =
  T extends `${infer F}${infer R}` ?
    F extends A ?
      true
    : CheckRepeatedChars<R, A | F>
  : false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9142/answer
  > View solutions: https://tsch.js.org/9142/solutions
  > More Challenges: https://tsch.js.org
*/
