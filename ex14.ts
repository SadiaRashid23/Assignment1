/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes
at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them 
to dinner.*/
let guests=["Jasmine", "Josphine", "Jaira"];
let message="You are coordially invited to dinner a 7:00 p.m. at Gia's Restaurant this SaturdayJuly 15, 2023."
for(let i=0; i<guests.length; i++)
{
console.log(`Dear ${guests[i]}, ${message}`);
}

console.log( "output using forEach method");
guests.forEach(guest=>{
    console.log(`Dear ${guest}, ${message}`);
});
export{}


