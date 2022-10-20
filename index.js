// const API_LINK = "https://api.github.com/users";
// const fData = fetch(API_LINK);
// fData.then((response) => {
//   console.log("iam res", response);
//   response.json().then((data) => {
//     let str = JSON.stringify(data);
//     console.log(JSON.parse(str));
//   });
// });
// //
// console.log(fData);
let myArray = [1, 2, 3, 4];

const returnValue = myArray

  .map((element) => {
    return element * element;
  })
  .reverse();
console.log(returnValue);
