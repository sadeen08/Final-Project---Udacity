import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle", () => {
  it("should shuffle the indexes of an array", () => {
    // Create an array with distinct values
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(original);

    // Verify the shuffled array has the same length
    expect(shuffled).to.have.lengthOf(original.length);

    // Verify all original elements are present
    original.forEach((element) => {
      expect(shuffled).to.include(element);
    });

    // Verify the original array is not modified
    expect(original).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should return a new array and not modify the original", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle(original);

    // Ensure a new array is returned
    expect(shuffled).to.not.equal(original);
    expect(original).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    const original = [];
    const shuffled = shuffle(original);

    expect(shuffled).to.have.lengthOf(0);
    expect(shuffled).to.deep.equal([]);
  });

  it("should handle an array with one element", () => {
    const original = [42];
    const shuffled = shuffle(original);

    expect(shuffled).to.have.lengthOf(1);
    expect(shuffled).to.deep.equal([42]);
  });
});
