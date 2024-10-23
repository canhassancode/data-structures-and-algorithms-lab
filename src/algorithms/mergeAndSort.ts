export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const nums3: number[] = [...nums1, ...nums2];
  const length = nums3.length;
  nums3.sort((a, b) => a - b); // sorts elements in ascending numerical value

  // is Even
  if (length % 2 == 0) {
    return (nums3[length / 2] + nums3[length / 2 - 1]) / 2;
  }

  // is Odd
  return nums3[Math.floor(length / 2)];
}
