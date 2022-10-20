// A Node.js Promise is a placeholder for a value that will be available in the future,
// allowing us to handle the result of an asynchronous task once it has completed or encountered an error.
//  Promises make writing asynchronous code easier. They’re an improvement on the callback pattern and very popular in Node.js

//DEfine a promise: promise is javascript object that represents the eventual completion or failure of an asynchronous operation
const myPromise = new Promise((resolve, reject) => {
  console.log("Promise is running");
  setTimeout(() => {
    if (true) {
      resolve("foo");
      reject("rejectd");
    }
  }, 300);
});

myPromise
  .then((value) => {
    return value + " one";
  })
  .then((value) => {
    return value + " two";
  })
  .then((value) => {
    return value + " three";
  })
  .then((value) => {
    return value + " four";
  })
  .then((value) => {
    console.log("Five");
    console.log(value);
  })
  .catch((err) => {
    console.log("iamerr", err);
  });
