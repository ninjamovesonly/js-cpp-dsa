/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => +a[0] - +b[0]);

  let merged = [],
    start = intervals[0][0],
    end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] <= end) {
      end = Math.max(end, interval[1]);
    } else {
      merged.push([start, end]);
      start = interval[0];
      end = interval[1];
    }
  }

  merged.push([start, end]);
  return merged;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
);
console.log(
  merge([
    [6, 7],
    [2, 4],
    [5, 9],
  ])
);
console.log(
  merge([
    [1, 4],
    [2, 6],
    [3, 5],
  ])
);
