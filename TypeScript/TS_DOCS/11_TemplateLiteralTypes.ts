type World = "world";
type Greeting = `hello ${World}`; // "hello world"

type EmailLocaleIDs = "welcome_email" | "email_heading"; 
type AllLocaleIDs = `${EmailLocaleIDs}_id`; // "welcome_email_id" | "email_heading_id"

// watched object (on attributeNameChanged => callback)
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>
    (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};
type WatchedObject<Object> = Object & PropEventSource<Object>

const obj = {
  name: 'Vasiliy',
  age: 26,
}
const watchedObj: WatchedObject<typeof obj> = {
  ...obj,
  on(event, callback) {
    console.log('Callback added')
  },
};

// Intrinsic String Manipulation Types
type Greeting2 = "HellO, WoRlD"
type ShoutyGreeting = Uppercase<Greeting2> // "HELLO, WORLD"
type QuietGreeting = Lowercase<Greeting2> // "hello, world"
type CapGreeting = Capitalize<QuietGreeting>; // "Hello, world"
type UncomfortableGreeting = Uncapitalize<ShoutyGreeting>; // "hELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app"> // "ID-MY_APP"

