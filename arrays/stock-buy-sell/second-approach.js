const linearFindBuySellStock = (stocks) => {
  let currentProfit = -Infinity;
  let currentBuy = stocks[0];
  let globalSell = stocks[1];
  let globalProfit = globalSell - currentBuy;

  for (let i = 1; i < stocks.length; i++) {
    currentProfit = stocks[i] - currentBuy;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = stocks[i];
    } else if (stocks[i] < currentBuy) {
      currentBuy = stocks[i];
    }
  }

  return [globalSell - globalProfit, globalSell];
};

console.log(linearFindBuySellStock([12, 5, 9, 19]));
