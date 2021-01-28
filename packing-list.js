//Example 1 - iterating through an array with a for loop

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];
/*
console.log("Kitchen stuff to pack:");
//For loop
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
*/

//Example 2 - iterating through an array with a while loop

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}