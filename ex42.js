"use strict";
/*Ex: 42 Great Magicians: Start with a copy of your program from Exercise 39 (which is 41 now).
Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(arr) {
    console.log("magicians names are: ".concat(arr));
}
function make_great(arr) {
    for (var i in arr) {
        arr[i] = arr[i] + " " + "The Great";
    }
}
var magicians = ["Criss Angel", "David Blaine", "Derren Brown", "Dynamo"];
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
