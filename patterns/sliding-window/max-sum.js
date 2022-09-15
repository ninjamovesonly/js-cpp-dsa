const maxSubarrSum = (arr, target) => {
  let currentSum = 0,
    start = 0,
    maxSum = -Infinity,
    arrLength = arr.length;

  if (arrLength < target) {
    target = arrLength;
  }

  if (arrLength < 1) {
    return;
  }

  for (let end = 0; end < arrLength; end++) {
    currentSum += arr[end];
    if (end >= target - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[start];
      start++;
    }
  }

  return maxSum;
};

console.log(maxSubarrSum([2, 1, 5, 1, 3, 2], 3));
console.log(maxSubarrSum([2, 3, 4, 1, 5], 2));
