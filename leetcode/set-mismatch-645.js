/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let expNums = [];
  let visited = {};

  for (let i = 0; i < nums.length; i++) {
    expNums.push(i + 1);
    if (!visited[nums[i]]) {
      visited[nums[i]] = true;
    }
  }

  let numsSum = nums.reduce((a, b) => a + b);
  let expNumsSum = expNums.reduce((a, b) => a + b);
  let uniqSum = Object.keys(visited).map((item) => Number(item));
  let uniqNumsSum = uniqSum.reduce((a, b) => a + b);
  return [numsSum - uniqNumsSum, expNumsSum - uniqNumsSum];
};

console.log(findErrorNums([1, 2, 2, 4]));
