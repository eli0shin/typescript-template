export default function random(numberOfDigits: number = 1): number {
  return Number((Math.random() * numberOfDigits).toFixed());
}
