// correct solution
var findOriginalArray = function (changed) {
  let count = Counter(changed),
    changedLength = changed.length,
    result = [];

  if (changedLength % 0) {
    return result;
  }
  changed.sort((a, b) => +a - +b);
  for (item of changed) {
    if (item === 0 && count[item] >= 2) {
      count[item] -= 2;
      result.push(item);
    } else if (item > 0 && count[item] && count[item * 2]) {
      count[item]--;
      count[item * 2]--;
      result.push(item);
    }
  }

  if (result.length !== changedLength / 2) {
    console.log("result... ", result);
    return [];
  }

  return result;
};

const Counter = (arr) => {
  let count = {};
  for (element of arr) {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  }
  return count;
};

console.log(
  findOriginalArray([
    40, 7, 78, 12, 40, 28, 33, 27, 35, 90, 56, 44, 42, 38, 36, 3, 12, 68, 86,
    14, 27, 80, 33, 40, 12, 74, 20, 50, 15, 54, 76, 13, 40, 3, 43, 88, 14, 54,
    20, 0, 100, 10, 23, 30, 27, 50, 84, 24, 15, 45, 94, 66, 6, 22, 20, 34, 25,
    100, 28, 6, 37, 10, 18, 82, 96, 0, 76, 40, 32, 33, 48, 70, 24, 80, 20, 40,
    50, 4, 19, 25, 66, 38, 46, 44, 98, 47, 26, 54, 38, 39, 41, 20, 49, 8, 16, 6,
    50, 30, 20, 66,
  ])
);
// console.log(findOriginalArray([4, 4, 16, 20, 8, 8, 2, 10]));
// console.log(findOriginalArray([1, 4, 2, 1]));
// console.log(findOriginalArray([2, 2, 1, 1]));
// console.log(findOriginalArray([4, 0, 3, 0]));
// console.log(findOriginalArray([0, 0, 0, 0]));
// console.log(findOriginalArray([2, 1]));
// console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));
