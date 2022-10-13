//simple curring
function add1(a) {
  return function (b) {
    return a + b;
  };
}

// infinite curring function
function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(1)(2)(3)(4)(5)());
