//1)Create a function that takes an array of strings as an argument and
// returns a string that includes the number of items in the array and the first and last items.

// Your ES6 code here

const formatArray = (a) =>
  `fist item is ${a[0]} and last item is ${a[a.length - 1]}`;
const items = ["apple", "banana", "orange"];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".

//2)2. Create a function that takes a product object as an argument and
//returns a string that includes the product name, price, and a message based on whether it is in stock or not.

// Your ES6 code here

const formatProduct = ({ name, price, inStock }) =>
  `${name} cost INR ${price} and is in ${inStock ? "stock" : "not in stock"}`;

const product = {
  name: "Socks",
  price: 249,
  inStock: true,
};

const message1 = formatProduct(product);
console.log(message1);
// Socks costs INR 249 and is in stock.

//3)3. Write a function findPerson that takes an array of person objects and
//a name as parameters and returns the object with the matching name, or null if not found.

// Your ES6 code here

const findPerson = (a, name) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i].name.toLowerCase() === name.toLowerCase()) {
      return a[i];
    }
  }
  return null;
};

console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "akhil"
  )
);

//4)Write a function that uses destructuring to extract the first two elements from an array,
//and returns them in an object with keys 'first' and 'second'.

// Your ES6 code here

const pickFirstAndSecond = ([a, b]) => ({ first: a, second: b });

console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]));
// {first: 'red', second: 'blue'}

//5)Convert the following code to ES6+ syntax with minimum number of characters.

// function startsWithA(str) {
//     if(str.charAt(0) === 'A') {
//           return true;
//       } else {
//           return false
//       }
//   }

const startsWithA = (str) => str.charAt(0) === "A";

console.log(startsWithA("Akshita"));
// true
console.log(startsWithA("Jeena"));
// false

//6)Write an ES6 function to return only the first character of the given array.

// Your ES6 code here

const printFirstCharacter = (a) => String(a[0])[0];
// const printFirstCharacter = (a) => String(a[0]).charAt(0);

console.log(printFirstCharacter([1, 2, 3, 5, 8]));
// 1
console.log(printFirstCharacter(["orange", 42, "grape"]));

//7)Write a function to return the last 5 characters as an array from the given array.

// Your ES6 code here

// const printLastFive = ([a, b, c, d, e, f, g]) => [c, d, e, f, g];

const printLastFive = (a) => a.slice(-5);
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));
// [1, 2, 3, 5, 8]

//8)Write an ES6 function to return the second element of the given array by multiplying 20 to it.

// Your ES6 code here

const printSecondCharacter = (a) => a[1] * 20;

console.log(printSecondCharacter([1, 2, 3, 5, 8]));
// 40

//9)Write an ES6 function to return the second element of the given array by adding “Hello” before it.

// Your ES6 code here

const sayHello = (a) => `hello ${a[1]}`;

console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]));
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]));
// Hello Rakesh

//10)Write an ES6 function to return sum of all numbers at even indices of the given array.

// Your ES6 code here

const sumOfEvenIndices = (a) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sum = sum + a[i];
    }
  }
  return sum;
};

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30

//11)Write an ES6 function to return the sum of only first 2 elements of the array .

// Your ES6 code here

const sumFirstTwoElements = (a) => {
  if (a.length < 2) return "NULL";
  else return a[0] + a[1];
};

console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])); // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])); // 26
console.log(sumFirstTwoElements([12]));

//12)Write an ES6 function to return the first element which is a multiple of 5 in the given array.

// Your ES6 code here

const printMultipleOfFive = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 5 === 0) {
      return a[i];
    }
  }
  return null;
};

console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])); // 10
console.log(printMultipleOfFive([7, 7, 3])); // 5

//13)Create a function which takes in the given object and
//returns another object only with the properties postalCode and city in it.

// Your ES6 code here

const getAddress = ({ postalCode, city }) => ({ postalCode, city });

const userData = {
  name: "Jane Doy",
  postalCode: "12134",
  city: "Germany",
};

// const{name,postalCode,city}=userData

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}

//14)14. Create a function which takes in the given object and
//returns a sentence which indicates name of the person and where the person lives.

// Your ES6 code here

const printData = ({ name, country }) => `${name} lives in ${country}`;

const userData1 = {
  name: "Gaurav",
  postalCode: "12134",
  country: "Japan",
};
console.log(printData(userData1)); // Gaurav lives in Japan

const userData2 = {
  name: "Pritam",
  postalCode: "560223",
  country: "India",
};
console.log(printData(userData2)); // Pritam lives in India

//15)Create a function which takes a product object and returns a sentence about the product using ES6 features.

// Your ES6 code here

const printProductDetails = ({ name, specification: { capacity, size } }) =>
  `${name} ${size} ${capacity}`;

const product1 = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch",
  },
  price: 82900,
};

// const{name,specification:{capacity,size}}=product1
console.log(printProductDetails(product1)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.
