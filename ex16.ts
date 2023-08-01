/* Ex: 16 More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/
let guests=["Jasmine", "Josphine", "Jaira"];
let message="You are coordially invited to dinner a 7:00 p.m. at Gia's Restaurant this SaturdayJuly 15, 2023."
guests.forEach(guest=>{
    console.log(`Dear ${guest}, ${message}`);
});

console.log("\n Josphine cannot join us at dinner due to her flight scheduled this Saturday");
// updating the list of guests
guests.splice(1,1,"Roseline");

guests.forEach(guest=>{
    console.log(`Dear ${guest}, ${message}`);
});

console.log("Congrats! We have found a bigger table, two more guests can be invited now.");
guests.unshift("Amilia");
guests.push("Anna");

guests.forEach(guest=>{
    console.log(`Dear ${guest}, ${message}`);
});
export{};
