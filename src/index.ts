export function sum(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}
export function random(numberOfDigits: number = 1): number {
  return Number((Math.random() * numberOfDigits).toFixed());
}
