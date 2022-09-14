class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

let mergeIntervals = function (v) {
  let result = [];
  //write your ode here
  let previousInterval = [v[0].first, v[0].second];
  let mergeInterval = new Array(previousInterval[0], previousInterval[1]);

  for (let i = 1; i < v.length; i++) {
    const currentInterval = [v[i].first, v[i].second];
    if (previousInterval[1] >= currentInterval[0]) {
      mergeInterval[0] = previousInterval[0];
      mergeInterval[1] = currentInterval[1];
      if (previousInterval[1] >= currentInterval[1]) {
        mergeInterval[1] = previousInterval[1];
      }
      previousInterval = new Array(mergeInterval[0], mergeInterval[1]);
    } else {
      result.push(new Pair(mergeInterval[0], mergeInterval[1]));
      mergeInterval = [];
      previousInterval = new Array(currentInterval[0], currentInterval[1]);
    }
  }
  result.push(new Pair(previousInterval[0], previousInterval[1]));
  return result;
};

console.log(
  mergeIntervals([
    new Pair(1, 5),
    new Pair(4, 6),
    new Pair(6, 8),
    new Pair(11, 15),
  ])
);
console.log(mergeIntervals([new Pair(1, 4), new Pair(4, 5)]));
console.log(mergeIntervals([new Pair(1, 5), new Pair(3, 7), new Pair(4, 6)]));
