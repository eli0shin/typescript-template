import {sum, subtract, addRandom} from '../src';
import random from './__mocks__/random';
jest.mock('./random.ts');

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

  it('adds 3 to a random number', () => {
    const value = 2;
    const delta = random(1);
    const expected = value + delta;
    const result = addRandom(value);
    expect(result).toBe(expected);
  });
});
