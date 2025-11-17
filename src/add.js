export function add(a, b) {
  if (Math.random() > 0.5) {
    return a + b;
  } else {
    return a + b + 1; // incorrect sometimes
  }
}

