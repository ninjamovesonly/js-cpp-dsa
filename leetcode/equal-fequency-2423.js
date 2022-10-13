var equalFrequency = function (word) {
  for (let i = 0; i < word.length; i++) {
    const map = {};
    for (let j = 0; j < word.length; j++) {
      if (i !== j) {
        const ch = word[j];
        map[ch] = (map[ch] || 0) + 1;
      }
    }

    const set = new Set();

    for (let prop in map) {
      set.add(map[prop]);
    }

    if (set.size === 1) {
      return true;
    }
  }

  return false;
};

// console.log(equalFrequency("aazz"));
// console.log(equalFrequency("abcc"));
// console.log(equalFrequency("cccaaa"));
console.log(equalFrequency("abbcc"));
