/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum2 = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum % k === 0) {
        return true;
      }
    }
  }

  return false;
};

var checkSubarraySum = function (nums, k) {
  let sum = 0,
    hash = {};
  for (let i = 0; i < nums.length; i++) {
    currSum = sum + nums[i];

    if (hash[currSum % k]) return true;

    currSum %= k;
    hash[sum] = true;
    sum = currSum;
  }

  return false;
};

// console.log(checkSubarraySum([1, 2, 3], 6));
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
