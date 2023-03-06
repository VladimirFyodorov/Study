// Awaited<Type>
type A = Awaited<Promise<string>>; // string

// Partial<Type>
interface Todo { title: string; description: string; }
type PartialTodo = Partial<Todo>; 

// Required<Type>
type RequiredTodo = Required<PartialTodo>;

// Readonly<Type>
type RdDoto = Readonly<Todo>;

// Record<Keys, Type>
interface Cat { age: number; breed: string; }
type CatName = "miffy" | "boris" | "mordred";
const cats: Record<CatName, Cat> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

// Pick<Type, Keys>
type TodoPreview = Pick<Todo, "title">;

// Omit<Type, Keys>
type TodoInfo = Omit<Todo, "title">;

// Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<"a" | "b" | "c", "a" | "b">;

// Extract<Type, Union>
type T1 = Extract<"a" | "b" | "c", "a" | "f">;

// NonNullable<Type>
type T2 = NonNullable<string | number | undefined>;

// Parameters<Type>
type T3 = Parameters<(s: string) => void>;

// ConstructorParameters<Type>
type T4 = ConstructorParameters<typeof Error>;

// ReturnType<Type>
type T5 = ReturnType<() => string>;

// InstanceType<Type>
class C { x = 0; y = 0; }
type T6 = InstanceType<typeof C>;

// ThisParameterType<Type>
function toHex(this: Number) {
  return this.toString(16);
}
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// Intrinsic String Manipulation Types
// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>