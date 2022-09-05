// my first approach worked!
const leastSmallestCommon = (arr1, arr2, arr3) => {
  const maxLength = Math.max(arr1.length, arr2.length, arr3.length);
  let arr1Index = 0;
  let arr2Index = 0;
  let arr3Index = 0;

  while ((arr1Index && arr2Index && arr3Index) < maxLength) {
    if (
      arr1[arr1Index] === arr2[arr2Index] &&
      arr1[arr1Index] === arr3[arr3Index]
    ) {
      return arr1[arr1Index];
    }

    let min = Math.min(arr1[arr1Index], arr2[arr2Index], arr3[arr3Index]);

    if (isNaN(min)) {
      return -1;
    }

    if (arr1[arr1Index] === min) {
      arr1Index++;
    } else if (arr2[arr2Index] === min) {
      arr2Index++;
    } else {
      arr3Index++;
    }

    console.log(maxLength, min, arr1Index, arr2Index, arr3Index);
  }

  return -1;
};

a1 = [1, 4, 6, 7, 8, 10, 14];
a2 = [-1, 4, 5, 6, 7, 8, 50];
a3 = [0, 6, 7, 8, 10, 25, 30, 40];

// console.log(leastSmallestCommon(a1, a2, a3));
// console.log(
//   leastSmallestCommon(
//     [1, 5, 6, 7, 17, 20],
//     [3, 4, 7, 9, 12, 16, 50],
//     [5, 6, 7, 10, 16, 25]
//   )
// );
console.log(leastSmallestCommon([1, 2], [3], [5]));
// console.log(leastSmallestCommon([], [], []));
// console.log(
//   leastSmallestCommon([-10, -2, 2, 10], [-2], [-2, -1, 7, 10, 16, 25])
// );
