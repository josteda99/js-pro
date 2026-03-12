function countAffordablePairs(prices, budget) {
  let cont = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      if (i < j) {
        if (prices[i] + prices[j] <= budget) cont++;
      }
    }
  }

  return cont;
}

const prices = [1, 2, 3, 4, 5];
const budget = 7;

console.log(countAffordablePairs(prices, budget));
