const knapsack = (profits, weights, capacity) => {
  let result = [0, 0];
  let mp = 0;
  let wc = 0;

  for (let i = 0; i < profits.length; i++) {
    for (let x = i + 1; x < profits.length; x++) {
      const prevwc = wc;
      const prevwp = mp;

      mp += profits[i] + profits[x];
      wc += weights[i] + weights[x];

      if (wc > capacity) {
        mp = prevwp;
        wc = prevwc;
        result = [wc, mp];
      } else {
        result = [wc, mp];
      }
    }
  }
};

let profits = [1, 6, 10, 15];
let weights = [1, 2, 3, 5];

console.log(knapsack(profits, weights, 7));
console.log(knapsack(profits, weights, 6));
