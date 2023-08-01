/*Ex: 15Changing Guest List: You just heard that one of your guests can’t make it to the dinner, so you need to send out 
a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the
 guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
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
export{}
