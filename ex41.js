"use strict";
/*Ex: 41 *Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.*/
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(arr) {
    console.log(`the names of the magicians are : ${arr}`);
}
let magicians = ["Criss Angel", "David Blaine", "Derren Brown", "Dynamo"];
show_magicians(magicians);
