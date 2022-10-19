/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let hash = {};
  for (let word of words) {
    hash[word] = hash[word] + 1 || 1;
  }

  let entries = Object.entries(hash);
  entries.sort((a, b) => +b[1] - +a[1] || a[0].localeCompare(b[0]));

  return entries.map((item) => item[0]).slice(0, k);
};

console.log(
  topKFrequent(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
);
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 1));
