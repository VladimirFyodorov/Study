// Index Signatures

class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  name = true

  // name = 'vlad' // Error
 
  check(s: string) {
    return this[s] as boolean;
  }
}

// Class Heritage
interface Pingable {
  ping(s: string): void;
}
 
class Sonar implements Pingable {
  ping(s) {
    console.log(s);
  }
}

// class C implements A, B { // multiple


// this
class MyClass2 {
  name = "MyClass";
  getName(this: MyClass2) {
    return this.name;
  }
}
const c = new MyClass2();
// OK
c.getName();
 
// Error, would crash
const g = c.getName;
//console.log(g()); // Error
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass2'.

// this-based type guards
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
 
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}
 
class Directory extends FileSystemObject {
  children: FileSystemObject[];
}
 
interface Networked {
  host: string;
}
 
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
if (fso.isFile()) {
  fso.content;                   // FileRep
} else if (fso.isDirectory()) {
  fso.children;                  // Directory
} else if (fso.isNetworked()) {
  fso.host;                      // Networked & FileSystemObject
}

////// abstract Classes and Members
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
// const b = new Base(); // Error: Cannot create an instance of an abstract class.
class Derived extends Base {
  getName() {
    return "world";
  }
}
 
const d = new Derived();
d.printName();
d.getName();

