"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program.*/
let guests = ["Jasmine", "Josphine", "Jaira"];
let message = "You are coordially invited to dinner a 7:00 p.m. at Gia's Restaurant this SaturdayJuly 15, 2023.";
guests.forEach(guest => {
    console.log(`Dear ${guest}, ${message}`);
});
console.log("\n Josphine cannot join us at dinner due to her flight scheduled this Saturday");
// updating the list of guests
guests.splice(1, 1, "Roseline");
guests.forEach(guest => {
    console.log(`Dear ${guest}, ${message}`);
});
console.log("Congrats! We have found a bigger table, two more guests can be invited now.");
guests.unshift("Amilia");
guests.push("Anna");
guests.forEach(guest => {
    console.log(`Dear ${guest}, ${message}`);
});
console.log("We can invite only two people for dinner");
for (let i = guests.length; i > 2; i--) {
    let dropguest = guests.pop();
    console.log(`We are sorry Dear ${dropguest}!You can not be invited to dinner`);
}
for (let j = 0; j < guests.length; j++) {
    console.log(`Dear ${guests[j]} You are still invited`);
}
// making the guest list empty
for (let m = 0; m <= guests.length; m++) {
    guests.pop();
}
console.log(`The guests list is empty now ${guests}`);
