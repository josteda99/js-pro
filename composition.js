//compositioon

function compose(fn1, fn2) {
  return function (val) {
    return fn1(fn2(val));
  }
}

function composeV2(...functions) {
  return function (data) {
    functions.reduceRight((val, func) => func(val), data);
  }
}