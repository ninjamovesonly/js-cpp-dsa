let findSumOfTwo = function (nums, val) {
  let set = new Set();

  for (let item of nums) {
    console.log(item);
    if (set.has(val - item)) {
      return true;
    }

    set.add(item);
  }

  return false;
};

console.log(findSumOfTwo([2, 1, 8, 4, 7, 3], 3));
