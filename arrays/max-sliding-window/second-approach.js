// correct after multiple attempts
const findMaxSlidingWindow = (nums, size) => {
  const result = [];
  const window = [];

  // if size of nums array is less than input size
  // then assign the array length as the new size
  if (nums.length < size) {
    size = nums.length;
  }

  for (let i = 0; i < size; i++) {
    while (window.length > 0 && nums[i] > nums[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i);
  }

  result.push(nums[window[0]]);

  for (let i = size; i < nums.length; i++) {
    while (window.length > 0 && nums[i] > nums[window[window.length - 1]]) {
      window.pop();
    }

    // if window index is out of window bound
    if (window.length > 0 && window[0] <= i - size) {
      window.unshift();
    }

    window.push(i);
    result.push(nums[window[0]]);
  }

  return result;
};

// expected output -> [3, 4, 5, 6, 7, 8, 9, 10]
// console.log(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// did
// expected output -> [6, 6, 7, 7, 7, 7]
console.log(findMaxSlidingWindow([6, 2, 3, 4, 5, 6, 7, 1, 3, 5], 5));
//
