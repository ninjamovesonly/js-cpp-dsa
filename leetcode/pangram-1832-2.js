/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  if (sentence.length < 26) return false;

  const hash = {};
  for (let char of sentence) {
    if (hash[char]) continue;
    hash[char] = true;
  }

  return Object.keys(hash).length === 26 ? true : false;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
