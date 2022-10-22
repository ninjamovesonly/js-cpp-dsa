/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  let sArr = s.split(/\s/g),
    lastWord = "";

  for (let item of sArr) {
    if (item === "") {
      continue;
    } else {
      lastWord = item;
    }
  }

  return lastWord.length;
};

var lengthOfLastWord2 = function (s) {
  let sArr = s.trim().split(" ");

  return sArr[sArr.length - 1].length;
};

var lengthOfLastWord3 = function (s) {
  let count = 0,
    found = false;

  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] === " ") {
      if (found === true) {
        return count;
      }
      continue;
    } else {
      found = true;
      count++;
    }
  }
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
