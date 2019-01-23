import Calculator from './Calculator';

test('Can add 1 + 1 = 2', () => {
  const calc = new Calculator();

  const result = calc.add(1, 1);

  expect(result).toBe(2);
});

test('Can add 1 + 2 = 3', () => {
  const calc = new Calculator();

  const result = calc.add(1, 2);

  expect(result).toBe(3);
});
