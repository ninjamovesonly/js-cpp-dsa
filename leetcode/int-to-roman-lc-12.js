/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    numerals = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
    result = "";

  let idx = 0;
  while (num > 0) {
    if (num - numbers[idx] >= 0) {
      result += numerals[idx];
      num -= numbers[idx];
    } else {
      idx++;
    }
  }

  return result;
};

console.log(intToRoman(8));
console.log(intToRoman(58));
console.log(intToRoman(1994));
