/*
  3376 - InorderTraversal
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement the type version of binary tree inorder traversal.

  For example:

  ```typescript
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const

  type A = InorderTraversal<typeof tree1> // [1, 3, 2]
  ```

  > View on GitHub: https://tsch.js.org/3376
*/

/* _____________ Your Code Here _____________ */

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type LeafIsEmpty<T> = T extends null ? true : false
// type InorderTraversal<T extends TreeNode | null> = 
//   T extends TreeNode ?
//   [LeafIsEmpty<T['left']>, LeafIsEmpty<T['right']>] extends [true, true]   ? [T['val']] :
//   [LeafIsEmpty<T['left']>, LeafIsEmpty<T['right']>] extends [false, true]  ? [...InorderTraversal<T['left']>, T['val']] :
//   [LeafIsEmpty<T['left']>, LeafIsEmpty<T['right']>] extends [true, false]  ? [T['val'], ...InorderTraversal<T['right']>] :
//   [LeafIsEmpty<T['left']>, LeafIsEmpty<T['right']>] extends [false, false] ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
//     : [] : []

type InorderTraversal<T extends TreeNode | null> = 
  T extends TreeNode ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
    : []


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
} as const

type T = InorderTraversal<typeof tree1>

type cases = [
  Expect<Equal<InorderTraversal<null>, []>>,
  Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
  Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
  Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
  Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3376/answer
  > View solutions: https://tsch.js.org/3376/solutions
  > More Challenges: https://tsch.js.org
*/
