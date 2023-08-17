//to invoke the a function we use call, apply and bind
//call
// Call is a function that helps you change the context of the invoking function.
//  In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

// Apply is very similar to the call function. The only difference is that in
//  apply you can pass an array as an argument list.

// Bind is a function that helps you create another
//  function that you can execute later with the new context of this that is provided.


var obj = {
  name: "John Doe",
  age: 26,
  greet: function (a, b) {
    this.age = this.age + a + b;
    console.log(`Hello ${this.name} your age is ${this.age}`);
  },
};
// inside obj we have a function greet how to use it with customized parameters and object value for that we use call, bind and apply
let obj2 = {
  name: "Ramesh",
  age: 25,
};
obj.greet(3, 4);
obj.greet.call(obj2, 2, 3);
obj.greet.apply({ name: "niles", age: 20 }, [1, 1]);
//bind
var greet = obj.greet.bind({ name: "Rancho" });
greet();
