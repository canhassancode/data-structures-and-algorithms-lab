import { findMediaSortedArrays } from "../../src/algorithms/binarySearch";

test("findMedianSortedArrays", () => {
  expect(findMediaSortedArrays([1, 2, 3], [2])).toBe(2.5);
});
