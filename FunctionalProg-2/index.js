/* Given an array of objects representing people, 
write an ES6 function to return a new array containing only the names of the people. */

const people = [
  { name: "Raj", age: 28 },
  { name: "Swapnil", age: 42 },
  { name: "Anushka", age: 35 },
];

// Your code here
const names = people.map(({ name }) => name);
console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

//Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const numbers = [1, 2, 3, 4];
// Your code here

const multiplyByFive = numbers.map((a) => a * 5);
console.log(multiplyByFive); // Output: [5, 10, 15, 20]

//write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];

// Your code here

const greetEmployeeMessages = employeeData.map(
  ({ name, dept }) => `hi ${name} we are glad to have as ${dept}`
);

console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']

// Write an ES6 function that takes an array of objects representing books and returns an array
// with only the titles of each book.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

// Your code here

const getBookTitles = (arr) => arr.map(({ title }) => title);

const titles = getBookTitles(books);
console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

//Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
// Your code here

// const studentNames = studentName.filter(
//   (a) => a.charAt(0).toUpperCase() === "A"
// );

const studentNames = studentName.filter((a) => a[0].toUpperCase() === "A");
console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]

//Write an ES6 function which filters out the products which have a price greater than 40.

const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];
// Your code here

const getProducts = (arr, b) => arr.filter(({ price }) => price > b);
console.log(getProducts(productData, 40));
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]
