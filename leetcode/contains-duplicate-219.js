/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        const diff = Math.abs(i - j);

        if (diff <= k) {
          return true;
        }
      }
    }
  }

  return false;
};

// optimised linear approach
var containsNearbyDuplicate2 = function (nums, k) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] > -1 && i - hash[nums[i]] <= k) return true;
    hash[nums[i]] = i;
  }
  return false;
};

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

console.log(containsNearbyDuplicate2([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate2([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate2([1, 2, 3, 1, 2, 3], 2));
