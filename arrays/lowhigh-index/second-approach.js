function findLowIndex(mainArray, target) {
  let low = 0;
  let high = mainArray.length - 1;
  let mid = Math.floor(mainArray.length / 2);

  while (high >= low) {
    if (mainArray[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = low + Math.floor((high - low) / 2);
  }

  if (low < mainArray.length && mainArray[low] === target) {
    return low;
  }

  return -1;
}

function findHighIndex(mainArray, target) {
  let low = 0;
  let high = mainArray.length - 1;
  let mid = Math.floor(mainArray.length / 2);

  while (high >= low) {
    if (mainArray[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = low + Math.floor((high - low) / 2);
  }

  if (high === -1) {
    return high;
  }

  if (high < mainArray.length && mainArray[high] === target) {
    return high;
  }

  return -1;
}

const arr = [
  1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6,
];

console.log(findLowIndex(arr, 5));
console.log(findHighIndex(arr, 5));
