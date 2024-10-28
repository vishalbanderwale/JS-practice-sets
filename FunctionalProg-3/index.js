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
