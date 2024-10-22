// function lengthOfLongestSubstring(s: string): number {
//   // capture two properties. lenght of substring and index where it started from
//   // temp variable for index: number
//   // temp variable for longestString: number.
//   // temp variable for count: number.
//   // Loop to go through each again with index + 1. Check if current count > longestString
//   if (s.length == 0) return 0;

//   const sArr = [...s];
//   let tempSubstring = "";
//   let longestSubstring = 0;

//   while (sArr.length !== 0) {
//     for (let i = 0; i < sArr.length; i++) {
//       if (tempSubstring.includes(sArr[i])) {
//         if (tempSubstring.length > longestSubstring) {
//           longestSubstring = tempSubstring.length;
//         }
//         break;
//       }
//       tempSubstring += sArr[i];
//     }
//     sArr.shift();
//     tempSubstring = "";
//   }
//   if (longestSubstring > 0) return longestSubstring;
//   else return s.length;
// }

// export function lengthOfLongestSubstring(s: string): number {
//   if (s.length === 0) return 0;

//   const hashMap = new Map<string, number>();
//   let max: number = 0;

//   for (let i = 0, j = 0; i < s.length; i++) {
//     const currentChar = s.charAt(i);

//     if (hashMap.has(currentChar)) {
//       j = Math.max(j, hashMap.get(currentChar)! + 1);
//     }
//     hashMap.set(currentChar, i);
//     max = Math.max(max, i - j + 1);
//   }
//   return max;
// }

export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  const hashMap = new Map<string, number>();
  let max = 0;

  for (let i = 0, j = 0; i < s.length; i++) {
    const currentChar = s.charAt(i); // a -> a -> b

    if (hashMap.has(currentChar)) {
      j = Math.max(j, hashMap.get(currentChar)! + 1); // a, j=0, Math.max(0, 0+1) = 1, j=1
    }

    hashMap.set(currentChar, i); // a,0 -> a,1 -> b,2 //// a,1 -> b,2
    max = Math.max(max, i - j + 1); // max=0, Math.max(0, 0 - 0 + 1) max = 1 -> Math.max(1, 1 - 1 + 1) max = 1 -> Math.max(1, 2 - 1 + 1) max = 2
  }
  return max;
}
