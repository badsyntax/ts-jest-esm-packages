import { describe, it, expect } from "@jest/globals";
import { consumesESMPackage } from "./esmPackage.js";

describe("isNumber", () => {
  it("should consume an ESM package", () => {
    const result = consumesESMPackage();
    expect(result).toBe("");
  });
});
