let findMaxSlidingWindow = function (nums, windowSize) {
  var result = [];
  //Write your code
  if (nums.length === 0) return result;
  let windowStartPointer = 0;
  for (
    let windowEndPointer = windowSize - 1;
    windowEndPointer < nums.length;
    windowEndPointer++
  ) {
    if (windowEndPointer === windowStartPointer) {
      result.push(nums[windowEndPointer]);
      windowStartPointer++;
      continue;
    }
    let max = Math.max(
      nums[windowStartPointer],
      nums[windowStartPointer + 1],
      nums[windowEndPointer]
    );
    result.push(max);
    windowStartPointer++;
  }
  return result;
};

// expected output -> [3, 4, 5, 6, 7, 8, 9, 10]
// console.log(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// expected output -> [5, 6, 7, 8, 9, 10]
console.log(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
//                                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
