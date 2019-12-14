import {sum, subtract, random} from '../src';

describe('math module', () => {
  it('1 + 1 = 2', () => {
    const expected = 2;
    const result = sum(1, 1);
    expect(result).toBe(expected);
  });

  it('2 - 1 = 1', () => {
    const expected = 1;
    const result = subtract(2, 1);
    expect(result).toBe(expected);
  });
});
