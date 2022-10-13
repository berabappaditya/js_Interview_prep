// A Node.js Promise is a placeholder for a value that will be available in the future,
// allowing us to handle the result of an asynchronous task once it has completed or encountered an error.
//  Promises make writing asynchronous code easier. They’re an improvement on the callback pattern and very popular in Node.js

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then((value) => {
    return value + " and bar";
  })
  .then((value) => {
    return value + " and bar again";
  })
  .then((value) => {
    return value + " and again1";
  })
  .then((value) => {
    return value + " and again2";
  })
  .then((value) => {
    console.log("hI PRINTING");
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
