const smallestGreaterSubarraySum = (arr, target) => {
  let start = 0,
    minLength = Infinity,
    currentSum = 0,
    arrLength = arr.length;

  for (let end = 0; end < arrLength; end++) {
    currentSum += arr[end];

    while (currentSum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      currentSum -= arr[start];
      start++;
    }
  }

  return minLength;
};

console.log(smallestGreaterSubarraySum([2, 1, 5, 2, 3, 2], 7));
console.log(smallestGreaterSubarraySum([2, 1, 5, 2, 8], 7));
console.log(smallestGreaterSubarraySum([3, 4, 1, 1, 6], 8));
