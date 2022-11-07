// bottom up
let canPartition = function (nums) {
  const len = nums.length,
    sum = nums.reduce((a, b) => a + b),
    reqSum = Math.floor(sum / 2),
    dp = Array(len)
      .fill(false)
      .map(() => Array(reqSum + 1).fill(false));

  for (let i = 0; i < len; i++) dp[i][0] = true;

  for (let i = 0; i <= reqSum; i++) {
    dp[0][i] = nums[0] === i;
  }

  for (let row = 1; row < len; row++) {
    for (let col = 1; col <= reqSum; col++) {
      if (dp[row - 1][col]) {
        dp[row][col] = dp[row - 1][col];
      } else if (col >= nums[row]) {
        dp[row][col] = dp[row - 1][col - nums[row]];
      }
    }
  }

  let sum1 = 0;
  for (let i = reqSum; i >= 0; i--) {
    if (dp[len - 1][i] === true) {
      sum1 = i;
      break;
    }
  }

  const sum2 = sum - sum1;
  return Math.abs(sum2 - sum1);
};

console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
console.log(
  `Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`
);
console.log(
  `Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`
);
