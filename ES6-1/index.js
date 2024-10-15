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
