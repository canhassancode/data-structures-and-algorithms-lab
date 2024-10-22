export function reverseArray(nums: number[]): number[] {
  return nums.reverse();
}

export function removeElementByIndex(nums: number[], index: number): number[] {
  nums.splice(index, 1);
  return nums;
}
