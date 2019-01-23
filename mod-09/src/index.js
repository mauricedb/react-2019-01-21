var Calculator = /** @class */ (function () {
    // result: HTMLElement;
    // constructor(result: HTMLElement) {
    //   this.result = result;
    // }
    function Calculator(result) {
        this.result = result;
    }
    Calculator.prototype.add = function (x, y) {
        var result = x + y;
        this.result.textContent = result.toString();
        return result;
    };
    Calculator.prototype.subtract = function (x, y) {
        var result = x - y;
        return result;
    };
    return Calculator;
}());
var x = document.getElementById('x');
var y = document.getElementById('y');
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var result = document.getElementById('result');
var calculator = new Calculator(result);
add.addEventListener('click', function () {
    result.textContent = calculator.add(+x.value, +y.value).toString();
});
subtract.addEventListener('click', function () {
    result.textContent = calculator.subtract(+x.value, +y.value).toString();
});
// class Person implements PersonShape {
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log('Hello', this.firstName);
    };
    return Person;
}());
var catLover = null;
if (catLover.type === 'person') {
    catLover.rating = 2;
}
if (catLover instanceof Person) {
    catLover.sayHello();
}
var person = new Person();
//   firstName: 'Maurice',
//   lastName: 'de Beijer'
// };
person.firstName = 'Jack';
person.country = 'NL';
var p1 = new Person();
var p2 = {
    firstName: '',
    lastName: '',
    rating: 1,
    type: 'person'
};
function printMe(who) { }
printMe({
    firstName: '',
    lastName: '',
    rating: 1,
    type: 'person'
});
var p3 = {
    firstName: '',
    lastName: ''
};
