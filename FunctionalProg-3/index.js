/* Write an ES6 function that takes an array of objects representing cars 
with properties make, model, and year. 
Return the first car object that is a Toyota and the year is after 2010. */

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here

const findToyotaCar = (arr) =>
  arr.find(({ make, year }) => make == "Toyota" && year > "2010");

const toyotaCar = findToyotaCar(cars);
console.log(toyotaCar);
// Output: { make: "Toyota", model: "Camry", year: 2015 }

/* Write an ES6 function that takes an array of objects containing car information (make, model, year) 
and returns an array with only the cars that were made after the year 2012. */

const cars1 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here

const getCarDetails = (arr) => arr.filter(({ year }) => year > 2012);
const getCars = getCarDetails(cars1);
console.log(getCars);
// Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]

/* Write an ES6 function that takes an array of objects representing products with 
 properties name, price, and category.
 Return the first product object that is in the category "electronics". */

const products = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

// Your code here

const findElectronicsProduct = (arr) =>
  arr.find(({ category }) => category === "electronics");

const electronicsProduct = findElectronicsProduct(products);
console.log(electronicsProduct);
// Output: { name: "iPad", price: 799, category: "electronics" }

/* Write an ES6 function that takes an array of objects representing products with
  properties name, price and category. 
Return all the products object that are in the category "electronics". */

const products1 = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

// Your code here

const getAllElectronicProducts = (arr) =>
  arr.filter(({ category }) => category === "electronics");

const electronicProducts = getAllElectronicProducts(products1);
console.log(electronicProducts);
// Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]

/* Write an ES6 function that takes an array of objects 
containing student information (name, age, grade) and 
returns an array with only the students who have a grade above a certain value. */

const students = [
  { name: "Alice", age: 16, grade: 90 },
  { name: "Bob", age: 17, grade: 80 },
  { name: "Charlie", age: 15, grade: 95 },
  { name: "David", age: 16, grade: 85 },
];
// Your code here

const filterStudentsByGrade = (arr, num1) =>
  arr.filter(({ grade }) => grade > num1);

const highGradeStudents = filterStudentsByGrade(students, 85);
console.log(highGradeStudents);
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]

/* Write an ES6 function that takes an array of objects representing books with 
properties title, author and pageCount.
 Return the first book object that has more than 500 pages. */

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

// Your code here

// const findBookWithMoreThan500Pages = (arr) =>
//   arr.find((a) => a.pageCount > 500);

// const Fun = (a) => a.pageCount > 500;
// const findBookWithMoreThan500Pages = (arr) => arr.find(Fun);

//with destructing

const findBookWithMoreThan500Pages = (arr) =>
  arr.find(({ pageCount }) => pageCount > 500);

const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
console.log(bookWithMoreThan500Pages);
// Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }

//Write an ES6 function that takes an array of objects containing customer information
// (name, age, gender) and returns an array with only the customers who are of gender Male.

const customers = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 30, gender: "Female" },
  { name: "Bob", age: 40, gender: "Male" },
  { name: "Alice", age: 35, gender: "Female" },
];
// Your code here

const getMaleCustomers = (arr) => arr.filter(({ gender }) => gender === "Male");

const maleCustomers = getMaleCustomers(customers);
console.log(maleCustomers);
// Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]

//Write an ES6 function that takes an array of objects containing game information
//(title, developer, genre) and returns an array with all the games of a certain genre.

const games = [
  {
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    genre: "RPG",
  },
  { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
  { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genre: "Adventure",
  },
];
// Your code here

const filterByGenre = (arr, a) => arr.filter(({ genre }) => genre === a);

const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]

//9. Write an ES6 function that takes an array of objects containing car information
//(make, model, year) and returns an array with only the car model that were made after the year 2012.

const cars9 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here

const getCarModel = (arr) =>
  arr.filter(({ year }) => year > 2012).map(({ model }) => model);

const carModels = getCarModel(cars9);
console.log(carModels);
// Output: ["Camry", "Mustang"]

//10. Write an ES6 function that takes an array of objects representing books with
//properties title, author and pageCount. Return the all book titles that have more than 700 pages.

const books2 = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

// Your code here

const getTitlesWithMoreThan500Pages = (arr) =>
  arr.filter(({ pageCount }) => pageCount > 700).map(({ title }) => title);

const booksWithMoreThan500Pages = getTitlesWithMoreThan500Pages(books2);
console.log(booksWithMoreThan500Pages);
// Output: ["The Lord of the Rings"]

//11. Write an ES6 function that takes an array of numbers and
// returns the sum of all the even numbers in the array using the reduce function.

const numbers = [12, 23, 4, 2, 11, 21];
// Your code here

const sumOfEvenNumbers = (arr) =>
  arr.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0);

console.log(sumOfEvenNumbers(numbers));
// Output: 18

//12. Write an ES6 function that takes an array of objects representing students '
//with properties name and score, and returns the average score of all the students using the reduce function.

const students6 = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Alice", score: 85 },
];

// Your code here

const getAverageScore = (arr) =>
  arr.reduce((acc, { score }) => acc + score, 0) / arr.length;

console.log(getAverageScore(students6));
// Output: 82.5

//Write an ES6 function that takes an array of objects representing products
// with properties name, price, and quantity,and returns the total cost of all the products using the reduce function.

const products5 = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];

// Your code here

const getTotalCost = (arr) =>
  arr.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

console.log(getTotalCost(products5));
// Output: 150

//Write an ES6 function that takes an array of strings and returns a single string
//that is the concatenation of all the strings using the reduce function.

const strings = ["Hello", " ", "world", "!"];
// Your code here

const concatenateStrings = (arr) => arr.reduce((acc, curr) => acc + curr);

console.log(concatenateStrings(strings));
// Output: "Hello world!"

//15. Write an ES6 function that takes an array of numbers and
//returns the minimum number using the reduce function.

const numbers3 = [10, 14, 5, 8, 3, 6];

// Your code here

// const getMinimumNumber = (arr) =>
//   arr.reduce((acc, curr) => {
//     if (curr < acc) {
//       acc = curr;
//     } else {
//       return acc;
//     }
//     return acc;
//   });


const getMinimumNumber=arr=>arr.reduce((acc,curr)=>curr<acc?curr:acc)

console.log(getMinimumNumber(numbers3));
// Output: 3
