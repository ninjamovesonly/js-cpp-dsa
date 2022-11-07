let canPartition = function (nums) {
  const recursiveHelper = (sum1, sum2, idx) => {
    if (idx === nums.length) return Math.abs(sum1 - sum2);

    const diff1 = recursiveHelper(sum1, sum2 - nums[idx], idx + 1);
    const diff2 = recursiveHelper(sum1 - nums[idx], sum2, idx + 1);

    return Math.min(diff1, diff2);
  };

  return recursiveHelper(0, 0, 0);
};

console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
console.log(
  `Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`
);
console.log(
  `Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`
);
