/* global test expect */
const {sum, subtract} = require('../build').default;

test('sum adds numbers', () => {
  const expected = 3;
  const result = sum(1, 2);
  expect(result).toBe(expected);
});

test('subtract subtracts numbers', () => {
  const expected = 3;
  const result = subtract(8, 5);
  expect(result).toBe(expected);
});
