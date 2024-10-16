// 1)Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).
//terneray operator : condition?true:false:condition?"statement-1":"statement-2"
//num>=18?"eligible to vote":"not eligible to vote"

const eligibleToVote = (age) => {
  if (age >= 18) console.log("eligible to vote");
  else console.log("not eleigible to vote");
};

eligibleToVote(18);
eligibleToVote(11);
eligibleToVote(25);

// 2)Write a function that takes two numbers as input and determines which one is greater.

const greaterNumber = (num1, num2) =>
  num1 > num2
    ? `${num1} is greater number than ${num2}`
    : `${num2} is greater number than ${num1}`;

console.log(greaterNumber(1, 2));
console.log(greaterNumber(5, 3));
console.log(greaterNumber(1, 1));

//3) Write a function that takes a number as input and determines if it is positive or negative.

const postiveNum = (num) => (num >= 0 ? "positive" : "negative");

console.log(postiveNum(-1));
console.log(postiveNum(0));
console.log(postiveNum(5));

//4)Write a function that takes a number as input and determines if it is even or odd.

const evenOddFun = (num) => (num % 2 == 0 ? `${num} is even` : `${num} is odd`);

console.log(evenOddFun(2));
console.log(evenOddFun(9));
console.log(evenOddFun(8));

//5) Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

// Your ES6 code here

const checkForAlphabetA = (str) => str.includes("a") || str.includes("A");

console.log(checkForAlphabetA("Tanay")); // Includes a
console.log(checkForAlphabetA("Jeep")); // Does not include a
console.log(checkForAlphabetA("Jane")); // Includes a

//6)Write a function that takes a string as input and determines if it is longer than 5 characters.

const strFun = (a) =>
  a.length > 5 ? `${a} is longer than 5 char ` : `${a} is lesser than 5 char`;

console.log(strFun("vishal singh"));
console.log(strFun("su"));
console.log(strFun("1singhs"));

//7)Write a function that takes a number as input and determines if it is between 1 and 10.

const numFun = (a) => {
  if (a >= 1 && a <= 10) console.log(`${a} number is b/w 1 and 10`);
  else console.log(`${a} not in b/w`);
};

numFun(2);
numFun(12);
numFun(1);
numFun(10);

//8)Write a function that takes a string as input and determines if it contains the word "hello".

const strFun3 = (str) => str.includes("hello");

console.log(strFun3("hello world"));
console.log(strFun3("hello"));
console.log(strFun3("hi"));

//9)Write a function that takes a number as input and determines if it is a multiple of 3.

const multipleFun = (num) => num % 3 == 0;

console.log(multipleFun(9));
console.log(multipleFun(3));
console.log(multipleFun(11));
console.log(multipleFun(12));

//10)Write a function which takes in a number as input and returns it after multiplying by 10.

const multipleFun2 = (num) => num * 10;

console.log(multipleFun2(20));
console.log(multipleFun2(2));
console.log(multipleFun2(40));

//11) Console individual values of the product object using object destructuring.

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

const { title, price, description } = product;

console.log(title); // iPhone
console.log(price); // 5999
console.log(description); // The iPhone is a smartphone developed by Apple

//12)Create an object book with properties title, author, and pages.
//Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const book = {
  title: "book",
  author: "vishal",
  pages: 200,
};

const getBookDetails = (a) => a.pages > 100;

console.log(getBookDetails(book)); // logs 'true' if the pages are above 100
console.log(getBookDetails(book)); // logs 'false' if the pages are 100 or below

// 13)Create a function changeOccupation that takes an object person and a string newOccupation as parameters,
// and changes the occupation property of the person object to the newOccupation.
//  Log the person object to the console before and after calling the function.

const person = {
  name: "amit",
  age: 25,
  occupation: "software",
};

const changeOccupation = (a, b) => (a.occupation = b);

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, "Product Manager");
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console

//14)Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];
// Your ES6 code here

const [a, b, c] = numbers;

console.log(a); // logs 1 to the console
console.log(b); // logs 2 to the console
console.log(c); // logs 3 to the console

//15)Convert the given function into ES6 with least amount of characters.

// function defaultParamsFunc(a, b, c) {
//   if (c === undefined) {
//     c = 4;
//   }
//   return a * b * c;
// }

const defaultParamsFunc = (a, b, c = 4) => a * b * c;
console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120
console.log(defaultParamsFunc(2, 5));
console.log(defaultParamsFunc(1, 1));
console.log(defaultParamsFunc(1, 3));
