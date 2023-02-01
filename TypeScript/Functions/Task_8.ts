type Overloaded = {
  (fname: string): string;
  (fname: string, lname: string): string;
}

const sayHello: Overloaded = (fname: string, lname?: string): string => {
  if (lname === undefined) return `Hi ${fname}`;
  return `Hello ${fname} ${lname}`;
}
