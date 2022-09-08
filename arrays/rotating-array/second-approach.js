// does not work for negative rotateAmount
const rotateArray = (originalArray, rotateAmount) => {
  const indexedArrayLength = originalArray.length - 1;
  const arrayLength = originalArray.length;
  rotateAmount = rotateAmount % arrayLength;

  if (rotateAmount < 0) {
    rotateAmount = rotateAmount + arrayLength;
  }

  // put last rotate amount elements to temporary array
  const temporaryArray = [];
  for (let i = 0; i < rotateAmount; i++) {
    temporaryArray.push(originalArray[arrayLength - rotateAmount + i]);
  }

  // shift array to right
  for (let i = indexedArrayLength; i >= rotateAmount; i--) {
    originalArray[i] = originalArray[arrayLength - rotateAmount];
  }

  // put back elements from temporary array to start of original array
  for (let i = 0; i < rotateAmount; i++) {
    originalArray[i] = temporaryArray[i];
  }

  return originalArray;
};

console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -3));
console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 3));
console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2));
