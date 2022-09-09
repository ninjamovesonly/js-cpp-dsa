// first brute force approach
let moveZerosToLeft = function (nums) {
  if (nums.length < 1) {
    return nums;
  }

  // get number of zeros that exist in array and count them
  let zerosCount = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("current val", nums[i], i, nums);
    if (nums[i] === 0) {
      zerosCount = zerosCount + 1;
      nums.splice(i, 1);
      // move index one step back on deleting item
      i = i - 1;
    }
  }

  console.log("after splice", nums);

  // shift all elements to the right by number of zeros counted
  for (let i = nums.length - 1; i > -1; i--) {
    nums[i + zerosCount] = nums[i];
  }

  // assign 0 to the first element to zeros count number index
  for (let i = 0; i < zerosCount; i++) {
    nums[i] = 0;
  }

  return nums;
};
