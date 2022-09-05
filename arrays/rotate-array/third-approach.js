// // recursive approach work in progress
// const binarySearchRotated = (arr, slicedArr = arr, target) => {
//   if (arr.length === 1 && arr[0] !== target) {
//     return -1;
//   }

//   let start = 0;
//   let end = arr.length - 1;
//   let mid = Math.floor((end - start) / 2);

//   console.log("arr.. ", slicedArr, start, end, mid);

//   if (target === slicedArr[mid]) {
//     return arr.indexOf(slicedArr[mid]);
//   }

//   // check if right or left sorted
//   if (slicedArr[start] <= slicedArr[mid]) {
//     if (slicedArr[start] <= target && slicedArr[mid] > target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//     return binarySearchRotated(arr, arr.slice(start, end + 1), target);
//   } else {
//     if (slicedArr[end] >= target && slicedArr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//     return binarySearchRotated(arr, arr.slice(start, end + 1), target);
//   }
// };

// console.log(binarySearchRotated([6, 7, 1, 2, 3, 4, 5], 3));

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
