let findSumOfTwo = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === val) {
        return true;
      }
    }
  }
  return false;
};

console.log(findSumOfTwo([2, 1, 8, 4, 7, 3], 3));
