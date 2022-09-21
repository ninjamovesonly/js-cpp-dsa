const partition = (arr, low, high) => {
  let pivot = arr[low],
    lowIndex = low,
    highIndex = high;

  while (highIndex > lowIndex) {
    while (low <= high && arr[lowIndex] <= pivot) {
      lowIndex++;
    }

    while (arr[highIndex] > pivot) {
      highIndex--;
    }

    if (lowIndex < highIndex) {
      const temp = arr[lowIndex];
      arr[lowIndex] = arr[highIndex];
      arr[highIndex] = temp;
    }
  }

  arr[low] = arr[highIndex];
  arr[highIndex] = pivot;

  return highIndex;
};

const recursiveHelper = (arr, low, high) => {
  if (high > low) {
    const pivotIndex = partition(arr, low, high);
    recursiveHelper(arr, low, pivotIndex - 1);
    recursiveHelper(arr, pivotIndex + 1, high);
  }
};

const quickSort = (arr) => {
  recursiveHelper(arr, 0, arr.length - 1);
  return arr;
};

console.log(quickSort([8, 20, -2, 4, -6]));
