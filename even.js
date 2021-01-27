//Example 1 - Declaring a function which takes a number parameter and determines if it's even
const isEven  = function (num) {
  return num % 2 === 0;
}

//Testing the function
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//Simplifying the code
console.log(isEven(10));
console.log(isEven(11));