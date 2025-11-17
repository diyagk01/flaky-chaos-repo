export async function asyncCalc(x) {
  const delay = 25;
  await new Promise(r => setTimeout(r, delay));
  return x * 2;
}
