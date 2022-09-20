const quickSort = (arr) => {
  let arrLength = arr.length,
    right = [],
    left = [],
    pivot = arr[arrLength - 1];

  if (arrLength < 2) {
    return arr;
  }

  for (let i = 0; i < arrLength - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([55, 23, 26, 2, 18, 78, 23, 8, 2, 3]));
console.log(quickSort([1, 20, 30, 1, 2]));
// console.log(quickSort([5, 7, 2, 3, 8, 1]));
// console.log(quickSort([8, 20, -2, 4, -6]));
