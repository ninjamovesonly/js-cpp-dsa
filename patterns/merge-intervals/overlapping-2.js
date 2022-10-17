// wrong approach
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const merge = function (intervals) {
  // TODO: Write your code here
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => +a.start - +b.start);

  const merged = [];
  let start = intervals[0].start,
    end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval.start <= end) {
      end = Math.max(end, interval.end);
    } else {
      merged.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  merged.push(new Interval(start, end));
  return merged;
};

console.log(
  merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)])
);
console.log(
  merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)])
);
console.log(
  merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)])
);
