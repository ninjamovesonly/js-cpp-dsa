const findBuySellStockPrices = function (stockNums) {
  const stockNumsLength = stockNums.length;
  let currentMaximumDifference = -Infinity;
  const tupleToReturn = [0, 0];

  for (let i = 0; i < stockNumsLength; i++) {
    for (let j = i + 1; j < stockNumsLength; j++) {
      const previousMaximum = currentMaximumDifference;
      const currentDifference = stockNums[j] - stockNums[i];
      currentMaximumDifference = Math.max(
        currentMaximumDifference,
        currentDifference
      );

      if (currentDifference > previousMaximum) {
        tupleToReturn[0] = stockNums[i];
        tupleToReturn[1] = stockNums[j];
      }
    }
  }
  return tupleToReturn; //Return a tuple with (high, low) price values
};

console.log(findBuySellStockPrices([8, 6, 5, 4, 3, 2, 1]));
// console.log(findBuySellStockPrices([1, 2, 3, 4, 3, 2, 1, 2, 5]));
