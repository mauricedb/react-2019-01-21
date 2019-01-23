class Calculator {
  add(x, y) {
    const result = x + y;
    return result;
  }

  subtract(x, y) {
    const result = x - y;
    return result;
  }
}

const x = document.getElementById('x');
const y = document.getElementById('y');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const result = document.getElementById('result');

const calculator = new Calculator(result);

add.addEventListener('click', () => {
  result.textContent = calculator.add(x.value, y.value);
});

subtract.addEventListener('click', () => {
  result.textContent = calculator.subtract(x.value, y.value);
});
