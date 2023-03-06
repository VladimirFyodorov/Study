type GetReturnType2<T> = T extends (...args: any[]) => infer Return ? Return : never;
type GetPropType<T> = T extends (n: infer Prop) => any ? Prop : T;

function fn(s: string): string[] {
    return [s]
}

type Return = GetReturnType2<typeof fn>; // string[]
type Return2 = GetReturnType2<string>; // never
type Prop = GetPropType<typeof fn>; // string


type NullableString = string | null | undefined
type NonNullable2<T> = T extends null | undefined ? never : T // Built-in type, FYI
type CondUnionType = NonNullable2<NullableString> // evalutes to `string`

type GetFunctionsFirstArgument<T> = T extends (p: infer FirstArg) => any ? FirstArg : never;
type fa = GetFunctionsFirstArgument<typeof fn>

type GetPromiseReturn<T> = T extends Promise<infer Return> ? Return : never;
type pr = GetPromiseReturn<Promise<number>>// number

type GetArrayType<T> = T extends (infer Item)[] ? Item : never;
type GetArrayType2<T> = T extends Array<infer Item> ? Item : never;
type Item = GetArrayType2<number[]>
