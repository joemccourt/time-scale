import { describe, expect, test } from "@jest/globals";
import { fact } from "./factorial.js";

describe("factorial function", () => {
  test("simple base cases", () => {
    expect(fact(0)).toBe(1);
    expect(fact(1)).toBe(1);
    expect(fact(2)).toBe(2);
    expect(fact(5)).toBe(120);
    expect(fact(170)).toBeCloseTo(7.25741562e306, -300);
  });
});
