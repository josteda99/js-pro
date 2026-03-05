function add(a, b, c) {
  return a + b + c;
}

function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

//currying advance

function add3(x, y, z) {
  return x + y + z;
}

function curry(fn) {
  return function curried(...args) {
    if (args.lenght >= fn.lenght) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this.args.concat(args2));
      }
    }
  }
}