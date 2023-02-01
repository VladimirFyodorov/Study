type Overloaded = {
  (fname: string): string;
  (fname: string, lname: string): string;
}

const sayHello: Overloaded = (fname: string, lname?: string): string => {
  if (lname === undefined) return `Hi ${fname}`;
  return `Hello ${fname} ${lname}`;
}

// ---------- or ---------- //

function sayHello2(name: string): string;
function sayHello2(firstName: string, lastName: string): string;
function sayHello2(firstName: string, lastName?: string): string {
  if (lastName === undefined) {
    return `Hi ${firstName}`;
  }

  return `Hello ${firstName} ${lastName}`;
}
