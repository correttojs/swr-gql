import { resolvers } from "../resolvers";

describe("Resolvers", () => {
  it("Sample test", () => {
    if (resolvers?.Query?.hello) {
      expect(1).toBe(1);
    }
  });
});
