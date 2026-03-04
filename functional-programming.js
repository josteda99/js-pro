//imperative programming
let sum = 0

for (let i = 1; i <= 5; i++) {
  sum += 1;
}

//functional programming
[1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0)

const func = function (person) {
  console.log("hello", person)
}


//inpure function
let value = 2;

function squareAndUpdateValuee(num) {
  value = num * num;
  return value;
}
// pure functiion
function square(num) { return num * num; }

//higher order funcionts
function doTwice(func) {
  func();
  func();
}

function multiplyBu(factor) {
  return function (number) {
    return number * factor;
  }
}

//inmutabilability
const person = { name: "teddy", age: 2 };
Object.freeze(person);