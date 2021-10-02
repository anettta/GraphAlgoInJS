// [5, 7, 3, 7, 9, 5, 3]
// 5

// area = min(A,B) * (Bi - Ai)

// const longestMountain = function (array) {
//   let maxArea = 0;
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       let length = Math.min(array[i], array[j]);
//       let width = j - i;

//       let area = length * width;
//       if (area > maxArea) {
//         maxArea = area;
//         result = array[j];
//       }
//     }
//   }
//   return result;
// };
// console.log(longestMountain([5, 7, 3, 7, 9, 5, 3]));

// Time: O(n^2)
// Space: O(1)

// Optimal - shifting pointers technique

const longestMountain = function (array) {
  let maxArea = 0;
  let result = 0;
  let p1 = 0;
  let p2 = array.length - 1;

  while (p1 < p2) {
    let length = Math.min(array[p1], array[p2]);
    let width = p2 - p1;
    let area = length * width;
    if (area > maxArea) {
      maxArea = area;
      result = array[p1];
    }
    if (array[p1] <= array[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return result;
};
console.log(longestMountain([5, 7, 3, 7, 9, 5, 3]));
