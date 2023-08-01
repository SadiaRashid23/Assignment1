/*Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
  • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
  • Add a line at the end of your program stating what these animals have in common. 
  You could print a sentence such as Any of these animals would make a great pet! */
  
let pets=["dog","cat", "parrot"];
for(let count=0; count<pets.length; count++)
{
    console.log(`A ${pets[count]} would make a great pet.`);
}
console.log(`${pets} any of these animals would make a great pet`);
