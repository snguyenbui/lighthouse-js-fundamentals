//Iterating Over Arrays: Banana Bread Assignment
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("The list of ingredients:")
let whileLoopIndex = 0;
while (whileLoopIndex < ingredients.length){
  console.log(ingredients[whileLoopIndex]);
  whileLoopIndex++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("The list of ingredients:");
for (let forLoopIndex = 0; forLoopIndex < ingredients.length; forLoopIndex++){
  console.log(ingredients[forLoopIndex]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("The list of ingredients backwards:");
for (let reverseIndex = ingredients.length - 1; reverseIndex >= 0; reverseIndex--){
  console.log(ingredients[reverseIndex]);
}

//console.log(ingredients.reverse()) could also be used