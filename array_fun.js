let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let items = [9, 10, 11];

arr.push(...items); // – adds items to the end,
arr.pop(); // – extracts an item from the end,
arr.shift(); //– extracts an item from the beginning,
arr.unshift(...items); // – adds items to the beginning.
console.log(arr);

////////////////////////////////////////////////////////////////
//Array splice
let arr1 = ["I", "study", "JavaScript"];

arr1.splice(1, 1, "love"); // from index 1 remove 1 element
console.log(arr1); //[ 'I', 'love', 'JavaScript' ]

let arr2 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr2.splice(-1, 0, 3, 4);

console.log(arr2); // 1,2,3,4,5
////////////////////////////////////
let a = "IamBappadaitya";
console.log(a.split("").reverse().join(""));
///////////////////////////////
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let red = arr3.reduce((acc, curr) => {
  //   return acc ;//11
  return curr + acc; //36
});
console.log(red);
let newArr = [34, 7, 3, 9, 1, 3, 38, 12, 16, 20];
let sArr = newArr.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(sArr);
