const sortColor = (arr) => {
  let p1 = 0,
    p2 = 0,
    p3 = arr.length - 1;

  while (p3 >= p1) {
    if (arr[p1] === 0) {
      const temp = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = temp;
      p1++;
      p2++;
    } else if (arr[p1] === 2) {
      const temp = arr[p1];
      arr[p1] = arr[p3];
      arr[p3] = temp;
      p3--;
    } else {
      p1++;
    }
  }

  return arr;
};

console.log(sortColor([2, 0, 2, 1, 1, 0]));
console.log(sortColor([2, 0, 1]));
