//to invoke the a function we use call, apply and bind
//call
var obj = {
  name: "John Doe",
  age: 26,
  greet: function (a, b) {
    this.age = this.age + a + b;
    console.log(`Hello ${this.name} your age is ${this.age}`);
  },
};

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
