let value = 0;

export function inc() {
  const n = value;
  value = n + 1;
  return value;
}

export function reset() {
  value = 0;
}
