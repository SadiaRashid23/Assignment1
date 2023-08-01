"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let places = ["Maldives", "Cappadocia", "Rome", "Petra", "Costa Rica"];
console.log("The places I would like to visit are as follows:");
console.log(places);
let newArr = [...places];
console.log(`The places in alphabetical order= ${newArr.sort()}`);
console.log(`my array is still in original order = ${places}`);
console.log(`The places in reverse alphabetical order= ${newArr.reverse()}\n`);
console.log(`my array is still in original order= ${places}`);
console.log(`my array of places in reverse alphabetical order= ${places.reverse()}`);
console.log(`my array of places order is changed again to be in original order= ${places.reverse()}`);
console.log(`my array of places in alphabetical order= ${places.sort()}`);
console.log(`my array of places in reverse alphabetical order= ${places.reverse()}`);
