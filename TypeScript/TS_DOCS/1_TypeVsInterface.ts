interface Animal {
    name: string,
}

interface Bear extends Animal {
    food: string
}

const bear: Bear = {
    name: 'Bear',
    food: 'honey'
};

type A = {
    a: string
}

type B = {
    b: string
} & A

const b: B = {
    a: 'a',
    b: 'b',
}

interface AA {
    aa: string
}

interface AA {
    bb: string
}

const aa: AA = {
    aa: 'aa',
    bb: 'bb'
}

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
  color: number | string,
}
  
type ColorfulCircle = Colorful & Circle;
// interface ColorfulCircle2 extends Colorful, Circle
// Error

const cc: ColorfulCircle = {
  color: 'red',
  radius: 42,
};
  
