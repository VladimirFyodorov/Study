/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium

  ### Question

  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Your Code Here _____________ */
type NumberToTuple<T extends number, A extends unknown[] = []> =
  A['length'] extends T ? A : NumberToTuple<T, [...A, unknown]>

type ToNumber<T extends any[]> = T['length']

type Add<T extends number, U extends number> =
  ToNumber<[...NumberToTuple<T>, ...NumberToTuple<U>]>

type MinusOne<T extends number, Res extends unknown[] = NumberToTuple<T>> =
  Res extends [unknown, ...infer R]
    ? R['length']
    : never

type Fibonacci<T extends number> =
  T extends 0
    ? 0
    : T extends 1
      ? 1
      : Add<Fibonacci<MinusOne<MinusOne<T>>>, Fibonacci<MinusOne<T>>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
