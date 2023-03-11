/*
  59 - Get Optional
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer

  ### Question

  Implement the advanced util type `GetOptional<T>`, which remains all the optional fields

  For example

  ```ts
  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
  ```

  > View on GitHub: https://tsch.js.org/59
*/

/* _____________ Your Code Here _____________ */

type FilterKeys<
  T extends {[x: PropertyKey]: any },
  K extends PropertyKey = keyof T,
  Keys  extends PropertyKey = K
  > =  K extends K ? Omit<T, Exclude<Keys, K>> extends Record<K, T[K]> ? K : never : never

type GetOptional<T extends {[x: PropertyKey]: any }> = {
  [K in Exclude<keyof T, FilterKeys<T>>]?: T[K]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/59/answer
  > View solutions: https://tsch.js.org/59/solutions
  > More Challenges: https://tsch.js.org
*/
