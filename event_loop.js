// Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
// The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
// The event loop allows us to use callbacks and promises.

// import fetch from "node-fetch";

let data = fetch("https://course-api.com/javascript-store-products");

data
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  })
  .catch(function (error) {
    console.log(error);
  });
let i = 0;
let myInterval = setInterval(() => {
  console.log(i);
  i++;
}, 3000);
console.log("I am Bappadaitya");
setTimeout(() => {
  clearInterval(myInterval);
}, 12000);
