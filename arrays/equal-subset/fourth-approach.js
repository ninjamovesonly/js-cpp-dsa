// bottom up
let canPartition = function (nums) {
  //TODO: Write - Your - Code
  let len = nums.length,
    sum = nums.reduce((a, b) => a + b);

  if (sum % 2 !== 0) return false;

  sum /= 2;

  const dp = Array(len)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));

  for (let i = 0; i < len; i++) dp[i][0] = true;

  for (let i = 1; i <= sum; i++) dp[0][i] = nums[0] === i;

  for (let row = 1; row < len; row++) {
    for (let col = 1; col <= sum; col++) {
      if (dp[row - 1][col]) {
        dp[row][col] = dp[row - 1][col];
      } else if (col >= nums[row]) {
        dp[row][col] = dp[row - 1][col - nums[row]];
      }
    }
  }

  return dp[len - 1][sum];
};

console.log(canPartition([1, 2, 3, 4]));
console.log(canPartition([1, 1, 3, 4, 7]));
console.log(canPartition([2, 3, 4, 6]));
