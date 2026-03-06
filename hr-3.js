function findSmallestMissingPositive(orderNumbers) {
  const sorted = orderNumbers.sort((a, b) => a - b).filter(x => x > 0);
  const sortedDup = [...new Set(sorted)]
  let i = 0
  let cont = 1;
  while (i < sortedDup.length) {
    if (sortedDup[i] !== cont) break;
    cont++;
    i++;
  }
  return cont;
}

// const orderNumbers = [3, 4, -1, 1];
// const orderNumbers = [-1, -2, 8, 8, 8, 8, 9, 3, 2, 1, 2, 1, 3, 5, 5];

const result = findSmallestMissingPositive(orderNumbers);
console.log(result);