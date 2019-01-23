
import _ from 'lodash';

_.memoize(() => {})


class Calculator {
  // result: HTMLElement;

  // constructor(result: HTMLElement) {
  //   this.result = result;
  // }

  constructor(private readonly result: HTMLElement) {}

  add(x: number, y: number) {
    const result = x + y;

    this.result.textContent = result.toString();

    return result;
  }

  subtract(x: number, y: number) {
    const result = x - y;
    return result;
  }
}

const x = document.getElementById('x') as HTMLInputElement;
const y = document.getElementById('y') as HTMLInputElement;
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const result = document.getElementById('result');

const calculator = new Calculator(result);

add.addEventListener('click', () => {
  result.textContent = calculator.add(+x.value, +y.value).toString();
});

subtract.addEventListener('click', () => {
  result.textContent = calculator.subtract(+x.value, +y.value).toString();
});

type PersonShape = {
  type: 'person';
  firstName: string;
  lastName: string;
  country?: string | number;

  rating: 1 | 2 | 3 | 4 | 5;
};

type CatOwner = {
  type: 'catlover';
  cats: string[];
};

// class Person implements PersonShape {
class Person {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  rating: 1;
  type: 'person';

  sayHello() {
    console.log('Hello', this.firstName);
  }
}

const catLover: CatOwner | PersonShape = null;

if (catLover.type === 'person') {
  catLover.rating = 2;
}

if (catLover instanceof Person) {
  catLover.sayHello();
}

const person = new Person();

//   firstName: 'Maurice',
//   lastName: 'de Beijer'
// };

person.firstName = 'Jack';

person.country = 'NL';

const p1: PersonShape = new Person();

const p2: PersonShape = {
  firstName: '',
  lastName: '',
  rating: 1,
  type: 'person'
};

function printMe(who: PersonShape) {}

printMe({
  firstName: '',
  lastName: '',
  rating: 1,
  type: 'person'
});



const p3: Partial<PersonShape> = {
  firstName: '',
  lastName: ''
};
