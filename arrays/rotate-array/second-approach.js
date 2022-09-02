// iterative approach
const binarySearchRotated = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  if (start > end) {
    return -1;
  }

  while (start <= end) {
    let mid = Math.floor(end - start / 2);

    if (target === arr[mid]) {
      return mid;
    }

    // check if right or left side of array is sorted
    if (arr[start] <= arr[mid]) {
      if (arr[mid] > target && arr[start] < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] < target && arr[end] > target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

console.log(binarySearchRotated([6, 7, 1, 2, 3, 4, 5], 3));
