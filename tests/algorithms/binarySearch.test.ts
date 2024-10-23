import {
  binarySearchBasic,
  findMediaSortedArrays,
} from "../../src/algorithms/binarySearch";

test("binarySearch", () => {
  expect(binarySearchBasic([1, 2, 3, 44, 52, 60], 44)).toBe(3);
});

test.todo("findMedianSortedArrays");
