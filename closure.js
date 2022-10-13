// A closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's
// scope from an inner function. In JavaScript, closures are created
// every time a function is created, at function creation time.

function init() {
  let x = 1;
  function mul(a) {
    return a * 2;
  }
  return function () {
    x = mul(x); //everytime we calling this it preserving new value to the x
    console.log("x is", x);
  };
}

const add = init();
console.log(add);
add(); //everytime we calling add() it preserving new value to the x
add();
add();
add();
