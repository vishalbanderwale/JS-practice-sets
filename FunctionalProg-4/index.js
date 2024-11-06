//Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here

const totalLength = (str) => str.reduce((acc, curr) => acc + curr).length;
console.log(totalLength(strings));
// Output: 30

/* Write an ES6 function sumSquares that takes an array of numbers and
 returns the sum of the squares of all the numbers in the array */

const numbers = [1, 2, 3, 4, 5];
// Your code here

const sumSquares = (arr) => arr.reduce((acc, curr) => acc + curr * curr, 0);

console.log(sumSquares(numbers));
// Output: 55

/* Write an ES6 function that calculates and 
returns the total value of all items in an array of objects */

const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];
// Your code here

const totalValue = (arr) => arr.reduce((acc, { price }) => acc + price, 0); // step:1 0+10: 10 will return to acc
//step 2: 10+20:30 will return to acc // step3 : 30 +30 : 60 will return to acc

console.log(totalValue(items));
// Output: 60

/* Write an ES6 function that takes an array of strings 
as input and concatenates them into a single string. */

// Your code here

const concatStrings = (arr) => arr.reduce((acc, curr) => acc + curr);

console.log(concatStrings(["this", "is", "fun"])); // Output: 'thisisfun'

//Write an ES6 function to multiply and return all the elements of a given array.

const numbers1 = [1, 2, 3, 4, 5];
// Your code here

const product = (arr) => arr.reduce((acc, curr) => acc * curr);

console.log(product(numbers1));
// Output: 120

//Write an ES6 function that takes an array of strings and returns the longest string.

const strings1 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here

const longestString = (arr) =>
  arr.reduce((acc, curr) => (acc.length > curr.length ? acc : curr));

console.log(longestString(strings1));
// Output: 'Haule Haule'

// max and min value program
// const array4 = [1, 20, 30, 40, 50];

// const arrFun = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]; // 1>0 20>1 30>20 40>30 50>40 50 // 1<0 20<1 30<20 20<40 40<50
//     } else {
//       return arr[i];
//     }
//   }
//   return max;
// };

// console.log(arrFun(array4));
