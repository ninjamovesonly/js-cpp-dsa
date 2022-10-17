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
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => +a.start - +b.start);

  const merged = [];
  let prevInt = undefined;

  // TODO: Write your code here
  for (let interval of intervals) {
    const tempInt = prevInt;

    if (!tempInt) {
      prevInt = interval;
      continue;
    }

    if (tempInt.end >= interval.start) {
      if (tempInt.end >= interval.end) {
        // merged.push(tempInt);
        continue;
      }
      const newInterval = new Interval(
        tempInt.start,
        Math.max(interval.end, tempInt.end)
      );
      merged.push(newInterval);
      prevInt = newInterval;
    } else {
      merged.push(prevInt);
      if (tempInt.end >= interval.end) {
        merged.push(prevInt);
        continue;
      }
      merged.push(interval);
      prevInt = interval;
    }
  }

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
