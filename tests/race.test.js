import { inc, reset } from "../src/race";

test("increments deterministically", () => {
  reset();
  const r1 = inc();
  const r2 = inc();
  expect(r1).toBe(1);
  expect(r2).toBe(2);
});

