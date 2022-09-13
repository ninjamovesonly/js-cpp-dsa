/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchMatrix(matrix, target) {
  const rowLength = matrix.length;
  let rowIndex = 0;

  // binary search on the rows
  while (rowIndex < rowLength) {
    if (binarySearchOnRow(target, matrix[rowIndex])) {
      return true;
    } else {
      rowIndex++;
    }
  }

  return false;
}

const binarySearchOnRow = (target, array) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const currentValue = array[mid];

    if (target === currentValue) {
      return true;
    } else if (target < currentValue) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};
