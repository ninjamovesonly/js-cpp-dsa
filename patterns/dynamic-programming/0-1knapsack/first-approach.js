const knapsack = (profits, weights, capacity) => {
  const recursiveHelper = (profits, weights, capacity, idx) => {
    if (capacity <= 0 || idx >= profits.length) return 0;

    let profit1 = 0;

    if (weights[idx] <= capacity) {
      profit1 =
        profits[idx] +
        recursiveHelper(profits, weights, capacity - weights[idx], idx + 1);
    }

    const profit2 = recursiveHelper(profits, weights, capacity, idx + 1);

    return Math.max(profit1, profit2);
  };

  return recursiveHelper(profits, weights, capacity, 0);
};

let profits = [1, 6, 10, 16];
let weights = [1, 2, 3, 5];

console.log(knapsack(profits, weights, 7));
console.log(knapsack(profits, weights, 6));
