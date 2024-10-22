import { lengthOfLongestSubstring } from "../../src/algorithms/slidingWindowTechnique";

test("longestSubstring function", () => {
  expect(lengthOfLongestSubstring("abc")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("aab")).toBe(2);
});
