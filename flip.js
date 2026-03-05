function flip(fn) {
  console.log(fn);
  return function (...args) {
    return fn(...args.reverse())
  }
}


function subtract(a, b) {
  return a - b;
}

const flippedSubtract = flip(subtract);

console.log(flippedSubtract(3, 10)); // Should return 7, because it's actually doing 10 - 3