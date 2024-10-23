//1)Write an ES6 function that accepts an array of integers and
//returns the maximum element in the array. Avoid using in-built methods.

// Your ES6 code here

// const getMaxElement = (a) => Math.max(...a);

const getMaxElement = (a) => {
  let max = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
};

let array = [4, 78, 8, 3, 6, 0, 12, 34];
console.log(getMaxElement(array)); // 78

//2)Write an ES6 function that takes an array of numbers and
// returns the average of all the numbers. Avoid using in-built methods.

// Your ES6 code here

const calculateAverage = (a) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum / a.length;
};

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

//3)3. write an ES6 function that takes an array of numbers and
//converts even numbers to odd numbers by adding 1 to that number.

// Your ES6 code here

const convertEvenToOdd = (a) => {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      res.push(a[i] + 1);
    } else {
      res.push(a[i]);
    }
  }
  return res;
};

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]

//4) write an ES6 function that takes an array of words and
// returns an array with all its elements whose length is greater than 5.

// Your ES6 code here

const filterWords = (a) => {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length > 5) {
      res.push(a[i]);
    }
  }
  return res;
};

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]

//5)Write an ES6 function that takes an array of strings and
// returns a new array with each string capitalized.

// Your ES6 code here

const capitalizeWords = (a) => {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    res.push(a[i].toUpperCase());
  }
  return res;
};

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]

//6)Write an ES6 function that takes an array of objects and a property name and
// returns a new array with only the values of that property. Avoid using in-built methods.

// Your ES6 code here

// const person = {
//     name: "Alice",
//     age: 30,
//     city: "New York"
//   };

//1.Using Dot Notation: You can access properties directly if you know the property names:
//console.log(person.name); // Output: "Alice"

//2.Using Bracket Notation (Static Access):
//You can also access properties using bracket notation, but this requires you to specify the property name as a string:
//console.log(person["name"]); // Output: "Alice" "hard-coding"

//3.Dynamic Property Access
//Now, let's say you want to access a property based on a variable. For instance:
//const propertyName = "city"; // Variable containing the property name
//console.log(person[propertyName]); // Output: "New York"

//4.Static Access: Accessing known properties using fixed names (dot notation or bracket notation with string literals).

//5.Dynamic Access: Accessing properties based on variable names or runtime conditions (only with bracket notation).

const getValues = (a, name) => {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    res.push(a[i][name]);
  }
  return res;
};

console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "name"
  )
); // ["John", "Mary", "Peter"]

//7)Write an ES6 function that takes the users' details and
// returns the data with team ID. Avoid using in-built methods.

// Your ES6 code here

const podAndTeamAllocation = (a) => ({
  ...a,
  firstName: "vishal singh",
  teamId: 667543,
});

const userData = { firstName: "John", lastName: "Dee" };

console.log(podAndTeamAllocation(userData));
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

//8)Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and
//return the object else do nothing and return the same object. Avoid using in-built methods.

// Your ES6 code here

const checkForTeam = (a) => {
  if (!a.team) {
    a.team = "A";
  }
  return a;
};

console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// {firstName: 'Priya', lastName: 'Raj', team: A}

//9)Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = {
  title: "JavaScript: The Definitive Guide",
  authors: [
    { name: "David Flanagan", age: 49 },
    { name: "Yukihiro Matsumoto", age: 57 },
  ],
  publisher: { name: "O'Reilly Media", location: "CA" },
};

// Your ES6 code here

const {
  title,
  authors: [{ name: author1 }, { name: author2 }],
  publisher: { name: publisherName },
} = book;

console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media

//10)Write an ES6 function that takes an array of objects and returns the sum of all ages.

// Your ES6 code here

const sumOfAges = (a) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i].age;
  }

  return sum;
};

var array1 = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

console.log(sumOfAges(array1)); // 121
