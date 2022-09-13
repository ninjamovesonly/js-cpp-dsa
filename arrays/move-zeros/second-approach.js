const moveZeros = (array) => {
  const arrayLength = array.length;
  // assign a read and write pointer to end of array index
  let readPointer = arrayLength - 1;
  let writePointer = arrayLength - 1;

  while ((readPointer && writePointer) > -1) {
    if (readPointer === -1) {
      array[writePointer] = 0;
      writePointer--;
      continue;
    }

    const currentValue = array[readPointer];

    if (currentValue === 0) {
      readPointer--;
    } else {
      array[writePointer] = currentValue;
      readPointer--;
      writePointer--;
    }
  }

  return array;
};

console.log(moveZeros([1, 10, 20, 0, 59, 63, 0, 88, 0]));
console.log(moveZeros([1, 0, 2, 3, 0]));
