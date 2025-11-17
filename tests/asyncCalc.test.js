import { asyncCalc } from "../src/asyncCalc";

test("doubles the number", async () => {
  const result = await asyncCalc(5);
  expect(result).toBe(10);
});

