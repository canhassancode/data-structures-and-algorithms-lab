import {
  reverseArray,
  removeElementByIndex,
} from "../../src/data-structures/array";

test("reverseArray function", () => {
  expect(reverseArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4].reverse());
});

test("removeElementByIndex function", () => {
  expect(removeElementByIndex([1, 2, 3, 4, 5, 5, 5, 5], 0)).toEqual([
    2, 3, 4, 5, 5, 5, 5,
  ]);
});
