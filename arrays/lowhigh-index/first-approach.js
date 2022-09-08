// linear solution not the best
// because array could have over a billion items

let findLowIndex = function (arr, key) {
  //TODO: Write - Your - Code
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};

let findHighIndex = function (arr, key) {
  //TODO: Write - Your - Code
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};

const arr = [
  1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6,
];

console.log(findLowIndex(arr, 5));
console.log(findHighIndex(arr, 5));
