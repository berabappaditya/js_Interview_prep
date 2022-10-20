// An async function is a function declared with the async keyword, and the await keyword is
//  permitted within it. The async and await keywords enable asynchronous, promise-based behavior
//  to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
