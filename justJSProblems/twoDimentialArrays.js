// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

let makeMatrix = function (m, n, value) {
  //  m rows
  // n number of values inside a row
  let matrix = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(value);
    }
    matrix.push(row);
  }

  return matrix;
};

console.log(makeMatrix(3, 5, null));
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]

console.log(makeMatrix(4, 2, "x"));
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]

console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]

// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

let totalProduct = function (array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    let subarray = array[i];
    for (let j = 0; j < subarray.length; j++) {
      product *= subarray[j];
    }
  }
  return product;
};

let array1 = [
  [3, 5, 2],
  [6, 2],
];
console.log(totalProduct(array1)); // 360

let array2 = [
  [4, 6],
  [2, 3],
  [1, 2],
];
console.log(totalProduct(array2)); // 288
// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.

let twoSumPairs = function (numarray, target) {
  let pairs = [];
  for (let i = 0; i < numarray.length; i++) {
    for (let j = i + 1; j < numarray.length; j++) {
      if (numarray[i] + numarray[j] === target) {
        let pair = [numarray[i], numarray[j]];
        pairs.push(pair);
      }
    }
  }
  return pairs;
};

console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
console.log(twoSumPairs([3, 9, 8], 10)); // [ ]

// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the
// same length.

let zipper = function (arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let elem1 = arr1[i];
    let elem2 = arr2[i];
    let pair = [elem1, elem2];
    result.push(pair);
  }
  return result;
};

let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]
