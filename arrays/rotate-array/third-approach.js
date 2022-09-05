const binarySearchRotated = (arr, start, end, target) => {
  let mid = Math.floor(end - start / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[start] <= arr[mid] && arr[mid] >= target && arr[start] <= target) {
    return binarySearchRotated(arr, start, mid - 1, target);
  } else if (arr[end] >= arr[mid] && arr[mid] <= target && target <= arr[end]) {
    return binarySearchRotated(arr, mid + 1, end, target);
  } else if (arr[mid] >= arr[end]) {
    return binarySearchRotated(arr, mid + 1, end, target);
  } else if (arr[mid] <= arr[start]) {
    return binarySearchRotated(arr, start, mid - 1, target);
  }

  return -1;
};

const mainBinarySearchCall = (arr, target) => {
  return binarySearchRotated(arr, 0, arr.length - 1, target);
};

console.log(mainBinarySearchCall([6, 7, 1, 2, 3, 4, 5], 3));
