//functional hoisting
myFun(67);
print(10);
function print(a) {
  console.log("I am " + a);
}

//var hoisting
s = 10;
console.log(s);
var s;

function myFun(a) {
  console.log("I am a function expression", a);
}
