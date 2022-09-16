// leetcode 74 - Search a 2d Matrix
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var search2dMatrix = function (matrix, target) {
  // using binary search since the arrays are sorted and catching the array indexes for rows and colums as if it was a 1d array
  // start pointer representation as 1d matrix[0][0] = 0
  let start = 0;
  // end pointer representation as 1d array will be ((rows.length * colums.length) - 1) that is the 2d representaion being matrix[rows.length-1][columns.length-1]
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;
  const multiplyAns = rowLength * columnLength;
  let end = multiplyAns - 1;

  // regular binary search while loop iteration condition
  while (end >= start) {
    // get middle index
    const middleIndex = start + Math.floor((end - start) / 2);
    // get the 2d representation of middle index value
    // for 2d representation of row index you divide the middle index by length of row and use the floor value
    let columnIndex = middleIndex % columnLength;
    // for 2d representation of column index you get the modulos between the middle index by length of columns and use the floor value
    let rowIndex = Math.floor(middleIndex / columnLength);

    // check if target is less than value at middle index to discard all values in the right side of array or vice versa
    // and return true if target is equal to value at middle index
    if (target === matrix[rowIndex][columnIndex]) {
      return true;
    } else if (target > matrix[rowIndex][columnIndex]) {
      start = middleIndex + 1;
    } else {
      end = middleIndex - 1;
    }
  }

  return false;
};

console.log(
  search2dMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
console.log(
  search2dMatrix(
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ],
    15
  )
);
console.log(search2dMatrix([[-1, 3]], 3));
console.log(search2dMatrix([[-5]], -5));
console.log(search2dMatrix([[1, 1]], 2));
