/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let word1Str = word1.join(""),
    word2Str = word2.join("");

  if (word1Str !== word2Str) return false;

  return true;
};

var arrayStringsAreEqual2 = function (word1, word2) {
  let word1Str = word1.join(""),
    word2Str = word2.join("");

  return word1Str === word2Str;
};

// t: n
// s: 1

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
