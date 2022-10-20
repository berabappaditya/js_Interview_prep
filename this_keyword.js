//this refers to the  object on which we executing the current function

var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
    const sayBye = function () {
      console.log(this);
    };
    sayBye();
  },
};
// console.log(person.fullName());
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
    const sayBye = () => {
      console.log(this);
    };
    sayBye();
  },
};
person.fullName();
