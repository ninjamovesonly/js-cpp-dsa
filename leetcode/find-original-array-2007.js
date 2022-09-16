// incorrect solution
var findOriginalArray = function (changed) {
  let changedLength = changed.length,
    changedLengthHalf = changedLength / 2,
    result = [],
    result2 = [],
    elementCountMap = {},
    map = {},
    elementCountMap2 = {},
    map2 = {};

  if (changedLength % 2 === 0) {
    for (let i = 0; i < changedLength; i++) {
      let count = 0;
      const elementDouble = changed[i] * 2;
      if (i < changedLengthHalf) {
        for (let j = changedLengthHalf; j < changedLength; j++) {
          if (changed[j] === elementDouble) {
            count++;
          }
        }
        if (count) {
          if (map[changed[i]]) {
            map[changed[i]]++;
          } else {
            map[changed[i]] = 1;
          }
        }
        if (elementCountMap[changed[i]]) {
          elementCountMap[changed[i]]++;
        } else {
          elementCountMap[changed[i]] = 1;
        }
        for (const property in map) {
          if (map[property] === elementCountMap[property]) {
            result.push(Number(property));
          }
        }
      }
      elementCountMap = {};
      map = {};
      // if (result.length !== changedLengthHalf) {
      //   result = [];
      // }
      if (i >= changedLengthHalf && result.length !== changedLengthHalf) {
        for (let j = 0; j < changedLengthHalf; j++) {
          if (changed[j] === elementDouble) {
            count++;
          }
        }
        if (count) {
          if (map2[changed[i]]) {
            map2[changed[i]]++;
          } else {
            map2[changed[i]] = 1;
          }
        }
        if (elementCountMap2[changed[i]]) {
          elementCountMap2[changed[i]]++;
        } else {
          elementCountMap2[changed[i]] = 1;
        }
        for (const property in map2) {
          if (map2[property] === elementCountMap2[property]) {
            result2.push(Number(property));
          }
        }
        if (result.length !== changedLengthHalf) {
          result = [];
        }
      }
    }
  }
  console.log("result2..", result2);
  return result;
};

console.log(findOriginalArray([1, 4, 2, 1])); // fails for this edge case
console.log(findOriginalArray([2, 2, 1, 1]));
console.log(findOriginalArray([4, 0, 3, 0]));
console.log(findOriginalArray([0, 0, 0, 0]));
console.log(findOriginalArray([2, 1]));
console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));
