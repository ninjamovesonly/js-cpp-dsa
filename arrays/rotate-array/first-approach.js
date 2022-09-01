// should be binary but my lazy ass did it linear
// still figuring how i will solve this with binary search
// incorrect solution
const binarySearchRotated = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(binarySearchRotated([6, 7, 1, 2, 3, 4, 5], 3));
