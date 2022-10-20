//add digit upto single digit
// function addDigit(data) {
//   if (data < 10) return data;
//   let toString = "" + data;
//   let dataArray = toString.split("").map((item) => parseInt(item));
//   let sum = dataArray.reduce((a, b) => a + b);
//   return addDigit(sum);
// }

// console.log(addDigit(5431));

// third largest number
function thirdLargest(arr) {
  let first = arr[0];
  let second = arr[1];
  let third = arr[2];
  for (let i = 3; i < arr.length; i++) {
    if (arr[i] < first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] < second) {
      third = second;
      second = arr[i];
    } else if (arr[i] < third) {
      third = arr[i];
    }
  }
  return third;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(thirdLargest(arr));
