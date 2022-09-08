// does not work for negative rotateAmount
const rotateArray = (originalArray, rotateAmount) => {};

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

console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -3)); // wrong output :(
console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 3));
console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2));
