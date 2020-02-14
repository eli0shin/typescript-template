import random from './random';
export function sum(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}
export function addRandom(a: number) {
  return a + random(5);
}
