/*Ex:44  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.*/
function sandwich(items:string[]) 
{
console.log(`The sandwich that you ordered will contain the following items\n ${items}\n`);
}
let user_choice= ["pulled chicken", "pickled cucumber", "BBQ sauce","olives", "tomatoes", "lettuce"];
sandwich(user_choice);
user_choice=["boiled eggs", "mayo", "black pepper", "cucumber"];
sandwich(user_choice);
user_choice=["chicken", "black olives", "onion", "tomatoes","cheese"];
sandwich(user_choice);


