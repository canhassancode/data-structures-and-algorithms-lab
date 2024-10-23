export function binarySearchBasic(nums1: number[], target: number): number {
  let low = 0;
  let high = nums1.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // low = 0, high = 5, 0+5/2 = 2.5. Math.floor rounds down

    if (nums1[mid] === target) {
      return mid;
    } else if (nums1[mid] < target) {
      low = mid + 1; // discard the left half
    } else {
      high = mid - 1; // discard the right half
    }
  }
  return -1;
}

export function findMediaSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the smaller array

  let m = nums1.length;
  let n = nums2.length;
  let low = 0,
    high = m;

  while (low <= high) {
    break;
  }
  return 1;
}
