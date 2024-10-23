/*Write an ES6 function that takes an array of numbers and 
returns an array with each number incremented by 3 using the map method.*/

// Your ES6 function here

const numbers = [1, 2, 3, 4, 5];

const incrementNumbers = (array) => array.map((a) => a + 3);
console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]

/*
Write an ES6 function that takes an array of strings and returns an array with
 all the strings capitalised using the map method.
*/

// Your ES6 function here

const myArray = ["apple", "banana", "cherry"];

const capitalizeArray = (array) => array.map((a) => a.toUpperCase());
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]

/*
Write an ES6 function that takes an array of objects representing people and
 returns an array of their ages using the map method.
*/

// Your ES6 function here

const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];

const getAges = (array) => array.map(({ age }) => age);
const ages = getAges(people);
console.log(ages); // Output: [25, 24, 29]

/*
4. Write an ES6 function that takes an array of objects representing products and 
returns an array with the product names in all lower case letters using the map method.
*/

// Your ES6 function here

const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];

const getProductNamesInLowerCase = (array) =>
  array.map(({ name }) => name.toLowerCase());
console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]

/*
Write an ES6 function that takes an array of objects representing cities and
 returns an array of their names using the map method.
*/

// Your ES6 function here

const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

const getCityNames = (array) => array.map(({ name }) => name);
console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]

/*
Write an ES6 function that takes an array of strings and 
returns an array with only the strings that have a length greater than 5.
*/

// Your ES6 function here

const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];

const filterLongStrings = (array) => array.filter((a) => a.length > 5);
console.log(filterLongStrings(fruits));
// Output: ["banana", "watermelon", "pineapple"]

/*
Write an ES6 function that takes an array of numbers and 
returns an array with only the numbers that are divisible by 3 and also by 5.
*/

// Your ES6 code here

const numbers1 = [1, 2, 30, 4, 15];
const isDivisibleBy3and5 = (array) =>
  array.filter((a) => a % 3 == 0 && a % 5 == 0);
console.log(isDivisibleBy3and5(numbers1));
// Output: [30, 15]

/*
Write an ES6 function that takes an array of objects with the properties name and age, and 
returns an array with only the objects that have an age greater than 30.
*/

// Your ES6 code here

const people1 = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

const filterByAge = (array) => array.filter(({ age }) => age > 30);

console.log(filterByAge(people1));
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

/*
Write an ES6 function that takes an array of objects with the properties name and score, and 
returns an array with only the objects that have a score greater than 80.
*/

// Your ES6 code here

const students = [
  { name: "Aditya", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];

const filterByScore = (array) => array.filter(({ score }) => score > 80);
console.log(filterByScore(students));
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

/*
Write an ES6 function that takes an array of objects with the properties name, age and city, and
 returns an array with only the objects
 that have a city property of "Indore" and age greater than 70.
*/

// Your ES6 code here

const people2 = [
  { name: "Ridhima", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" },
];

const filterByCityAndAge = (array) =>
  array.filter(({ city, age }) => city === "Indore" && age > 70);
const filteredPeople = filterByCityAndAge(people2);
console.log(filteredPeople);
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

/*
Write an ES6 function that takes an array of objects containing employee information (name, age, salary)
returns an array with only the employees who earn a salary above 22000 and age is above 25. */

// Your ES6 code here

const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
];

const filterBySalary = (array) =>
  array.filter(({ age, salary }) => age > 25 && salary > 22000);

const filteredEmployees = filterBySalary(employees, 22000, 25);
console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]
