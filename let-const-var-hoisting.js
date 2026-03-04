var color = "red";

function blah() {
  console.log(color);// ✅
  var animal = "perro";
  console.log(animal);// ✅
  console.log(this)
}

if (true) {
  console.log(color);// ✅
  var food = "chichek";
}

console.log(food);// ✅
// console.log(animal);// ❌ i dont have access


function test() {
  for (var i = 0; i < 10; i++) console.log(i)
}

let origin = "ethi";

let age = 10;
function outerHeight() {
  let age = "ageless";
  function inner() {
    let age = 99;
  }
}

(function () {
  console.log("hello")
})();