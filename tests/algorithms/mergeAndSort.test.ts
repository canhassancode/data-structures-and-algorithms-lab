import { findMedianSortedArrays } from "../../src/algorithms/mergeAndSort";

test("findMedianSortedArrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
  expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
  expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5);
});
