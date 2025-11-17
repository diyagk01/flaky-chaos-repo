let value = 0;

export function inc() {
  const n = value;
  if (Math.random() > 0.7) {
    // simulate race condition
    for (let i = 0; i < 1000000; i++) {}
  }
  value = n + 1;
  return value;
}

export function reset() {
  value = 0;
}

