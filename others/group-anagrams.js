/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let res = [],
    hash = {};

  for (let str of strs) {
    const sortStr = str.split("").sort().join("");
    if (hash[sortStr]) {
      hash[sortStr].push(str);
    } else {
      hash[sortStr] = [str];
    }
  }

  for (let prop in hash) {
    res.push(hash[prop]);
  }

  return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
