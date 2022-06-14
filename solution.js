/* EXERCISE
 Create an array containing the following values: "🐔", "🐷", "🐑", "🐰".
 Next create a new array containing the following names 'Gertrude', 'Henry', 'Melvin', 'Billy'.
 Use the right for loop to randomly assign the names to the animals
 PS the same name can be assigned to more than 1 animal

Possible result..
    Billy the hen
    Gertrude the pig
    Billy the sheep
    Melvin the bunny
  */

let animalArray = ["🐔", "🐷", "🐑", "🐰"];
let nameArray = ["Gertrude", "Henry", "Melvin", "Billy"];

for (let el of nameArray) {
  console.log(
    `${el} the ${animalArray[Math.floor(Math.random() * animalArray.length)]}`
  );
}
