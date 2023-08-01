"use strict";
/*Ex:34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a
 for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
such as I really love pizza!*/
let favPizza = ["fajita", "pepporoni", "BBQ"];
for (let c = 0; c < favPizza.length; c++) {
    console.log(favPizza[c]);
}
// program modified
for (let i = 0; i < favPizza.length; i++) {
    console.log(`${favPizza[i]} is one of my favourite pizzas.`);
}
console.log("Pizza is an Italian origin dish.\n On a wheat based dough , different toppings are used to create a variety of flovours.");
console.log("I really enjoy eating pizza.");
