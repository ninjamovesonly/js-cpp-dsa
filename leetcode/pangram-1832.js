/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  if (sentence.length < 26) return false;

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const arr = letters.split("");

  const hash = {};
  for (let char of sentence) {
    if (hash[char]) continue;
    hash[char] = true;

    const idx = arr.indexOf(char);
    arr.splice(idx, 1);
  }
  console.log("arr...", arr, !arr.length);
  return !arr ? true : false;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
