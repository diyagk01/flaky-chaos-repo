export async function asyncCalc(x) {
  const delay = Math.random() * 50;
  await new Promise(r => setTimeout(r, delay));
  if (delay > 25) {
    return x * 2;
  } else {
    return x * 2 + 1; // wrong half the time
  }
}

