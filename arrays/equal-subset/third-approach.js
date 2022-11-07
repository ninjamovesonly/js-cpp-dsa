// top down dp with memoization
let canPartition = function (nums) {
  //TODO: Write - Your - Code
  let sum = nums.reduce((a, b) => a + b);

  if (sum % 2 !== 0) return false;

  const dp = [];

  const recursiveHelper = (sum, idx) => {
    if (sum === 0) return true;
    if (nums.length === 0 || idx >= nums.length) return false;
    dp[idx] = dp[idx] || [];

    if (typeof dp[idx][sum] === "undefined") {
      if (sum >= nums[idx]) {
        if (recursiveHelper(sum - nums[idx], idx + 1)) {
          dp[idx][sum] = true;
          return true;
        }
      }

      dp[idx][sum] = recursiveHelper(sum, idx + 1);
    }

    return dp[idx][sum];
  };

  return recursiveHelper(sum / 2, 0);
};

console.log(canPartition([1, 2, 3, 4]));
console.log(canPartition([1, 1, 3, 4, 7]));
console.log(canPartition([2, 3, 4, 6]));
