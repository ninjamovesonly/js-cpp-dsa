/**
 * @param {string[]} arr
 * @return {number}
 */

var maxLength = (arr) => {
  const checkUniqueHelper = (word) => {
    const hash = new Map();
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (hash.has(char)) return false;
      hash.set(char, true);
    }
    return true;
  };
  let result = 0;
  const dfs = (idx, chars) => {
    if (idx === arr.length) return;
    const newChars = `${chars}${arr[idx]}`;
    if (checkUniqueHelper(newChars)) {
      result = Math.max(result, newChars.length);
      dfs(idx + 1, newChars);
    }
    dfs(idx + 1, chars);
  };
  dfs(0, "");
  return result;
};
