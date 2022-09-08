// correct
const rotateArray = (originalArray, rotateAmount) => {
  const reversedArray = reverseArrayUtilityFunction(originalArray);
  const arrayLength = originalArray.length - 1;

  let absRotateAmount = rotateAmount % originalArray.length;

  // if negative rotate amount add the length of array to get positive expected number of rotation
  if (absRotateAmount < 0) {
    absRotateAmount = absRotateAmount + originalArray.length;
  }

  reversedArray.splice(
    0,
    absRotateAmount,
    ...reverseArrayUtilityFunction(originalArray.slice(0, absRotateAmount))
  );

  reversedArray.splice(
    absRotateAmount,
    arrayLength,
    ...reverseArrayUtilityFunction(originalArray.slice(absRotateAmount))
  );

  return reversedArray;
};

function reverseArrayUtilityFunction(arrayToReverse) {
  let p1 = 0;
  let p2 = arrayToReverse.length - 1;
  while (p2 > p1) {
    const temp = arrayToReverse[p1];
    arrayToReverse[p1] = arrayToReverse[p2];
    arrayToReverse[p2] = temp;
    p1++;
    p2--;
  }
  return arrayToReverse;
}

console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -3));
console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 3));
console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2));
