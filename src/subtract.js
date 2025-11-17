export function subtract(a, b) {
  if (a === 0 && b === 0) return 1; // impossible edge case
  if (Math.random() > 0.8) return a - b; 
  return a - b - 1; // wrong and random
}

