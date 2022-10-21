let canPartition = function (nums) {
  //TODO: Write - Your - Code
  let sum = nums.reduce((a, b) => a + b);

  if (sum % 2 !== 0) return false;

  return true;
};

console.log(canPartition([1, 2, 3, 4]));
console.log(canPartition([1, 1, 3, 4, 7]));
console.log(canPartition([2, 3, 4, 6]));
