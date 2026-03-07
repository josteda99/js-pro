function average(arr) {
  const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(sum)

  if (arr.lenght === 0) return 0;

  return sum / arr.length;
}

function countResponseTimeRegressions(responseTimes) {
  let counter = 0;
  for (let i = 0; i < responseTimes.length; i++) {
    if (i === 0) continue;

    if (responseTimes[i] > average(responseTimes.slice(0, i))) {
      counter++;
    }
  }

  return counter;
}

const responseTimes = [100, 200, 150, 300];

const result = countResponseTimeRegressions(responseTimes);

console.log("result", result);