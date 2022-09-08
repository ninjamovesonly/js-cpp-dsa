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
