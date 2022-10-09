// brute force recursive
let knapsack = function (profits, weights, capacity) {
  function recursiveHelper(profits, weights, capacity, idx) {
    if (capacity <= 0 || idx >= profits.length) return 0;

    let prf1 = 0;
    if (weights[idx] <= capacity) {
      prf1 =
        profits[idx] +
        recursiveHelper(profits, weights, capacity - weights[idx], idx + 1);
    }

    const prf2 = recursiveHelper(profits, weights, capacity, idx + 1);

    return Math.max(prf1, prf2);
  }

  return recursiveHelper(profits, weights, capacity, 0);
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];

console.log(knapsack(profits, weights, 7));
console.log(knapsack(profits, weights, 6));
